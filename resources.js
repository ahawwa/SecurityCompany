/* Original educational guides. External sources are provided for further reading. */
window.SECURITY_RESOURCES = [
  {
    id: 'spot-phishing',
    category: 'community',
    icon: 'mail',
    readMinutes: 4,
    en: {
      title: 'Pause before you click',
      description: 'A few checks can help you spot suspicious messages before you share money, passwords, or personal information.',
      sections: [
        {
          heading: 'Look at the request, not just the logo',
          paragraphs: ['A phishing message tries to get you to click, pay, open a file, or reveal information by pretending to be someone you trust. It can arrive by email, SMS, social media, or a phone call. Good spelling and a familiar logo do not prove that a message is genuine.'],
          bullets: ['Be cautious when a message creates urgency, threatens to close an account, or offers an unexpected reward.', 'Treat requests for passwords, one-time codes, bank details, or remote access as warning signs.', 'Check the full sender address and website name. Small changes can hide an impersonation.']
        },
        {
          heading: 'Verify through a separate route',
          paragraphs: ['If a message claims to come from your bank, employer, or a delivery service, open its known app or type its usual website address yourself. Use a contact number you already trust. A phone number inside a suspicious message is not independent verification.'],
          bullets: ['Do not sign in through an unexpected link or scan an unexpected payment QR code.', 'Ask a known colleague to confirm a payment request using a separate channel.', 'Never share a one-time login code with someone who contacts you.']
        },
        {
          heading: 'If you have already responded',
          paragraphs: ['Stop communicating with the sender. What you do next depends on what you shared: contact your bank promptly about a payment, change an exposed password using the genuine service, and notify your company’s IT contact if a work device or account was involved.'],
          bullets: ['Keep the message and relevant transaction details as evidence, without forwarding dangerous attachments.', 'Review account sessions and sign out unfamiliar devices where the service allows it.', 'Report the message through the platform’s reporting feature or your organization’s reporting process.']
        }
      ],
      sources: [{ label: 'CISA: Recognize and report phishing', url: 'https://www.cisa.gov/secure-our-world/recognize-and-report-phishing' }]
    },
    ar: {
      title: 'توقف لحظة قبل أن تضغط',
      description: 'خطوات بسيطة تساعدك على اكتشاف الرسائل المشبوهة قبل مشاركة أموالك أو كلمات مرورك أو معلوماتك الشخصية.',
      sections: [
        {
          heading: 'انتبه للطلب، وليس للشعار فقط',
          paragraphs: ['تحاول رسالة التصيد دفعك إلى فتح رابط أو ملف، أو إرسال المال، أو مشاركة معلوماتك عبر انتحال جهة تثق بها. قد تصلك بالبريد الإلكتروني أو الرسائل النصية أو وسائل التواصل، وقد تأتي كمكالمة هاتفية. سلامة اللغة ووجود شعار مألوف لا يثبتان أن الرسالة حقيقية.'],
          bullets: ['احذر الرسائل التي تستعجلك، أو تهدد بإغلاق حسابك، أو تعدك بجائزة غير متوقعة.', 'طلبات كلمات المرور ورموز التحقق وبيانات البنك أو التحكم عن بعد إشارات تستحق التوقف.', 'افحص عنوان المرسل واسم الموقع بالكامل؛ فقد تخفي التغييرات الصغيرة محاولة انتحال.']
        },
        {
          heading: 'تحقق عبر قناة مستقلة',
          paragraphs: ['إذا ادعت الرسالة أنها من البنك أو جهة عملك أو شركة توصيل، افتح التطبيق المعروف أو اكتب عنوان الموقع المعتاد بنفسك. استخدم رقم اتصال موثوقاً لديك مسبقاً. الرقم الموجود في رسالة مشبوهة لا يُعد وسيلة تحقق مستقلة.'],
          bullets: ['لا تسجل الدخول عبر رابط غير متوقع، ولا تمسح رمز دفع وصل دون طلب.', 'أكد طلب تحويل المال مع زميل تعرفه عبر قناة أخرى.', 'لا تشارك رمز الدخول لمرة واحدة مع شخص تواصل معك.']
        },
        {
          heading: 'إذا تفاعلت مع الرسالة بالفعل',
          paragraphs: ['أوقف التواصل مع المرسل. تعتمد الخطوة التالية على ما شاركته: تواصل سريعاً مع البنك بشأن أي دفعة، وغيّر كلمة المرور المكشوفة عبر الخدمة الأصلية، وأبلغ مسؤول تقنية المعلومات إذا تعلق الأمر بحساب العمل أو جهازه.'],
          bullets: ['احتفظ بالرسالة وتفاصيل العملية كدليل، دون إعادة إرسال المرفقات الخطرة.', 'راجع جلسات الحساب وسجّل خروج الأجهزة غير المعروفة إن كانت الخدمة تتيح ذلك.', 'أبلغ عن الرسالة عبر أداة البلاغات في المنصة أو إجراءات الإبلاغ في مؤسستك.']
        }
      ],
      sources: [{ label: 'CISA: التعرف على التصيد والإبلاغ عنه — بالإنجليزية', url: 'https://www.cisa.gov/secure-our-world/recognize-and-report-phishing' }]
    }
  },
  {
    id: 'protect-company-accounts',
    category: 'business',
    icon: 'key',
    readMinutes: 4,
    en: {
      title: 'Make company accounts harder to steal',
      description: 'Protect email, cloud storage, and administrator access with better sign-in habits and a practical MFA rollout.',
      sections: [
        {
          heading: 'Start with the accounts that unlock everything',
          paragraphs: ['Your email account often controls password resets for other services. Prioritize business email, administrator accounts, your domain registrar, finance tools, and cloud storage. Give each person their own account so access can be reviewed and removed when their role changes.'],
          bullets: ['Use a unique, long password for each service and a reputable password manager.', 'Avoid sharing administrator accounts and restrict administrator privileges to people who need them.', 'Review former employees, unused accounts, and recovery contact details.']
        },
        {
          heading: 'Add multi-factor authentication',
          paragraphs: ['Multi-factor authentication (MFA) adds another proof of identity beyond a password. When available, choose phishing-resistant methods such as supported passkeys or security keys. Authenticator apps are another option; SMS codes may improve on password-only access but have additional risks.'],
          bullets: ['Enable MFA for administrators first, then roll it out to the rest of the team.', 'Never approve a sign-in prompt you did not initiate. Report unexpected prompts.', 'Explain the new process and help employees enroll before making it mandatory.']
        },
        {
          heading: 'Plan for lost devices and staff changes',
          paragraphs: ['Security controls should not leave the business dependent on one person’s phone. Use the service’s supported recovery options, keep recovery material protected, and document who can authorize recovery. Test your process without exposing codes or disabling protections.'],
          bullets: ['Store backup codes securely and separately from the device they help recover.', 'Use more than one authorized administrator where appropriate, each with an individual account and MFA.', 'Remove access promptly when people leave and review access regularly.']
        }
      ],
      sources: [
        { label: 'CISA: Turn on MFA', url: 'https://www.cisa.gov/secure-our-world/turn-mfa' },
        { label: 'CISA: Use strong passwords', url: 'https://www.cisa.gov/secure-our-world/use-strong-passwords' }
      ]
    },
    ar: {
      title: 'اجعل سرقة حسابات شركتك أصعب',
      description: 'احمِ البريد والتخزين السحابي وحسابات الإدارة بعادات دخول أفضل وخطة عملية لتفعيل المصادقة متعددة العوامل.',
      sections: [
        {
          heading: 'ابدأ بالحسابات التي تفتح بقية الأبواب',
          paragraphs: ['غالباً ما يتحكم بريدك الإلكتروني في إعادة تعيين كلمات مرور الخدمات الأخرى. أعطِ الأولوية لبريد العمل وحسابات الإدارة ومسجل النطاق والأدوات المالية والتخزين السحابي. خصص حساباً لكل شخص حتى تتمكن من مراجعة وصوله وإلغائه عند تغير دوره.'],
          bullets: ['استخدم كلمة مرور طويلة وفريدة لكل خدمة، ومدير كلمات مرور موثوقاً.', 'تجنب مشاركة حسابات الإدارة، واحصر صلاحياتها في من يحتاجها.', 'راجع حسابات الموظفين السابقين والحسابات غير المستخدمة ووسائل الاسترداد.']
        },
        {
          heading: 'أضف المصادقة متعددة العوامل',
          paragraphs: ['تطلب المصادقة متعددة العوامل (MFA) دليلاً إضافياً على هويتك إلى جانب كلمة المرور. اختر، عند توفرها، وسائل مقاومة للتصيد مثل مفاتيح المرور أو مفاتيح الأمان التي تدعمها الخدمة. تطبيقات المصادقة خيار آخر؛ وقد تكون الرسائل النصية أفضل من كلمة مرور وحدها، لكنها تحمل مخاطر إضافية.'],
          bullets: ['فعّل المصادقة متعددة العوامل لحسابات الإدارة أولاً، ثم لبقية الفريق.', 'لا توافق على طلب دخول لم تبدأه بنفسك، وأبلغ عن الطلبات غير المتوقعة.', 'اشرح الإجراء الجديد وساعد الموظفين على التسجيل قبل فرضه.']
        },
        {
          heading: 'خطط لفقدان الأجهزة وتغير الموظفين',
          paragraphs: ['يجب ألا يصبح العمل معتمداً على هاتف شخص واحد. استخدم خيارات الاسترداد التي تدعمها الخدمة، واحمِ بيانات الاسترداد، ووثق من يحق له الموافقة على العملية. اختبر الإجراء دون كشف الرموز أو تعطيل الحماية.'],
          bullets: ['احفظ رموز الاسترداد بأمان وفي مكان منفصل عن الجهاز الذي تسترده.', 'وفر أكثر من مسؤول معتمد عند الحاجة، بحساب مستقل ومصادقة متعددة العوامل لكل منهم.', 'ألغِ الوصول سريعاً عند مغادرة الموظف، وراجع الصلاحيات دورياً.']
        }
      ],
      sources: [
        { label: 'CISA: تفعيل المصادقة متعددة العوامل — بالإنجليزية', url: 'https://www.cisa.gov/secure-our-world/turn-mfa' },
        { label: 'CISA: كلمات المرور القوية — بالإنجليزية', url: 'https://www.cisa.gov/secure-our-world/use-strong-passwords' }
      ]
    }
  },
  {
    id: 'iso-27001-start',
    category: 'business',
    icon: 'shield',
    readMinutes: 5,
    en: {
      title: 'ISO 27001: start with your business',
      description: 'Understand what an information security management system involves before investing in certification readiness.',
      sections: [
        {
          heading: 'A management system, not a software purchase',
          paragraphs: ['ISO/IEC 27001 specifies requirements for an information security management system (ISMS). It brings together risk assessment, responsibilities, policies, controls, and continual improvement. Installing a security tool alone does not establish an ISMS or make an organization certified.'],
          bullets: ['Identify which customer or business requirement makes the standard relevant.', 'Define the activities, locations, people, and systems included in the proposed scope.', 'Name an accountable owner and secure management support.']
        },
        {
          heading: 'Understand your risks and the evidence you need',
          paragraphs: ['Map important information, systems, suppliers, and business processes. Assess the risks to that information and choose appropriate treatments. Controls should respond to your risks and applicable obligations; a copied policy pack is not a substitute for how your organization actually works.'],
          bullets: ['Keep a risk assessment, treatment plan, and Statement of Applicability appropriate to the scope.', 'Record how controls operate, including access reviews, training, incident handling, and supplier checks.', 'Use internal audits and management reviews to identify and address gaps.']
        },
        {
          heading: 'Keep readiness and certification distinct',
          paragraphs: ['A consultant can help you prepare, implement, and assess readiness. Certification is a separate assessment by an independent certification body. ISO publishes standards and does not itself certify organizations. Discuss the body’s accreditation, scope, fees, and surveillance arrangements before committing.'],
          bullets: ['Ask for deliverables, responsibilities, and a realistic plan based on your starting point.', 'Confirm that the certification scope matches the services your customers care about.', 'Plan ongoing ownership and reviews after the initial assessment.']
        }
      ],
      sources: [
        { label: 'ISO: ISO/IEC 27001 information security management', url: 'https://www.iso.org/standard/27001' },
        { label: 'ISO: Certification', url: 'https://www.iso.org/certification.html' }
      ]
    },
    ar: {
      title: 'ISO 27001: ابدأ بفهم أعمالك',
      description: 'تعرف على متطلبات نظام إدارة أمن المعلومات قبل الاستثمار في الاستعداد للحصول على الشهادة.',
      sections: [
        {
          heading: 'نظام إدارة، وليس شراء برنامج',
          paragraphs: ['يحدد معيار ISO/IEC 27001 متطلبات نظام إدارة أمن المعلومات (ISMS). يجمع بين تقييم المخاطر والمسؤوليات والسياسات والضوابط والتحسين المستمر. تركيب أداة أمنية وحده لا ينشئ نظام إدارة ولا يجعل المؤسسة حاصلة على الشهادة.'],
          bullets: ['حدد متطلبات العملاء أو الأعمال التي تجعل المعيار مناسباً لك.', 'عرّف الأنشطة والمواقع والأشخاص والأنظمة التي يشملها النطاق المقترح.', 'عين مسؤولاً واضحاً واحصل على دعم الإدارة.']
        },
        {
          heading: 'افهم المخاطر والأدلة المطلوبة',
          paragraphs: ['حدد المعلومات والأنظمة والموردين والعمليات المهمة. قيّم المخاطر على تلك المعلومات واختر المعالجات المناسبة. ينبغي أن تستجيب الضوابط لمخاطرك والتزاماتك السارية؛ فنسخ حزمة سياسات لا يعوض فهم طريقة عمل مؤسستك فعلياً.'],
          bullets: ['احتفظ بتقييم للمخاطر وخطة لمعالجتها وبيان انطباق يناسب النطاق.', 'وثق تطبيق الضوابط، مثل مراجعة الصلاحيات والتدريب والتعامل مع الحوادث وفحص الموردين.', 'استخدم التدقيق الداخلي ومراجعة الإدارة لاكتشاف الثغرات ومعالجتها.']
        },
        {
          heading: 'ميز بين الاستعداد ومنح الشهادة',
          paragraphs: ['يمكن للاستشاري مساعدتك في التحضير والتطبيق وتقييم الجاهزية. أما منح الشهادة فهو تقييم منفصل تجريه جهة منح شهادات مستقلة. تنشر ISO المعايير ولا تمنح بنفسها شهادات للمؤسسات. ناقش اعتماد الجهة ونطاقها ورسومها وترتيبات المتابعة قبل التعاقد.'],
          bullets: ['اطلب مخرجات ومسؤوليات واضحة وخطة واقعية مبنية على وضعك الحالي.', 'تحقق من أن نطاق الشهادة يغطي الخدمات التي تهم عملاءك.', 'خطط لاستمرار المسؤوليات والمراجعات بعد التقييم الأول.']
        }
      ],
      sources: [
        { label: 'ISO: معيار إدارة أمن المعلومات ISO/IEC 27001 — بالإنجليزية', url: 'https://www.iso.org/standard/27001' },
        { label: 'ISO: منح الشهادات — بالإنجليزية', url: 'https://www.iso.org/certification.html' }
      ]
    }
  },
  {
    id: 'reliable-backups',
    category: 'community',
    icon: 'cloud',
    readMinutes: 4,
    en: {
      title: 'Back up what you cannot afford to lose',
      description: 'Protect personal documents and small-team files with separate copies and a recovery plan you have actually tried.',
      sections: [
        {
          heading: 'A second copy is a start',
          paragraphs: ['Photos, records, and work documents can disappear through mistakes, device failure, theft, or ransomware. Identify what matters and how often it changes. A backup should let you recover an earlier usable copy, not simply reproduce every change to the original.'],
          bullets: ['Prioritize important documents, account recovery information, and files needed for your work.', 'Choose a backup schedule that matches how much recent work you can afford to lose.', 'Check what your cloud service retains; file synchronization alone may also sync deletion or damage.']
        },
        {
          heading: 'Keep a copy out of reach',
          paragraphs: ['Backups connected to the same device or account can be affected by the same incident. Use a protected separate destination and, where practical, an offline or suitably configured immutable copy. Encryption and access controls also matter when backups contain sensitive information.'],
          bullets: ['Disconnect an external backup drive when you are not using it, if that is part of your backup method.', 'Protect backup accounts with unique passwords and MFA where supported.', 'Keep encryption recovery keys accessible to authorized people, separately from the files they protect.']
        },
        {
          heading: 'Practice restoring a file',
          paragraphs: ['A successful backup notification does not prove that you can recover. Periodically restore a sample into a safe location and check that it opens. For teams, document who restores data and which files or systems come first.'],
          bullets: ['Keep several recovery points where practical, so damage discovered late does not erase every usable copy.', 'If ransomware is suspected, disconnect affected devices from networks and seek qualified help before reconnecting or restoring.', 'Backups support recovery, but they do not undo stolen data or guarantee a complete recovery.']
        }
      ],
      sources: [{ label: 'CISA: #StopRansomware Guide', url: 'https://www.cisa.gov/stopransomware/ransomware-guide' }]
    },
    ar: {
      title: 'انسخ ما لا يمكنك تحمل فقدانه',
      description: 'احمِ مستنداتك الشخصية وملفات فريقك الصغير بنسخ منفصلة وخطة استعادة جربتها فعلياً.',
      sections: [
        {
          heading: 'النسخة الثانية هي البداية',
          paragraphs: ['قد تضيع الصور والسجلات ومستندات العمل بسبب خطأ أو عطل أو سرقة أو برمجيات فدية. حدد ما يهمك ومدى تكرار تغييره. يجب أن تتيح لك النسخة الاحتياطية استعادة نسخة سابقة صالحة، وليس مجرد تكرار كل تغيير يحدث في الأصل.'],
          bullets: ['ابدأ بالمستندات المهمة ومعلومات استرداد الحسابات والملفات الضرورية لعملك.', 'اختر جدول نسخ يناسب مقدار العمل الحديث الذي يمكنك تحمل فقدانه.', 'تحقق من مدة احتفاظ الخدمة السحابية بالنسخ؛ فقد تزامن الخدمة الحذف أو التلف أيضاً.']
        },
        {
          heading: 'احتفظ بنسخة بعيدة عن الخطر نفسه',
          paragraphs: ['قد تتأثر النسخ المتصلة بالجهاز أو الحساب نفسه بالحادث ذاته. استخدم وجهة منفصلة ومحمية، ونسخة غير متصلة أو غير قابلة للتعديل بإعداد مناسب عندما يكون ذلك عملياً. التشفير وضبط الوصول مهمان أيضاً عندما تحتوي النسخ على معلومات حساسة.'],
          bullets: ['افصل قرص النسخ الخارجي عند عدم استخدامه إذا كانت هذه طريقة النسخ التي تعتمدها.', 'احمِ حسابات النسخ بكلمات مرور فريدة ومصادقة متعددة العوامل حيث تدعمها الخدمة.', 'احفظ مفاتيح استرداد التشفير بحيث يصل إليها الأشخاص المخولون، وبشكل منفصل عن الملفات التي تحميها.']
        },
        {
          heading: 'تدرب على استعادة ملف',
          paragraphs: ['إشعار نجاح النسخ لا يثبت أنك قادر على الاستعادة. استعد ملفاً نموذجياً دورياً إلى مكان آمن وتأكد من فتحه. للفرق، وثق من يتولى الاستعادة وأي الملفات أو الأنظمة تأتي أولاً.'],
          bullets: ['احتفظ بعدة نقاط استعادة عندما يكون ذلك عملياً، حتى لا يفقدك التلف المكتشف متأخراً كل النسخ السليمة.', 'إذا اشتبهت ببرمجيات فدية، افصل الأجهزة المتأثرة عن الشبكات واطلب مساعدة مختصة قبل إعادة الاتصال أو الاستعادة.', 'تساعد النسخ على التعافي، لكنها لا تلغي سرقة البيانات ولا تضمن استعادة كاملة.']
        }
      ],
      sources: [{ label: 'CISA: دليل الوقاية من برمجيات الفدية والاستجابة لها — بالإنجليزية', url: 'https://www.cisa.gov/stopransomware/ransomware-guide' }]
    }
  },
  {
    id: 'soc2-exporters',
    category: 'business',
    icon: 'check',
    readMinutes: 5,
    en: {
      title: 'SOC 2: what international customers ask for',
      description: 'Understand the report, its scope, and its evidence requirements before planning a customer-driven readiness project.',
      sections: [
        {
          heading: 'Understand the report before promising one',
          paragraphs: ['SOC 2 is an examination of a service organization’s controls against applicable AICPA Trust Services Criteria. The result is an independent CPA firm’s report, not an ISO-style certification. It may help customers assess a provider, but not every international customer requires it.'],
          bullets: ['Ask the customer which report, services, criteria, and time period they expect.', 'Security is included; availability, processing integrity, confidentiality, and privacy may be included when relevant to the scope.', 'Agree the scope with the CPA firm before building an evidence plan.']
        },
        {
          heading: 'Type I and Type II answer different questions',
          paragraphs: ['A Type I report assesses the description of the system and the suitability of the design of controls at a specified date. A Type II report also evaluates operating effectiveness over a specified period. A readiness assessment can help find gaps, but it is not either of these independent reports.'],
          bullets: ['Clarify which type your customer will accept before scheduling the work.', 'For Type II, allow time to operate controls and collect evidence throughout the agreed period.', 'Discuss dependencies, customer responsibilities, and relevant suppliers with the examining firm.']
        },
        {
          heading: 'Build repeatable operations',
          paragraphs: ['Start with how your service actually runs: who can access it, how changes are approved, how incidents are managed, and how risks and suppliers are reviewed. Assign owners and retain consistent evidence instead of preparing documents only at the end.'],
          bullets: ['Track access reviews, onboarding and offboarding, security training, and change approvals.', 'Document procedures that staff can follow and check that they are used.', 'Share reports according to their intended distribution and the examining firm’s guidance; do not treat a scoped report as a guarantee of security.']
        }
      ],
      sources: [{ label: 'AICPA & CIMA: SOC suite of services', url: 'https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services' }]
    },
    ar: {
      title: 'SOC 2: ماذا يطلب العملاء الدوليون؟',
      description: 'افهم التقرير ونطاقه والأدلة اللازمة له قبل التخطيط لمشروع جاهزية تقوده متطلبات العملاء.',
      sections: [
        {
          heading: 'افهم التقرير قبل الالتزام به',
          paragraphs: ['SOC 2 هو فحص لضوابط مؤسسة تقدم خدمات وفق معايير خدمات الثقة المناسبة الصادرة عن AICPA. نتيجته تقرير من مكتب محاسبة قانونية أمريكي مستقل (CPA)، وليس شهادة على نمط ISO. قد يساعد العملاء في تقييم مقدم الخدمة، لكن ليس كل عميل دولي يطلبه.'],
          bullets: ['اسأل العميل عن التقرير والخدمات والمعايير والفترة الزمنية التي يتوقعها.', 'يشمل الفحص الأمن، ويمكن أن يشمل الإتاحة وسلامة المعالجة والسرية والخصوصية عندما تناسب النطاق.', 'اتفق على النطاق مع مكتب CPA قبل إعداد خطة الأدلة.']
        },
        {
          heading: 'النوع الأول والثاني يجيبان عن سؤالين مختلفين',
          paragraphs: ['يقيّم تقرير النوع الأول (Type I) وصف النظام وملاءمة تصميم الضوابط في تاريخ محدد. ويقيّم النوع الثاني (Type II) أيضاً فعالية تشغيل الضوابط خلال فترة محددة. يساعد تقييم الجاهزية على كشف الثغرات، لكنه لا يعادل أياً من هذين التقريرين المستقلين.'],
          bullets: ['حدد النوع الذي يقبله العميل قبل جدولة العمل.', 'للنوع الثاني، خصص وقتاً لتشغيل الضوابط وجمع الأدلة طوال الفترة المتفق عليها.', 'ناقش الاعتماد على الأطراف الأخرى ومسؤوليات العملاء والموردين المعنيين مع مكتب الفحص.']
        },
        {
          heading: 'ابنِ عمليات قابلة للتكرار',
          paragraphs: ['ابدأ بالطريقة الفعلية لتشغيل خدمتك: من يستطيع الوصول، وكيف تعتمد التغييرات، وكيف تدير الحوادث، وكيف تراجع المخاطر والموردين. عين المسؤولين واحتفظ بأدلة منتظمة بدلاً من إعداد المستندات في نهاية المشروع فقط.'],
          bullets: ['تتبع مراجعات الصلاحيات وإجراءات بدء العمل وإنهائه والتدريب الأمني والموافقات على التغييرات.', 'وثق إجراءات يستطيع الموظفون اتباعها، وتحقق من تطبيقها.', 'شارك التقارير وفق نطاق توزيعها المقصود وإرشادات مكتب الفحص؛ فالتقرير ذو النطاق المحدد ليس ضماناً للأمن.']
        }
      ],
      sources: [{ label: 'AICPA وCIMA: خدمات تقارير SOC — بالإنجليزية', url: 'https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services' }]
    }
  },
  {
    id: 'safer-online-payments',
    category: 'community',
    icon: 'credit',
    readMinutes: 4,
    en: {
      title: 'Shop online with fewer surprises',
      description: 'Check a seller, protect your payment information, and recognize pressure tactics before you pay.',
      sections: [
        {
          heading: 'Check the shop and the offer',
          paragraphs: ['A polished website or sponsored social-media post can still be fraudulent. Look for a clear business identity, contact details, delivery terms, and a realistic returns policy. Search independently for the business and complaints. HTTPS protects the connection; it does not prove that a seller is trustworthy.'],
          bullets: ['Be cautious about unusually low prices, urgent countdowns, and sellers who avoid ordinary questions.', 'Read the total cost, currency, delivery terms, and refund conditions before paying.', 'Check the website address carefully, especially after following an advertisement or message.']
        },
        {
          heading: 'Use a payment method you understand',
          paragraphs: ['Payment protections differ by provider, transaction type, and location. Ask your provider what dispute or recovery options apply before using an unfamiliar method. Requests to move payment outside a marketplace can remove protections that would otherwise be available.'],
          bullets: ['Do not send a card PIN, banking password, or one-time code to a seller.', 'Enter payment details only into the payment flow you deliberately chose, after checking the address.', 'Keep the order confirmation and transaction reference, and monitor your account for unexpected activity.']
        },
        {
          heading: 'For customers and merchants',
          paragraphs: ['If you suspect fraud, contact your payment provider promptly through its official channel and report the seller to the platform. For merchants, PCI DSS concerns entities that store, process, or transmit cardholder data, and those that can affect the cardholder data environment. The applicable scope and validation route depend on the payment arrangement and relevant stakeholders; there is no single blanket requirement for every Syrian business.'],
          bullets: ['Merchants should confirm obligations with their acquiring bank or payment provider.', 'Using a hosted payment provider may reduce scope, but does not automatically remove all responsibilities.', 'Never publish complete payment details in a complaint or support message.']
        }
      ],
      sources: [
        { label: 'FTC: Online shopping', url: 'https://consumer.ftc.gov/articles/online-shopping' },
        { label: 'PCI Security Standards Council: PCI DSS', url: 'https://www.pcisecuritystandards.org/standards/pci-dss/' }
      ]
    },
    ar: {
      title: 'تسوق عبر الإنترنت بمفاجآت أقل',
      description: 'تحقق من البائع، واحمِ معلومات الدفع، وانتبه لأساليب الضغط قبل إرسال المال.',
      sections: [
        {
          heading: 'تحقق من المتجر والعرض',
          paragraphs: ['قد يكون الموقع الأنيق أو المنشور الممول احتيالياً أيضاً. ابحث عن هوية واضحة للنشاط وبيانات اتصال وشروط توصيل وسياسة إرجاع واقعية. ابحث بصورة مستقلة عن النشاط والشكاوى المتعلقة به. يحمي HTTPS الاتصال، لكنه لا يثبت أن البائع موثوق.'],
          bullets: ['احذر الأسعار المنخفضة بشكل غير معتاد والعد التنازلي المستعجل والبائع الذي يتجنب الأسئلة العادية.', 'اقرأ التكلفة الإجمالية والعملة وشروط التوصيل والاسترداد قبل الدفع.', 'تحقق بدقة من عنوان الموقع، خصوصاً بعد فتح إعلان أو رسالة.']
        },
        {
          heading: 'استخدم وسيلة دفع تفهمها',
          paragraphs: ['تختلف حماية المدفوعات بحسب المزود ونوع العملية والموقع. اسأل المزود عن خيارات الاعتراض أو استرداد الأموال التي تنطبق عليك قبل استخدام طريقة غير مألوفة. قد يؤدي نقل الدفع خارج منصة البيع إلى فقدان حماية كانت متاحة داخلها.'],
          bullets: ['لا ترسل الرقم السري للبطاقة أو كلمة مرور البنك أو رمز التحقق لمرة واحدة إلى البائع.', 'أدخل بيانات الدفع فقط في مسار الدفع الذي اخترته بنفسك، بعد التحقق من عنوانه.', 'احتفظ بتأكيد الطلب ومرجع العملية، وراقب حسابك بحثاً عن نشاط غير متوقع.']
        },
        {
          heading: 'للعملاء والتجار',
          paragraphs: ['إذا اشتبهت بالاحتيال، تواصل سريعاً مع مزود الدفع عبر قناته الرسمية وأبلغ المنصة عن البائع. بالنسبة للتجار، يتعلق PCI DSS بالجهات التي تخزن بيانات حاملي البطاقات أو تعالجها أو تنقلها، وبالجهات التي قد تؤثر في بيئتها. يعتمد النطاق وطريقة إثبات الالتزام على ترتيبات الدفع والأطراف المعنية؛ ولا يوجد متطلب واحد شامل لكل شركة سورية.'],
          bullets: ['ينبغي للتاجر تأكيد التزاماته مع البنك المستحوذ أو مزود الدفع.', 'قد يقلل استخدام مزود دفع يستضيف صفحة الدفع من النطاق، لكنه لا يلغي تلقائياً كل المسؤوليات.', 'لا تنشر بيانات الدفع الكاملة في شكوى أو رسالة دعم.']
        }
      ],
      sources: [
        { label: 'FTC: التسوق عبر الإنترنت — بالإنجليزية', url: 'https://consumer.ftc.gov/articles/online-shopping' },
        { label: 'مجلس معايير أمن صناعة بطاقات الدفع: PCI DSS — بالإنجليزية', url: 'https://www.pcisecuritystandards.org/standards/pci-dss/' }
      ]
    }
  }
];
