(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const config = window.SITE_CONFIG || {};
  const portable = window.EHC_PORTABLE === true;
  const resources = window.SECURITY_RESOURCES || [];
  const arabic = {};
  $$('[data-i18n]').forEach(el => { arabic[el.dataset.i18n] = el.innerHTML.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, ''); });
  $$('[data-i18n-aria]').forEach(el => { arabic[el.dataset.i18nAria] = el.getAttribute('aria-label'); });
  $$('[data-i18n-placeholder]').forEach(el => { arabic[el.dataset.i18nPlaceholder] = el.placeholder; });
  Object.assign(arabic, {
    close: 'إغلاق', menuOpen: 'افتح القائمة', menuClose: 'أغلق القائمة', readGuide: 'اقرأ الدليل', minutes: 'دقائق قراءة', guides: 'أدلة عملية',
    sources: 'للمزيد من القراءة', articleNote: 'إرشادات عامة للتوعية؛ لا تحل محل تقييم متخصص يناسب حالتك.', articleCta: 'ناقش احتياجات فريقك', fullGuide: 'افتح الدليل الكامل',
    formEmailDraft: 'افتح مسودة بريد', formNoteEmail: 'تُفتح مسودة في تطبيق بريدك. راجعها واضغط إرسال بنفسك؛ هذا الموقع لا يرسل الطلب تلقائياً.',
    downloadReady: 'طلبك جاهز. لم يتم إرساله؛ حمّل الملف وشاركه عند التواصل مع EHC.', downloadAgain: 'حمّل الطلب',
    draftReady: 'مسودة البريد جاهزة. اضغط الرابط لفتح تطبيق بريدك، ثم راجع الطلب وأرسله بنفسك.', openDraft: 'افتح مسودة البريد',
    privacyEmail: 'بيانات النموذج لا تُرسل إلى خادم الموقع. تُستخدم في متصفحك لإنشاء مسودة بريد أو ملف قابل للتنزيل. لا تصل الرسالة إلى الجهة المستلمة إلا إذا أرسلتها بنفسك عبر تطبيق بريدك.',
    emailDirect: 'راسلنا مباشرة', invalidBlank: 'يرجى إدخال الاسم واسم الشركة، وليس مسافات فقط.',
    finderQ1: 'ما الأولوية التي تريد العمل عليها؟', finderQ2: 'هل لديك متطلب محدد من عميل أو جهة؟', finderQ3: 'ما حجم فريقك؟',
    priorityTrust: 'الاستعداد لمعيار أو متطلب عميل', priorityTest: 'اكتشاف نقاط الضعف التقنية', priorityProtect: 'اختيار SafeToOpen', priorityPeople: 'تقوية وعي الفريق وأمن الحسابات',
    standardLocal: 'متطلب من جهة سورية مختصة', standardUnsure: 'لا أعرف بعد / لا يوجد متطلب محدد',
    sizeSmall: 'حتى 10 أشخاص', sizeMedium: '11–50 شخصاً', sizeLarge: 'أكثر من 50 شخصاً',
    next: 'التالي', back: 'السابق', resultButton: 'اعرض نقطة البداية', recommended: 'نقطة بداية مقترحة', resultCta: 'جهّز طلباً لهذه الخدمة', restart: 'ابدأ من جديد',
    resultIso: 'ابدأ بمراجعة الفجوات ونطاق نظام إدارة أمن المعلومات. تساعدك هذه الخطوة على تحديد خطة الاستعداد للتدقيق المستقل.',
    resultSoc: 'ابدأ بتحديد نطاق الخدمة ومتطلبات العميل والضوابط والأدلة المطلوبة. اتفق لاحقاً على نوع الفحص مع جهة CPA مؤهلة.',
    resultPci: 'ابدأ بتحديد كيفية التعامل مع بيانات الدفع ونطاق الأنظمة. مسار التحقق يعتمد على نشاطك ومتطلبات الجهات المعنية.',
    resultLocal: 'ابدأ بتحديد الجهة المختصة والمتطلب الرسمي ومدى انطباقه على نشاطك بالتنسيق مع المختصين.',
    resultPentest: 'ابدأ بتحديد الأنظمة المصرح باختبارها والهدف من الاختبار. خطط للمعالجة وإعادة الاختبار ضمن نطاق واضح.',
    resultSafe: 'ابدأ بمناقشة الاستخدام المتوقع وخيارات المنتج والترخيص. نساعدك على فهم العرض المناسب قبل الاختيار.',
    resultAwareness: 'ابدأ بجلسة عملية لحماية الحسابات والتعرف إلى التصيد. يمكن تكييف المحتوى مع احتياجات فريقك.',
    resultUnsure: 'ابدأ بنقاش يحدد أهداف شركتك وأنواع بياناتها ومتطلبات عملائها. نختار الخدمة المناسبة بعد فهم السياق.',
    finderBrief: 'ملخص اختيار الخدمة', enquiryTitle: 'طلب خدمات EHC Security', briefName: 'الاسم', briefCompany: 'الشركة', briefEmail: 'البريد الإلكتروني', briefService: 'الخدمة', briefMessage: 'الأهداف', noMessage: 'لم يُضف وصف',
  });
  const english = {
    skip: 'Skip to content', announcement: 'Local understanding. Global standards. A safer future for Syria.', announcementLink: 'Protection begins with knowledge ↗',
    brandSub: 'Cybersecurity & compliance', navLabel: 'Main navigation', navServices: 'Services', navApproach: 'Our approach', navLearn: 'Learning hub', navContact: 'Let’s talk ↗', menuOpen: 'Open navigation', menuClose: 'Close navigation',
    heroEyebrow: 'FOR AMBITIOUS BUSINESSES IN SYRIA', heroTitle1: 'Protect your business.', heroTitle2: 'Earn their trust.',
    heroDescription: 'Make cybersecurity a step toward growth. Understand your risks, prepare for compliance, and protect what matters—with clear guidance and a practical plan.',
    heroCta: 'Find your starting point', heroSecondary: 'Explore our services', heroFootnote: 'Clear needs. Defined scope. Actionable next steps.',
    heroVisualLabel: 'An illustration of layered protection', visualLabel: 'Protection with purpose', visualCompliance: 'Compliance readiness', visualProtection: 'With local guidance', visualBottom: 'Trust starts with a strong foundation.',
    standardsLabel: 'Prepare for standards recognized worldwide', standardsPentest: 'Penetration testing',
    servicesEyebrow: 'OUR SERVICES / FROM UNDERSTANDING TO ACTION', servicesTitle: 'A step toward security.\nA step toward growth.', servicesIntro: 'Start with what you actually need. Together, we define priorities and scope, then build a path that fits your team and your goals.',
    service1Tag: 'INFORMATION SECURITY MANAGEMENT', service1Desc: 'Identify gaps, build your information security management system, and prepare evidence for an independent audit.', service1Link: 'Start your readiness journey',
    service2Tag: 'CUSTOMER & PARTNER CONFIDENCE', service2Desc: 'Prepare the controls and evidence your customers need, with readiness support for an independent CPA examination.', service2Link: 'Prepare for examination',
    service3Tag: 'PAYMENT DATA SECURITY', service3Desc: 'Understand your payment data scope, address gaps, and identify the appropriate validation route for your business.', service3Link: 'Understand your requirements',
    service4Tag: 'TEST. REMEDIATE. RETEST.', service4Title: 'Penetration testing', service4Desc: 'Authorized testing with a clear scope, an actionable report, remediation guidance, and a defined retest.', service4Link: 'Define your testing scope',
    service5Tag: 'UNDERSTANDING LOCAL CONTEXT', service5Title: 'Syrian requirements', service5Desc: 'Identify official requirements applicable to your sector and develop a clear readiness plan with relevant specialists.', service5Link: 'Discuss your sector’s needs',
    service6Tag: 'KNOWLEDGE IS PART OF PROTECTION', service6Title: 'Team awareness', service6Desc: 'Practical sessions and Arabic resources that help your team recognize scams, protect accounts, and work confidently.', service6Link: 'Plan a team session',
    scopeNote: 'We provide readiness and support. ISO certification is issued by an independent body; a SOC 2 report follows a qualified CPA examination. PCI DSS validation and local requirements depend on your scope.',
    browserAddress: 'Your next step toward protection', productArtTitle: 'Browse with more confidence.', productArtDesc: 'Discover SafeToOpen.\nFind the right fit for you.', productPill1: 'Clear options', productPill2: 'Local guidance', illustrationNote: 'An illustration, not the product interface.',
    productEyebrow: 'OUR EXCLUSIVE SAFETOOPEN PARTNERSHIP', productTitle: 'Better protection.\nA partner closer to you.', productDescription: 'Add SafeToOpen to your security plan with local guidance. We help you understand product options, licensing, and the fit for your needs.',
    productFeature1: 'Understand before you choose', productFeature1Desc: 'Explore available features and what they mean for you.', productFeature2: 'Licensing that fits your needs', productFeature2Desc: 'Discuss your use, scope, and subscription options.', productFeature3: 'Help getting started', productFeature3Desc: 'Guidance on onboarding and next steps within the agreed scope.', productCta: 'Discuss SafeToOpen options', productOfficial: 'Official product website',
    approachEyebrow: 'CLARITY AT EVERY STAGE', approachTitle: 'Expertise that gets your business.\nA plan you can act on.', approachIntro: 'You don’t need to understand every technical term to make a good decision. We explain priorities, deliverables, and what comes next.',
    step1Title: 'Listen', step1Desc: 'Understand your business, challenges, and customer requirements.', step2Title: 'Define', step2Desc: 'Agree on goals, deliverables, and responsibilities before work begins.', step3Title: 'Improve', step3Desc: 'Prioritize the work and provide clear guidance for your team.', step4Title: 'Review', step4Desc: 'Review evidence or remediation and identify the next steps to sustain progress.',
    partnerTitle: 'Specialist expertise. Clear responsibilities.', partnerDesc: 'A technical partnership with GTI is planned. Delivery teams and independent assessors are defined in each engagement’s proposal.', partnerLink: 'Meet GTI',
    learnEyebrow: 'KNOWLEDGE PROTECTS EVERYONE', learnTitle: 'A safer digital life.\nOne simple step at a time.', learnIntro: 'Practical guides for businesses and individuals. Read, share, and put what you learn into practice—no technical background needed.', filterLabel: 'Filter learning guides', filterAll: 'All guides', filterBusiness: 'For businesses', filterCommunity: 'For the community', learnBottom: 'An informed team is part of your security system.', learnWorkshop: 'Discuss a team workshop',
    faqEyebrow: 'GOOD QUESTIONS. CLEAR ANSWERS.', faqTitle: 'Start with\nthe bigger picture.', faqIntro: 'Choose a service based on what you need, beyond the name of a standard.', faqFinder: 'Help me choose',
    faq1Q: 'Do you guarantee certification or a successful examination?', faq1A: 'No. We provide readiness, support, and control improvements. ISO certification is issued by an independent body; a SOC 2 report follows a qualified CPA examination. Outcomes depend on implemented controls and the independent assessment.',
    faq2Q: 'How do I choose the right standard?', faq2A: 'Start with customer requirements, your sector, and the data you handle. ISO 27001 can support a management system; SOC 2 can address technology customers’ assurance needs; PCI DSS applies when payment data is in scope. Every business does not need every standard.',
    faq3Q: 'Is penetration testing enough to protect my business?', faq3A: 'A test identifies weaknesses within a defined scope and time. Ongoing protection also needs remediation, updates, account management, backups, and awareness. Testing scope and authorization are agreed before work begins.',
    faq4Q: 'Are the learning guides free?', faq4A: 'Yes. Our learning hub is open to everyone. Private team sessions, assessments, and implementation services are scoped in a separate proposal.',
    faq5Q: 'Which Syrian compliance requirements apply to us?', faq5A: 'Requirements depend on the sector, activity, and relevant authority. We identify current official requirements and their applicability with relevant specialists. We do not assume a single standard or official approval applies to all companies.',
    contactEyebrow: 'YOUR NEXT STEP', contactTitle: 'Let’s build\na stronger foundation.', contactIntro: 'Tell us a little about your business and what you want to achieve. Prepare a clear enquiry to discuss scope and next steps.', contactPoint1: 'A conversation about your needs', contactPoint2: 'Clear scope and deliverables', contactPoint3: 'Communication in Arabic or English', contactEhc: 'Contact through EHC', contactPrivacy: 'Please leave passwords and sensitive information out of your enquiry.',
    formTitle: 'Prepare your enquiry', formName: 'Full name', formCompany: 'Company / organization', formEmail: 'Email address', formService: 'How can we help?', formMessage: 'What would you like to achieve? (optional)', namePlaceholder: 'Your name', companyPlaceholder: 'Your company', servicePlaceholder: 'Choose a service', serviceUnsure: 'Help me choose a starting point', messagePlaceholder: 'A customer requirement, a security review, or a place to start…', formDownload: 'Download your enquiry', formNoteDownload: 'Creates a file on your device. Your details are not sent automatically; share the file when contacting EHC.',
    footerTagline: 'Trust starts with security.', footerMission: 'Protection that supports your business.\nKnowledge that strengthens our community.', footerEhc: 'Explore EHC', footerRights: '. All rights reserved.', footerLocation: 'For businesses and communities in Syria',
    privacyLink: 'Privacy', privacyEyebrow: 'YOUR DATA ON THIS WEBSITE', privacyTitle: 'Clear about privacy.', privacyBody1: 'This website has no analytics tools or advertising trackers. Your language preference is saved only in your browser; you can clear it through your browser settings.', privacyBody2: 'Enquiry form details are not sent to a server. Your browser uses them to create a downloadable file. If you share it with EHC, the details become part of the message you choose to send.', privacyBody3: 'When you visit EHC, partners, or external resources, their own policies apply. Do not enter passwords or sensitive information into the form.',
    finderEyebrow: 'A FIRST STEP IN UNDER A MINUTE', finderTitle: 'Where should you start?', finderIntro: 'Initial service guidance, not a security or legal assessment.',
    close: 'Close', readGuide: 'Read the guide', minutes: 'min read', guides: 'practical guides', sources: 'Further reading', articleNote: 'General educational guidance; not a substitute for an assessment tailored to your situation.', articleCta: 'Discuss your team’s needs', fullGuide: 'Open the full guide',
    formEmailDraft: 'Prepare an email draft', formNoteEmail: 'Opens a draft in your email app. Review it and send it yourself; this website does not send your enquiry automatically.', downloadReady: 'Your enquiry is ready and has not been sent. Download it and share it when you contact EHC.', downloadAgain: 'Download the enquiry', draftReady: 'Your email draft is ready. Open your email app using the link, then review and send the enquiry yourself.', openDraft: 'Open email draft', privacyEmail: 'Form details are not sent to this website’s server. Your browser uses them to create an email draft or downloadable file. A recipient receives your message only when you send it yourself through your email app.', emailDirect: 'Email us directly', invalidBlank: 'Please enter your name and company, not just spaces.',
    finderQ1: 'What would you like to work on first?', finderQ2: 'Do you have a specific requirement?', finderQ3: 'How big is your team?', priorityTrust: 'Prepare for a standard or customer requirement', priorityTest: 'Identify technical security weaknesses', priorityProtect: 'Explore SafeToOpen', priorityPeople: 'Build awareness and protect team accounts', standardLocal: 'A requirement from a Syrian authority', standardUnsure: 'Not sure yet / no specific requirement', sizeSmall: 'Up to 10 people', sizeMedium: '11–50 people', sizeLarge: 'More than 50 people', next: 'Next', back: 'Back', resultButton: 'Show my starting point', recommended: 'A suggested starting point', resultCta: 'Prepare an enquiry for this service', restart: 'Start again',
    resultIso: 'Start with a gap review and define your information security management scope. This helps shape a readiness plan for an independent certification audit.', resultSoc: 'Start with service scope, customer requirements, controls, and evidence. Agree on the examination type with a qualified CPA firm.', resultPci: 'Start by identifying how you handle payment data and which systems are in scope. Validation depends on your activity and the relevant requirements.', resultLocal: 'Start by identifying the relevant authority, the official requirement, and how it applies to your activity with qualified specialists.', resultPentest: 'Start by defining the systems you are authorized to test and your testing goals. Plan remediation and retesting within a clear scope.', resultSafe: 'Start by discussing your intended use, product options, and licensing. Understand the right fit before choosing a plan.', resultAwareness: 'Start with a practical session on account protection and phishing. The material can be tailored to your team’s needs.', resultUnsure: 'Start with a conversation about your goals, data, and customer requirements. Choose a service once the context is clear.',
    finderBrief: 'Service finder summary', enquiryTitle: 'EHC Security enquiry', briefName: 'Name', briefCompany: 'Company', briefEmail: 'Email', briefService: 'Service', briefMessage: 'Goals', noMessage: 'No additional description',
  };
  const enDescription = 'Cybersecurity and ISO 27001, SOC 2, PCI DSS readiness, penetration testing, and SafeToOpen guidance for businesses in Syria.';
  const arDescription = $('meta[name="description"]').content;
  let language = 'ar';
  let activeFilter = 'all';
  let activeResource = null;
  let enquiryUrl = null;
  let finder = { step: 0, answers: ['', '', ''] };
  const text = key => (language === 'en' ? english : arabic)[key] || key;
  const glyphPaths = {
    '↗': 'M5 19 19 5M5 5h14v14',
    '←': 'M20 12H4m6-6-6 6 6 6',
    '✓': 'm5 12 4 4 10-10',
    '✳': 'M12 3v18M3 12h18M5.6 5.6l12.8 12.8M5.6 18.4 18.4 5.6',
    'ⓘ': 'M12 7h.01M12 11v6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0',
  };
  const glyph = symbol => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24'); svg.setAttribute('class', 'ui-glyph'); svg.setAttribute('aria-hidden', 'true');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path'); path.setAttribute('d', glyphPaths[symbol]); svg.append(path); return svg;
  };
  const putText = (el, value) => {
    el.replaceChildren();
    String(value).split(/(\n|↗|←|✓|✳|ⓘ)/).forEach(part => { if (part === '\n') el.append(document.createElement('br')); else if (glyphPaths[part]) el.append(glyph(part)); else el.append(document.createTextNode(part)); });
  };
  const element = (tag, className, content) => { const el = document.createElement(tag); if (className) el.className = className; if (content != null) el.textContent = content; return el; };
  const validEmail = typeof config.contactEmail === 'string' && /^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(config.contactEmail.trim()) ? config.contactEmail.trim() : '';
  const mailLink = (subject, body) => `mailto:${encodeURIComponent(validEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  function applyLanguage(next, updateUrl = false) {
    language = next === 'en' ? 'en' : 'ar';
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    $$('[data-i18n]').forEach(el => putText(el, text(el.dataset.i18n)));
    $$('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', text(el.dataset.i18nAria)));
    $$('[data-i18n-placeholder]').forEach(el => { el.placeholder = text(el.dataset.i18nPlaceholder); });
    $('#language-toggle span').textContent = language === 'ar' ? 'EN' : 'العربية';
    $('#language-toggle').setAttribute('aria-label', language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    $('#menu-toggle').setAttribute('aria-label', text($('#main-nav').classList.contains('open') ? 'menuClose' : 'menuOpen'));
    document.title = language === 'ar' ? 'EHC Security — احمِ أعمالك. اكسب الثقة.' : 'EHC Security — Protect your business. Earn their trust.';
    $('meta[name="description"]').content = language === 'en' ? enDescription : arDescription;
    $('meta[property="og:title"]').content = document.title;
    $('meta[property="og:description"]').content = $('meta[name="description"]').content;
    $('meta[property="og:locale"]').content = language === 'ar' ? 'ar_SY' : 'en_US';
    try { localStorage.setItem('ehc-language', language); } catch { /* Storage may be disabled. */ }
    if (updateUrl) { const url = new URL(location.href); url.searchParams.set('lang', language); history.replaceState(null, '', url); }
    renderResources();
    if (activeResource) renderArticle(activeResource);
    if ($('#finder-dialog').open) renderFinder();
    updateContactMode();
    clearEnquiryResult();
  }

  function updateContactMode() {
    $('#form-submit-label').textContent = text(validEmail ? 'formEmailDraft' : 'formDownload');
    $('#form-note').textContent = text(validEmail ? 'formNoteEmail' : 'formNoteDownload');
    if (validEmail) {
      $('#privacy-enquiry').textContent = text('privacyEmail');
      $('#contact-direct').href = `mailto:${encodeURIComponent(validEmail)}`;
      $('#contact-direct').removeAttribute('target');
      $('#contact-direct span').textContent = text('emailDirect');
    }
  }

  const iconPaths = {
    mail: '<rect x="5" y="10" width="38" height="28" rx="4"/><path d="m6 12 18 15 18-15M14 33l5-5m15 5-5-5"/>',
    key: '<circle cx="17" cy="18" r="9"/><path d="m24 25 16 16h5v-7h-6v-6h-7M14 16l3 3"/>',
    shield: '<path d="m24 5 16 6v13c0 11-8 18-16 23C16 42 8 35 8 24V11Z"/><path d="m16 24 6 6 11-13"/>',
    check: '<rect x="9" y="8" width="30" height="36" rx="4"/><path d="M18 5h12v7H18Zm-3 18 3 3 5-6m3 5h8M15 34l3 3 5-6m3 5h8"/>',
    cloud: '<path d="M13 36h25a9 9 0 0 0 1-18A14 14 0 0 0 12 17a10 10 0 0 0 1 19Z"/><path d="M25 33V20m-6 6 6-6 6 6"/>',
    credit: '<rect x="5" y="10" width="40" height="29" rx="4"/><path d="M5 20h40M12 30h9m7 0h6"/>',
  };

  function renderResources() {
    const grid = $('#resource-grid');
    grid.replaceChildren();
    const filtered = resources.filter(item => activeFilter === 'all' || item.category === activeFilter);
    $('#resource-count').textContent = `${filtered.length} ${text('guides')}`;
    filtered.forEach(item => {
      const content = item[language];
      const card = element('article', 'resource-card');
      const cover = element('div', 'resource-cover');
      cover.setAttribute('aria-hidden', 'true');
      // Icons come exclusively from the fixed, local map above.
      cover.innerHTML = `<svg viewBox="0 0 50 50">${iconPaths[item.icon] || iconPaths.shield}</svg>`;
      const body = element('div', 'resource-card-body');
      const meta = element('div', 'resource-meta');
      meta.append(element('span', '', text(item.category === 'business' ? 'filterBusiness' : 'filterCommunity')), element('span', '', `${item.readMinutes} ${text('minutes')}`));
      const button = element('button', '', ''); button.type = 'button'; button.dataset.resource = item.id;
      button.setAttribute('aria-label', `${text('readGuide')}: ${content.title}`);
      const arrow = element('span', '', '↗'); arrow.setAttribute('aria-hidden', 'true');
      putText(arrow, '↗');
      button.append(element('span', '', text('readGuide')), arrow);
      const heading = element('h3'); const guideLink = element('a', '', content.title); guideLink.href = portable ? `#guide/${item.id}` : `guides/${language}/${item.id}/`; heading.append(guideLink);
      body.append(meta, heading, element('p', '', content.description), button);
      card.append(cover, body); grid.append(card);
    });
  }

  function openDialog(dialog) {
    if (!dialog.open) dialog.showModal();
    document.body.style.overflow = 'hidden';
  }

  function renderArticle(id) {
    const item = resources.find(resource => resource.id === id);
    if (!item) return;
    const article = item[language];
    const content = $('#resource-dialog-content'); content.replaceChildren();
    const meta = element('div', 'article-meta');
    meta.append(element('span', '', text(item.category === 'business' ? 'filterBusiness' : 'filterCommunity')), element('span', '', `${item.readMinutes} ${text('minutes')}`));
    const title = element('h2', '', article.title); title.id = 'resource-dialog-title';
    content.append(meta, title, element('p', '', article.description));
    article.sections.forEach(section => {
      content.append(element('h3', '', section.heading));
      (section.paragraphs || []).forEach(paragraph => content.append(element('p', '', paragraph)));
      if (section.bullets?.length) { const list = element('ul'); section.bullets.forEach(bullet => list.append(element('li', '', bullet))); content.append(list); }
    });
    const footer = element('div', 'article-footer');
    footer.append(element('h3', '', text('sources')));
    const links = element('div', 'article-source-links');
    (article.sources || []).forEach(source => { const link = element('a', '', source.label); link.href = source.url; link.target = '_blank'; link.rel = 'noopener noreferrer'; links.append(link); });
    footer.append(links, element('p', '', text('articleNote')));
    if (!portable) { const fullGuide = element('a', 'full-guide-link', text('fullGuide')); fullGuide.href = `guides/${language}/${item.id}/`; footer.append(fullGuide); }
    if (item.category === 'business') {
      const cta = element('button', 'button', text('articleCta')); cta.type = 'button';
      cta.addEventListener('click', () => { $('#resource-dialog').close(); chooseService(item.id.includes('iso') ? 'iso' : item.id.includes('soc') ? 'soc' : 'awareness'); });
      footer.append(cta);
    }
    content.append(footer);
  }

  function openArticle(id) {
    if (!resources.some(item => item.id === id)) return;
    activeResource = id; renderArticle(id); openDialog($('#resource-dialog'));
    $('#resource-dialog').scrollTop = 0;
    const url = new URL(location.href); url.hash = `guide/${id}`; history.replaceState(null, '', url);
  }

  function chooseService(value, summary = '') {
    $('#service').value = value;
    if (summary) $('#message').value = summary;
    clearEnquiryResult();
    location.hash = 'contact';
    $('#contact').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    $('#full-name').focus({ preventScroll: true });
  }

  const finderQuestions = [
    { title: 'finderQ1', options: [['trust', 'priorityTrust'], ['test', 'priorityTest'], ['protect', 'priorityProtect'], ['people', 'priorityPeople']] },
    { title: 'finderQ2', options: [['iso', 'ISO 27001'], ['soc', 'SOC 2'], ['pci', 'PCI DSS'], ['local', 'standardLocal'], ['unsure', 'standardUnsure']] },
    { title: 'finderQ3', options: [['small', 'sizeSmall'], ['medium', 'sizeMedium'], ['large', 'sizeLarge']] },
  ];
  const serviceKeys = { iso: 'ISO 27001', soc: 'SOC 2', pci: 'PCI DSS', pentest: 'service4Title', local: 'service5Title', safetoopen: 'SafeToOpen', awareness: 'service6Title', unsure: 'serviceUnsure' };
  const label = key => (english[key] || arabic[key]) ? text(key) : key;
  const serviceLabel = service => label(serviceKeys[service]);

  function finderRecommendation() {
    const [priority, standard] = finder.answers;
    if (priority === 'test') return ['pentest', 'resultPentest'];
    if (priority === 'protect') return ['safetoopen', 'resultSafe'];
    if (priority === 'people') return ['awareness', 'resultAwareness'];
    return ({ iso: ['iso', 'resultIso'], soc: ['soc', 'resultSoc'], pci: ['pci', 'resultPci'], local: ['local', 'resultLocal'] })[standard] || ['unsure', 'resultUnsure'];
  }

  function renderFinder() {
    const content = $('#finder-content'); content.replaceChildren();
    $$('.finder-progress span').forEach((el, index) => el.classList.toggle('done', index <= finder.step));
    if (finder.step === 3) {
      const [service, description] = finderRecommendation();
      const result = element('div', 'finder-result');
      result.append(element('p', 'finder-result-label', text('recommended')), element('h3', '', serviceLabel(service)), element('p', '', text(description)));
      const cta = element('button', 'button', text('resultCta')); cta.type = 'button';
      cta.addEventListener('click', () => {
        const summary = finder.answers.map((answer, index) => `${text(finderQuestions[index].title)} ${label(finderQuestions[index].options.find(option => option[0] === answer)[1])}`).join('\n');
        $('#finder-dialog').close(); chooseService(service, `${text('finderBrief')}\n${summary}`);
      });
      const restart = element('button', 'finder-back', text('restart')); restart.type = 'button';
      restart.addEventListener('click', () => { finder = { step: 0, answers: ['', '', ''] }; renderFinder(); });
      result.append(cta, restart); content.append(result); return;
    }
    const question = finderQuestions[finder.step];
    const fieldset = element('fieldset'); fieldset.style.cssText = 'border:0;padding:0;margin:0;min-width:0';
    fieldset.append(element('legend', 'finder-question', question.title ? text(question.title) : ''));
    const options = element('div', 'finder-options');
    question.options.forEach(([value, key]) => {
      const option = element('label', 'finder-option');
      const radio = element('input'); radio.type = 'radio'; radio.name = `finder-${finder.step}`; radio.value = value; radio.checked = finder.answers[finder.step] === value;
      radio.addEventListener('change', () => { finder.answers[finder.step] = value; $('#finder-next').disabled = false; });
      option.append(radio, element('span', '', label(key))); options.append(option);
    });
    fieldset.append(options); content.append(fieldset);
    const controls = element('div', 'finder-controls');
    const back = element('button', 'finder-back', text('back')); back.type = 'button'; back.disabled = finder.step === 0;
    back.addEventListener('click', () => { finder.step--; renderFinder(); });
    const next = element('button', 'button', text(finder.step === 2 ? 'resultButton' : 'next')); next.type = 'button'; next.id = 'finder-next'; next.disabled = !finder.answers[finder.step];
    next.addEventListener('click', () => { finder.step++; renderFinder(); $('#finder-dialog').scrollTop = 0; $('#finder-content button:not(:disabled), #finder-content input')?.focus(); });
    controls.append(back, next); content.append(controls);
  }

  function clearEnquiryResult() {
    if (enquiryUrl) { URL.revokeObjectURL(enquiryUrl); enquiryUrl = null; }
    $('#form-result').hidden = true; $('#form-result').replaceChildren();
  }

  $('#enquiry-form').addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    for (const id of ['full-name', 'company']) {
      const input = $(`#${id}`); input.setCustomValidity(input.value.trim() ? '' : text('invalidBlank'));
    }
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    const name = fields.get('name').trim(), company = fields.get('company').trim(), email = fields.get('email').trim(), service = serviceLabel(fields.get('service')), message = fields.get('message').trim();
    const body = `${text('enquiryTitle')}\n\n${text('briefName')}: ${name}\n${text('briefCompany')}: ${company}\n${text('briefEmail')}: ${email}\n${text('briefService')}: ${service}\n\n${text('briefMessage')}:\n${message || text('noMessage')}\n`;
    clearEnquiryResult();
    const result = $('#form-result');
    result.append(element('p', '', text(validEmail ? 'draftReady' : 'downloadReady')));
    const link = element('a', '', text(validEmail ? 'openDraft' : 'downloadAgain'));
    if (validEmail) link.href = mailLink(`${text('enquiryTitle')} — ${service}`, body);
    else {
      enquiryUrl = URL.createObjectURL(new Blob(['\uFEFF', body], { type: 'text/plain;charset=utf-8' }));
      link.href = enquiryUrl; link.download = 'ehc-security-enquiry.txt';
    }
    result.append(link); result.hidden = false;
    if (!validEmail) link.click();
    result.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  });
  $('#enquiry-form').addEventListener('input', event => { event.target.setCustomValidity?.(''); clearEnquiryResult(); });

  $('#language-toggle').addEventListener('click', () => applyLanguage(language === 'ar' ? 'en' : 'ar', true));
  function closeMenu() { $('#main-nav').classList.remove('open'); $('#menu-toggle').setAttribute('aria-expanded', 'false'); $('#menu-toggle').setAttribute('aria-label', text('menuOpen')); }
  $('#menu-toggle').addEventListener('click', () => { const open = $('#main-nav').classList.toggle('open'); $('#menu-toggle').setAttribute('aria-expanded', String(open)); $('#menu-toggle').setAttribute('aria-label', text(open ? 'menuClose' : 'menuOpen')); });
  $$('#main-nav a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  matchMedia('(min-width: 901px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
  $$('[data-service]').forEach(link => link.addEventListener('click', event => { event.preventDefault(); chooseService(link.dataset.service); }));
  $$('[data-filter]').forEach(button => button.addEventListener('click', () => { activeFilter = button.dataset.filter; $$('[data-filter]').forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); }); renderResources(); }));
  $('#resource-grid').addEventListener('click', event => { const button = event.target.closest('[data-resource]'); if (button) openArticle(button.dataset.resource); });
  $$('[data-open-finder]').forEach(button => button.addEventListener('click', () => { finder = { step: 0, answers: ['', '', ''] }; renderFinder(); openDialog($('#finder-dialog')); }));
  $('#privacy-button').addEventListener('click', () => openDialog($('#privacy-dialog')));
  $$('[data-close-dialog]').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));
  $$('dialog').forEach(dialog => {
    dialog.addEventListener('click', event => { const rect = dialog.getBoundingClientRect(); if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close(); });
    dialog.addEventListener('close', () => {
      if (dialog.id === 'resource-dialog') { activeResource = null; if (location.hash.startsWith('#guide/')) { const url = new URL(location.href); url.hash = 'learn'; history.replaceState(null, '', url); } }
      if (!$$('dialog').some(item => item.open)) document.body.style.overflow = '';
    });
  });
  function articleFromHash() {
    if (!location.hash.startsWith('#guide/')) return;
    try { openArticle(decodeURIComponent(location.hash.slice(7))); } catch { /* Ignore malformed URLs. */ }
  }
  window.addEventListener('hashchange', articleFromHash);
  let saved;
  try { saved = localStorage.getItem('ehc-language'); } catch { /* Use default. */ }
  const queryLanguage = new URLSearchParams(location.search).get('lang');
  applyLanguage(['en', 'ar'].includes(queryLanguage) ? queryLanguage : ['en', 'ar'].includes(saved) ? saved : config.defaultLanguage);
  $$('span[aria-hidden="true"]').forEach(el => { if (glyphPaths[el.textContent.trim()]) putText(el, el.textContent.trim()); });
  $$('.card-icon, .partner-note-icon, .form-step, .tiny-cross').forEach(el => { if (glyphPaths[el.textContent.trim()]) putText(el, el.textContent.trim()); });
  const serviceSymbols = [iconPaths.shield, iconPaths.check, iconPaths.credit, '<circle cx="25" cy="25" r="18"/><circle cx="25" cy="25" r="9"/><path d="M25 3v13m0 18v13M3 25h13m18 0h13"/>', '<path d="m25 5 15 35-15-7-15 7Z"/><path d="M25 5v28"/>', '<circle cx="18" cy="17" r="6"/><circle cx="35" cy="18" r="5"/><path d="M7 41v-5a11 11 0 0 1 22 0v5m3-15c6-2 12 3 12 10v5"/>'];
  $$('.service-symbol').forEach((el, index) => { el.innerHTML = `<svg viewBox="0 0 50 50">${serviceSymbols[index]}</svg>`; });
  $('#year').textContent = new Date().getFullYear();
  articleFromHash();
})();
