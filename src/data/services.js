/*
  SERVICES
  --------
  Each service appears as a card in the "Services" section, in the contact
  form's service list, and (if `showInFooter` is true) in the footer.

  To add a service: copy one block, give it a new unique `id`, and edit the text.
  `icon` must be one of the names in src/components/Icon.jsx.
*/

export const services = [
  {
    id: 'company-formation',
    icon: 'building',
    showInFooter: true,
    footerTitle: { ar: 'تأسيس الشركات', en: 'Company Formation' },
    title: { ar: 'تأسيس الشركات في مصر والسعودية', en: 'Company Formation in Egypt & Saudi Arabia' },
    summary: {
      ar: 'الكيان المناسب والمستندات الصحيحة، طبقًا للوائح والقوانين المعمول بها.',
      en: 'The right structure and documents, in line with applicable laws and regulations.',
    },
    points: [
      { ar: 'اختيار الشكل القانوني المناسب', en: 'Choosing a suitable legal structure' },
      { ar: 'مستندات التأسيس والسجل التجاري', en: 'Incorporation & commercial registration' },
      { ar: 'تأسيس الشركات في المملكة العربية السعودية', en: 'Company formation in Saudi Arabia' },
    ],
  },
  {
    id: 'industrial-licensing',
    icon: 'factory',
    showInFooter: true,
    footerTitle: { ar: 'التراخيص الصناعية', en: 'Industrial Licensing' },
    title: { ar: 'التراخيص الصناعية', en: 'Industrial Licensing' },
    summary: {
      ar: 'استخراج رخص التشغيل داخل وخارج المناطق الصناعية.',
      en: 'Operating licenses inside and outside industrial zones.',
    },
    points: [
      { ar: 'رخص التشغيل والسجل الصناعي', en: 'Operating licenses & industrial registry' },
      { ar: 'بطاقة مستلزمات الإنتاج', en: 'Production-input card' },
      {
        ar: 'طبقًا لاشتراطات الهيئة العامة للتنمية الصناعية وهيئة المجتمعات العمرانية',
        en: 'Per IDA and New Urban Communities Authority requirements',
      },
    ],
  },
  {
    id: 'accounting-auditing',
    icon: 'calculator',
    showInFooter: true,
    footerTitle: { ar: 'المحاسبة والمراجعة', en: 'Accounting & Auditing' },
    title: { ar: 'المحاسبة والمراجعة', en: 'Accounting & Auditing' },
    summary: { ar: 'حسابات دقيقة وتقارير مالية دورية.', en: 'Accurate books and periodic financial reports.' },
    points: [
      { ar: 'إعداد ومتابعة الحسابات', en: 'Bookkeeping & account follow-up' },
      { ar: 'التقارير المالية الشهرية والربع سنوية والسنوية', en: 'Monthly, quarterly & annual financial reports' },
      { ar: 'القوائم المالية السنوية وإقفال الحسابات', en: 'Annual financial statements & closing' },
    ],
  },
  {
    id: 'tax',
    icon: 'receipt',
    showInFooter: true,
    footerTitle: { ar: 'الضرائب', en: 'Taxation' },
    title: { ar: 'الضرائب والمنازعات الضريبية', en: 'Taxation & Tax Disputes' },
    summary: {
      ar: 'إقرارات في مواعيدها ودعم منظّم عند نشوء النزاعات.',
      en: 'Timely filings and organized support when disputes arise.',
    },
    points: [
      { ar: 'الإقرارات الضريبية الدورية والسنوية', en: 'Periodic & annual tax returns' },
      { ar: 'متابعة الفواتير والإيصالات الإلكترونية', en: 'E-invoice & e-receipt follow-up' },
      { ar: 'الدعم في المنازعات الضريبية', en: 'Tax dispute support' },
    ],
  },
  {
    id: 'bank-credit-files',
    icon: 'bank',
    showInFooter: true,
    footerTitle: { ar: 'الملفات الائتمانية', en: 'Bank Credit Files' },
    title: { ar: 'إدارة الملفات الائتمانية في البنوك', en: 'Bank Credit Files' },
    summary: { ar: 'ملفات ائتمانية منظّمة لتعاملاتك مع البنوك.', en: 'Organized credit files for your dealings with banks.' },
    points: [
      { ar: 'إعداد الملفات الائتمانية', en: 'Preparing credit files' },
      { ar: 'القوائم المالية الداعمة', en: 'Supporting financial statements' },
      { ar: 'المتابعة مع البنوك', en: 'Follow-up with banks' },
    ],
  },
  {
    id: 'file-preparation',
    icon: 'folderCheck',
    showInFooter: false,
    title: { ar: 'تجهيز الملفات للمكاتب الخارجية', en: 'File Preparation for External Offices' },
    summary: { ar: 'تُرسل لنا البيانات، ونسلّمك الملفات جاهزة.', en: 'You send us the data; we return the files ready.' },
    points: [
      { ar: 'إدخال البيانات وتنظيمها', en: 'Data entry & organization' },
      { ar: 'ملفات محاسبية جاهزة للاستخدام', en: 'Ready-to-use accounting files' },
      { ar: 'جدول تسليم متفق عليه', en: 'Agreed delivery schedule' },
    ],
  },
  {
    id: 'hr-training-iso',
    icon: 'userCheck',
    showInFooter: true,
    footerTitle: { ar: 'الموارد البشرية والأيزو', en: 'HR, Training & ISO' },
    title: { ar: 'الموارد البشرية والتدريب والأيزو', en: 'HR, Training & ISO' },
    summary: {
      ar: 'تهيئة الشركات للأيزو وبناء فرق عمل مدرّبة.',
      en: 'Preparing companies for ISO and building trained teams.',
    },
    points: [
      { ar: 'إعداد وتهيئة الشركات للحصول على الأيزو', en: 'Preparing companies to obtain ISO' },
      { ar: 'التدريب ومساعدة الشركات في مجال التدريب', en: 'Training programs for companies' },
      { ar: 'المساعدة في استقطاب عمالة مدرّبة', en: 'Recruiting trained staff' },
    ],
  },
  {
    id: 'social-insurance',
    icon: 'shield',
    showInFooter: false,
    title: { ar: 'التأمينات الاجتماعية وشؤون العمل', en: 'Social Insurance & Labor' },
    summary: { ar: 'إجراءات إدارية تُدار باتساق وانتظام.', en: 'Administrative processes handled consistently.' },
    points: [
      { ar: 'إجراءات التأمينات الاجتماعية', en: 'Social insurance procedures' },
      { ar: 'إجراءات مكاتب العمل', en: 'Labor-office processes' },
      { ar: 'متابعة الامتثال المؤسسي', en: 'Ongoing compliance' },
    ],
  },
  {
    id: 'financial-consultancy',
    icon: 'chartUp',
    showInFooter: false,
    title: { ar: 'الاستشارات المالية ودراسات الجدوى', en: 'Financial Consultancy & Feasibility' },
    summary: { ar: 'أرقام واضحة تدعم قرارك القادم.', en: 'Clear numbers to support your next decision.' },
    points: [
      { ar: 'دراسات الجدوى للمشروعات', en: 'Project feasibility studies' },
      { ar: 'التخطيط والتقييم المالي', en: 'Financial planning & assessments' },
      { ar: 'المتابعة المالية المستمرة', en: 'Ongoing financial monitoring' },
    ],
  },
];

// Extra option shown only in the contact form's service list
export const ongoingSupportOption = {
  id: 'ongoing-support',
  title: { ar: 'الدعم الشهري / السنوي', en: 'Ongoing monthly / annual support' },
};
