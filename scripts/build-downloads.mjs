#!/usr/bin/env node
// Creates a single-file offline preview and a complete static hosting package.
// --check compares both generated artifacts without changing files.
import { readFile, writeFile, readdir, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const args = process.argv.slice(2);
if (args.some((arg) => arg !== '--check') || args.length > 1) {
  console.error('Usage: node scripts/build-downloads.mjs [--check]');
  process.exit(2);
}
const checkOnly = args.includes('--check');
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (name) => readFile(path.join(root, name));
const required = ['index.html', 'styles.css', 'site-config.js', 'resources.js', 'app.js', 'README.md'];
const entries = new Map();
for (const name of required) entries.set(name, await read(name));

async function collect(directory) {
  const children = await readdir(path.join(root, directory), { withFileTypes: true });
  for (const child of children.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)) {
    const name = `${directory}/${child.name}`;
    if (child.isDirectory()) await collect(name);
    else if (child.isFile()) entries.set(name, await read(name));
    else throw new Error(`Unsupported hosting package entry: ${name}`);
  }
}
await collect('assets');
await collect('guides');
try {
  entries.set('.nojekyll', await read('.nojekyll'));
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}
entries.set('UPLOAD.txt', Buffer.from(`EHC Security — static hosting package

1. Back up your existing website before uploading.
2. Extract this ZIP locally. Upload its contents together, keeping the assets/
   and guides/ folders and their names unchanged.
3. To add this alongside your current site, use public_html/cybersecurity/.
   Do not overwrite your existing public_html/index.html.
4. Open /cybersecurity/ on your domain. A browser should display the full design
   and the language switch, service finder, and learning guides should work.
5. Set your public contact email in site-config.js before accepting enquiries.
   Until configured, the enquiry form creates a local brief; it does not send it.

No Node.js, build process, or database is required on the hosting server.
For a single-file design preview, open preview.html in a browser. It embeds the
homepage's CSS, fonts, and JavaScript and needs no companion files.
The included README.md has configuration and deployment details.
`, 'utf8'));

let css = entries.get('styles.css').toString('utf8');
const localFontUrls = [...css.matchAll(/url\(\s*(['"]?)(assets\/fonts\/[^)'"\s]+\.woff2)\1\s*\)/g)];
if (!localFontUrls.length) throw new Error('No local font URLs found in styles.css.');
for (const match of localFontUrls) {
  const bytes = entries.get(match[2]);
  if (!bytes) throw new Error(`Missing embedded font: ${match[2]}`);
  css = css.replace(match[0], `url('data:font/woff2;base64,${bytes.toString('base64')}')`);
}
const remainingCssUrls = [...css.matchAll(/url\(([^)]+)\)/gi)].map((match) => match[1].trim().replace(/^['"]|['"]$/g, ''));
if (remainingCssUrls.some((url) => !url.startsWith('data:') && !url.startsWith('#'))) {
  throw new Error('Preview CSS contains a URL that has not been embedded.');
}
const fontLicenses = ['assets/fonts/IBM-Plex-LICENSE.txt', 'assets/fonts/Manrope-LICENSE.txt'];
const licenseComments = fontLicenses.map((name) => `<!-- Embedded font license: ${name}\n${entries.get(name).toString('utf8').replace(/--/g, '—')}\n-->`).join('\n');
let preview = entries.get('index.html').toString('utf8');
const icon = entries.get('assets/favicon.svg');
preview = preview.replace(/<link\b[^>]*rel=["']preload["'][^>]*as=["']font["'][^>]*>\s*/gi, '');
let stylesReplaced = 0;
preview = preview.replace(/<link\b[^>]*rel=["']stylesheet["'][^>]*href=["']styles\.css["'][^>]*>/gi, () => {
  stylesReplaced++;
  return `${licenseComments}\n<style>\n${css.replace(/<\/style/gi, '<\\/style')}\n</style>`;
});
if (stylesReplaced !== 1) throw new Error(`Expected one stylesheet link; found ${stylesReplaced}.`);
let iconsReplaced = 0;
preview = preview.replace(/(<link\b[^>]*rel=["']icon["'][^>]*href=)["']assets\/favicon\.svg["']/gi, (_, prefix) => {
  iconsReplaced++;
  return `${prefix}"data:image/svg+xml;base64,${icon.toString('base64')}"`;
});
if (iconsReplaced !== 1) throw new Error(`Expected one favicon link; found ${iconsReplaced}.`);
const scriptOrder = [];
preview = preview.replace(/<script\b[^>]*src=["']([^"']+)["'][^>]*>\s*<\/script>\s*/gi, (_, name) => {
  if (!['site-config.js', 'resources.js', 'app.js'].includes(name)) throw new Error(`Unexpected script dependency: ${name}`);
  scriptOrder.push(name);
  return '';
});
if (scriptOrder.join(',') !== 'site-config.js,resources.js,app.js') throw new Error('Unexpected application script order.');
// Inline scripts run after the complete DOM. Inline defer attributes are ignored
// by browsers, so retaining their original position in <head> would break startup.
const scripts = scriptOrder.map((name) => {
  const portableFlag = name === 'app.js' ? 'window.EHC_PORTABLE = true;\n' : '';
  const source = `${portableFlag}${entries.get(name).toString('utf8')}`.replace(/<\/script/gi, '<\\/script');
  return `<script>\n// Embedded ${name}\n${source}\n</script>`;
}).join('\n');
if (!preview.includes('</body>')) throw new Error('Missing body closing tag.');
preview = preview.replace('</body>', () => `${scripts}\n</body>`);
preview = preview.replace('<!DOCTYPE html>', '<!DOCTYPE html>\n<!-- Portable preview: CSS, fonts, favicon, guides, and JavaScript are embedded. -->');
if (/<(?:script|link)\b[^>]*(?:src|href)=["'](?:assets\/|styles\.css|(?:site-config|resources|app)\.js)/i.test(preview)) {
  throw new Error('Preview still contains an external application asset.');
}
entries.set('preview.html', Buffer.from(preview, 'utf8'));

// Python's standard ZIP writer makes fixed dates and permissions explicit.
// ZIP bytes are generated in memory for both normal operation and --check.
const zipper = String.raw`import base64, io, json, sys, zipfile
entries = json.load(sys.stdin)
output = io.BytesIO()
with zipfile.ZipFile(output, 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
    for entry in entries:
        info = zipfile.ZipInfo(entry['name'], date_time=(2026, 1, 1, 0, 0, 0))
        info.create_system = 3
        info.external_attr = (0o100644 << 16)
        info.compress_type = zipfile.ZIP_DEFLATED
        archive.writestr(info, base64.b64decode(entry['data']), compresslevel=9)
sys.stdout.buffer.write(output.getvalue())
`;
const sortedEntries = [...entries].sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0)
  .map(([name, data]) => ({ name, data: data.toString('base64') }));
const zipped = spawnSync('python3', ['-c', zipper], {
  input: JSON.stringify(sortedEntries), maxBuffer: 32 * 1024 * 1024,
});
if (zipped.error) throw zipped.error;
if (zipped.status !== 0) throw new Error(`ZIP generation failed: ${zipped.stderr.toString()}`);
const outputs = new Map([
  ['downloads/preview.html', Buffer.from(preview, 'utf8')],
  ['downloads/hostinger-site.zip', zipped.stdout],
]);
let stale = false;
if (!checkOnly) await mkdir(path.join(root, 'downloads'), { recursive: true });
for (const [name, expected] of outputs) {
  if (checkOnly) {
    let current;
    try { current = await read(name); } catch (error) { if (error.code !== 'ENOENT') throw error; }
    if (!current?.equals(expected)) {
      stale = true;
      console.error(`${name} is missing or outdated. Run node scripts/build-downloads.mjs.`);
    } else console.log(`${name}: current (${expected.length.toLocaleString('en-US')} bytes)`);
  } else {
    await writeFile(path.join(root, name), expected);
    console.log(`${name}: generated (${expected.length.toLocaleString('en-US')} bytes)`);
  }
}
if (stale) process.exitCode = 1;
else console.log(`Hosting package includes ${entries.size} files; offline preview has ${localFontUrls.length} embedded fonts.`);
