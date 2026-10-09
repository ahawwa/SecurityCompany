# EHC Security

An Arabic-first, English/Arabic cybersecurity website for businesses and communities in Syria. The public website is static HTML, CSS, and JavaScript. It requires no package installation, build step, database, or third-party font request.

## Included

- Responsive layouts, Arabic RTL and English LTR, with a persistent language preference.
- ISO 27001, SOC 2, PCI DSS, authorized penetration testing, applicable Syrian requirements, and team-awareness services.
- A SafeToOpen partnership section and links to the official product website.
- A three-step service finder that creates a recommended enquiry, without claiming to assess security or legal compliance.
- Six original educational guides in both languages, with source links, filters, quick-read dialogs, and twelve standalone pages for sharing and search discovery.
- Validated enquiry briefs, an optional email-draft workflow, FAQs, and a privacy explanation.
- Locally hosted fonts, original SVG graphics, metadata, and structured service information. No analytics or advertising trackers are installed.

## Run locally

Use the existing checkout; a separate worktree is unnecessary.

```sh
cd /workspace/SecurityCompany
python3 -m http.server 8000 --bind 127.0.0.1
```

Open the local server in your browser. Use `?lang=en` or `?lang=ar` to select a language explicitly. The default is Arabic; an existing saved preference is respected when no query parameter is supplied.

## Enquiries

No public contact inbox was supplied, so the default form creates a UTF-8 text brief on the visitor's device. It clearly states that nothing has been submitted and links to EHC's website for contact. Personal details are not stored in local storage or sent to a server.

To connect an approved public inbox, set `contactEmail` in `site-config.js`. The form will prepare a **mailto email draft**, which the visitor reviews and sends through their email application. It is not a backend mail-delivery service; no successful delivery is claimed. For automatic submissions, integrate an actual server endpoint or a form provider and update the privacy wording to match that implementation.

Do not put credentials or private keys into any public site file.

## Edit content

- `index.html`: primary Arabic content, page structure, metadata, and initial structured data.
- `app.js`: English copy, dynamic Arabic copy, language switching, finder, article dialogs, and enquiries. Static Arabic translations are read from `index.html`.
- `styles.css`: layout, mobile breakpoints, typography, and graphics.
- `resources.js`: the source of truth for all bilingual educational articles.
- `site-config.js`: public contact inbox and default language.

After changing a guide, regenerate its standalone pages:

```sh
node scripts/generate-guides.mjs
node scripts/generate-guides.mjs --check
```

## Deploy alongside the EHC website on Hostinger

An upload-ready ZIP is available at `downloads/hostinger-site.zip`. Extract it into the destination directory; do not leave the ZIP unextracted. `downloads/preview.html` is a self-contained preview with embedded CSS, fonts, and JavaScript. Download that HTML file and open it in a browser to inspect the design independently of companion files. It is not a published website URL.

Rebuild and check these downloads after editing the website:

```sh
node scripts/build-downloads.mjs
node scripts/build-downloads.mjs --check
```

1. Back up the existing website through Hostinger before uploading.
2. Create a new directory such as `public_html/cybersecurity`. Keep the existing EHC homepage and any WordPress files intact.
3. Upload `index.html`, `styles.css`, `app.js`, `site-config.js`, `resources.js`, `assets/`, and `guides/` into that directory. Preserve their relative paths. The scripts and README do not need to be uploaded.
4. Verify `/cybersecurity/` over HTTPS, then link to it from EHC's navigation. If the hosting plan uses a different document root, use that plan's actual root; a separately configured subdomain is another option.
5. Check Arabic/English switching, a standalone guide, the service finder, and the configured enquiry workflow on the deployed site.

The repository upload does not deploy to Hostinger. No Hostinger account, DNS, or EHC production files have been changed.

## Publish a real GitHub Pages preview

Pushing files to GitHub is not the same as publishing a website. To enable publishing in this repository, an administrator can open the repository's **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/(root)**, and save. The `.nojekyll` file makes GitHub serve the static files directly. Wait for a successful Pages deployment, then use the website URL that GitHub reports.

If those settings are unavailable, repository administration access or a compatible account plan is required. No Pages deployment is claimed until it has actually succeeded. Third-party preview URLs are not a substitute for confirming deployment.

## Before public launch

- Confirm the working name “EHC Security”, final business contact details, and agreement-specific SafeToOpen exclusivity wording.
- GTI is described as a **planned** technical partnership. Update that wording once the agreement and delivery responsibilities are confirmed.
- The service copy distinguishes readiness support from independent ISO certification and CPA-issued SOC 2 reports. It does not promise regulatory approval or invent a Syrian requirement.
- Confirm which services and product plans your delivery agreements actually cover. No prices, certifications, testimonials, or client counts have been invented.
- Once the public site location is finalized, add deployment-specific canonical URLs, a sitemap, and social-sharing image URLs. They are omitted rather than guessing your live deployment address.

## Validation

```sh
node --check app.js
node --check resources.js
node --check site-config.js
node scripts/generate-guides.mjs --check
```

Browser checks should cover Arabic/English rendering, mobile overflow, navigation, filters, article opening/closing, every finder route, invalid form input, enquiry downloads, and email drafts with a configured public inbox. Guide pages should remain readable with JavaScript disabled.

## Fonts

IBM Plex Sans Arabic and Manrope are included locally under the SIL Open Font License. Their original licenses are in `assets/fonts/`. Graphics are original SVG/CSS illustrations; the SafeToOpen illustration is clearly labeled and is not a screenshot of its product.
