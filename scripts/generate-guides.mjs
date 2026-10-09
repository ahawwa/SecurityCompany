#!/usr/bin/env node
// Educational content lives in resources.js. Run this script after changing it.
// --check validates the generated pages without modifying any files.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const args = process.argv.slice(2);
if (args.some((arg) => arg !== '--check') || args.length > 1) {
  console.error('Usage: node scripts/generate-guides.mjs [--check]');
  process.exit(2);
}
const checkOnly = args.includes('--check');
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = await readFile(path.join(root, 'resources.js'), 'utf8');
const context = { window: {} };
vm.runInNewContext(source, context, { filename: 'resources.js', timeout: 1000 });
const resources = context.window.SECURITY_RESOURCES;
if (!Array.isArray(resources) || !resources.length) {
  throw new Error('resources.js must define a non-empty window.SECURITY_RESOURCES array.');
}

const copy = {
  en: {
    direction: 'ltr',
    skip: 'Skip to the guide',
    tagline: 'Trust begins with security.',
    hub: 'Knowledge hub',
    services: 'Our services',
    translation: 'اقرأ بالعربية',
    translationLang: 'ar',
    translationLabel: 'Read this guide in Arabic',
    business: 'For businesses',
    community: 'For the community',
    minutes: (value) => `${value} min read`,
    sources: 'Further reading',
    sourcesNote: 'Explore these external resources for more detail. Their own terms and privacy policies apply.',
    nextHeading: 'Turn knowledge into action.',
    nextDescription: 'Discuss your company’s security priorities, compliance readiness, or a practical awareness session for your team.',
    nextLink: 'Discuss your next step',
    back: 'Explore all guides',
    footer: 'Practical security guidance for businesses and communities in Syria.',
  },
  ar: {
    direction: 'rtl',
    skip: 'انتقل إلى الدليل',
    tagline: 'الثقة تبدأ بالأمان.',
    hub: 'مركز المعرفة',
    services: 'خدماتنا',
    translation: 'Read in English',
    translationLang: 'en',
    translationLabel: 'اقرأ هذا الدليل بالإنجليزية',
    business: 'للشركات',
    community: 'للمجتمع',
    minutes: (value) => `${value} دقائق قراءة`,
    sources: 'مصادر للتوسع',
    sourcesNote: 'يمكنك الرجوع إلى هذه المصادر الخارجية لمزيد من التفاصيل. تنطبق شروطها وسياسات خصوصيتها عند زيارتها.',
    nextHeading: 'حوّل المعرفة إلى خطوات عملية.',
    nextDescription: 'ناقش أولويات أمن شركتك، أو الاستعداد للامتثال، أو جلسة توعية عملية لفريقك.',
    nextLink: 'ناقش خطوتك التالية',
    back: 'استكشف جميع الأدلة',
    footer: 'إرشادات أمنية عملية للشركات والمجتمع في سوريا.',
  },
};

function escape(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[char]));
}

function paragraphs(values) {
  return values.map((value) => `        <p>${escape(value)}</p>`).join('\n');
}

function validateResource(resource) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(resource.id)) {
    throw new Error(`Unsafe guide id: ${resource.id}`);
  }
  if (!['business', 'community'].includes(resource.category) || !Number.isInteger(resource.readMinutes) || resource.readMinutes < 1) {
    throw new Error(`Invalid metadata for guide: ${resource.id}`);
  }
  for (const lang of ['ar', 'en']) {
    const content = resource[lang];
    if (!content?.title || !content.description || !Array.isArray(content.sections) || !content.sections.length || !Array.isArray(content.sources)) {
      throw new Error(`Incomplete ${lang} content for guide: ${resource.id}`);
    }
    for (const section of content.sections) {
      if (!section.heading || !Array.isArray(section.paragraphs) || !Array.isArray(section.bullets)) {
        throw new Error(`Invalid ${lang} section for guide: ${resource.id}`);
      }
    }
    for (const item of content.sources) {
      if (!item.label || new URL(item.url).protocol !== 'https:') {
        throw new Error(`Invalid ${lang} source for guide: ${resource.id}`);
      }
    }
  }
}

function render(resource, lang) {
  const t = copy[lang];
  const content = resource[lang];
  const rootLink = `../../../index.html?lang=${lang}`;
  const otherLink = `../../${t.translationLang}/${resource.id}/`;
  const font = lang === 'ar' ? 'ibm-plex-sans-arabic-arabic-400-normal.woff2' : 'manrope-latin-wght-normal.woff2';
  const arrow = '<svg class="guide-arrow" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="m5 15 10-10M5 5h10v10"/></svg>';
  const sections = content.sections.map((section, index) => `      <section aria-labelledby="section-${index + 1}">
        <h2 id="section-${index + 1}">${escape(section.heading)}</h2>
${paragraphs(section.paragraphs)}${section.bullets.length ? `
        <ul>
${section.bullets.map((value) => `          <li>${escape(value)}</li>`).join('\n')}
        </ul>` : ''}
      </section>`).join('\n');
  const sources = content.sources.map((item) => `          <li><a href="${escape(item.url)}" target="_blank" rel="noopener noreferrer">${escape(item.label)} ${arrow}</a></li>`).join('\n');
  return `<!doctype html>
<html lang="${lang}" dir="${t.direction}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#153e35">
  <title>${escape(content.title)} | EHC Security</title>
  <meta name="description" content="${escape(content.description)}">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${escape(content.title)} | EHC Security">
  <meta property="og:description" content="${escape(content.description)}">
  <meta property="og:site_name" content="EHC Security">
  <meta property="og:locale" content="${lang === 'ar' ? 'ar_SY' : 'en_US'}">
  <meta name="twitter:card" content="summary">
  <link rel="icon" href="../../../assets/favicon.svg" type="image/svg+xml">
  <link rel="preload" href="../../../assets/fonts/${font}" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="../../../styles.css">
  <style>
    .guide-header{border-bottom:1px solid var(--line);padding:24px 0;background:#fff}
    .guide-header-inner{max-width:960px;margin:auto;padding:0 28px;display:flex;align-items:center;justify-content:space-between;gap:24px}
    .guide-nav{display:flex;align-items:center;flex-wrap:wrap;gap:20px;font-size:12px;font-weight:600}
    .guide-nav a:hover{text-decoration:underline;text-underline-offset:5px}
    .guide-main{max-width:760px;margin:auto;padding:46px 28px 64px}
    .guide-back{font-size:12px;color:var(--green);display:inline-block;margin-bottom:30px;text-decoration:underline;text-underline-offset:5px}
    .guide-main h1,html[lang=ar] .guide-main h1{font-size:clamp(32px,5vw,46px);line-height:1.4;letter-spacing:-1px;margin-bottom:18px}
    .guide-main .guide-description{font-size:17px;line-height:1.9;margin-bottom:38px}
    .guide-main article>section{margin-top:34px}
    .guide-main h2,html[lang=ar] .guide-main h2{font-size:23px;line-height:1.6;letter-spacing:-.4px;margin-bottom:14px}
    .guide-main article p,.guide-main article li{font-size:15px;line-height:1.95}
    .guide-main article p+p{margin-top:14px}
    .guide-main article ul{padding-inline-start:23px;margin:16px 0 0;color:var(--muted)}
    .guide-main article li{padding-inline-start:4px;margin-bottom:8px}
    .guide-main .article-meta{flex-wrap:wrap;margin-bottom:16px;font-size:12px;gap:10px 24px}
    .guide-sources{border-top:1px solid var(--line);padding-top:26px;margin-top:40px!important}
    .guide-main .guide-sources p{font-size:12px}
    .guide-main .guide-source-list{list-style:none;padding:0}
    .guide-source-list a{text-decoration:underline;text-underline-offset:4px;overflow-wrap:anywhere;font-size:13px}
    .guide-arrow{display:inline-block;width:16px;height:16px;vertical-align:middle;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0}
    .guide-cta{margin-top:40px;padding:26px;border:1px solid var(--line);border-radius:14px;background:#edf2e7}
    .guide-cta p{font-size:13px;line-height:1.9;margin-bottom:20px}
    .guide-main .guide-cta h2{font-size:22px;margin-bottom:10px}
    .guide-bottom{border-top:1px solid var(--line);margin-top:32px;padding-top:24px}
    .guide-footer{border-top:1px solid var(--line);text-align:center;font-size:11px;padding:24px 28px}
    @media(max-width:600px){.guide-header-inner{align-items:flex-start;flex-direction:column;gap:18px}.guide-nav{gap:14px 20px}.guide-main{padding:30px 22px 46px}.guide-main .guide-description{font-size:15px}.guide-cta{padding:22px}.guide-main article p,.guide-main article li{font-size:14px}}
  </style>
</head>
<body>
  <a class="skip-link" href="#guide">${escape(t.skip)}</a>
  <header class="guide-header">
    <div class="guide-header-inner">
      <a class="brand" href="${rootLink}" aria-label="EHC Security">
        <img class="brand-mark" src="../../../assets/favicon.svg" width="34" height="40" alt="">
        <span><strong dir="ltr">EHC <span>SECURITY</span></strong><small>${escape(t.tagline)}</small></span>
      </a>
      <nav class="guide-nav" aria-label="${escape(t.hub)}">
        <a href="${rootLink}#learn">${escape(t.hub)}</a>
        <a href="${rootLink}#services">${escape(t.services)}</a>
        <a href="${otherLink}" lang="${t.translationLang}" dir="${copy[t.translationLang].direction}" aria-label="${escape(t.translationLabel)}">${escape(t.translation)}</a>
      </nav>
    </div>
  </header>
  <main class="guide-main" id="guide">
    <a class="guide-back" href="${rootLink}#learn">${escape(t.back)}</a>
    <article aria-labelledby="guide-title">
      <header>
        <div class="article-meta"><span>${escape(t[resource.category])}</span><span>${escape(t.minutes(resource.readMinutes))}</span></div>
        <h1 id="guide-title">${escape(content.title)}</h1>
        <p class="guide-description">${escape(content.description)}</p>
      </header>
${sections}
      <section class="guide-sources" aria-labelledby="sources-title">
        <h2 id="sources-title">${escape(t.sources)}</h2>
        <p>${escape(t.sourcesNote)}</p>
        <ul class="guide-source-list">
${sources}
        </ul>
      </section>
    </article>
    <aside class="guide-cta" aria-labelledby="next-title">
      <h2 id="next-title">${escape(t.nextHeading)}</h2>
      <p>${escape(t.nextDescription)}</p>
      <a class="button button-small" href="${rootLink}#contact">${escape(t.nextLink)} ${arrow}</a>
    </aside>
    <div class="guide-bottom"><a class="text-link" href="${rootLink}#learn">${escape(t.back)} ${arrow}</a></div>
  </main>
  <footer class="guide-footer"><p><span dir="ltr">EHC Security</span> · ${escape(t.footer)}</p></footer>
</body>
</html>
`;
}

const seen = new Set();
let checked = 0;
let stale = 0;
for (const resource of resources) {
  validateResource(resource);
  if (seen.has(resource.id)) throw new Error(`Duplicate guide id: ${resource.id}`);
  seen.add(resource.id);
  for (const lang of ['ar', 'en']) {
    const relative = path.join('guides', lang, resource.id, 'index.html');
    const filename = path.join(root, relative);
    const expected = render(resource, lang);
    if (checkOnly) {
      let actual;
      try {
        actual = await readFile(filename, 'utf8');
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
      }
      if (actual !== expected) {
        console.error(`Stale or missing generated guide: ${relative}`);
        stale += 1;
      }
    } else {
      await mkdir(path.dirname(filename), { recursive: true });
      await writeFile(filename, expected, 'utf8');
    }
    checked += 1;
  }
}
if (stale) {
  console.error(`Regenerate ${stale} page(s) with: node scripts/generate-guides.mjs`);
  process.exitCode = 1;
} else {
  console.log(`${checkOnly ? 'Verified' : 'Generated'} ${checked} standalone guide pages.`);
}
