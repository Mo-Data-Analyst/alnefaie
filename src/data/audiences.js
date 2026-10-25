// "Who We Serve" cards. `illustration` picks a drawing from src/components/AudienceIllustration.jsx.
export const audiences = [
  {
    illustration: 'startup',
    title: { ar: 'رواد الأعمال والشركات الناشئة', en: 'Entrepreneurs & Startups' },
    text: { ar: 'اختيار الكيان والتسجيل وبناء الحسابات بشكل صحيح من البداية.', en: 'Choosing a structure, registering, and setting up your books correctly.' },
    tags: [{ ar: 'التأسيس', en: 'Formation' }, { ar: 'المحاسبة', en: 'Accounting' }],
  },
  {
    illustration: 'company',
    title: { ar: 'الشركات القائمة', en: 'Established Companies' },
    text: { ar: 'محاسبة مستمرة وقوائم مالية والتزام ضريبي.', en: 'Ongoing accounting, financial statements and tax compliance.' },
    tags: [{ ar: 'المحاسبة', en: 'Accounting' }, { ar: 'الضرائب', en: 'Tax' }, { ar: 'الموارد البشرية والأيزو', en: 'HR & ISO' }],
  },
  {
    illustration: 'factory',
    title: { ar: 'المنشآت الصناعية والإنتاجية', en: 'Industrial & Manufacturing' },
    text: { ar: 'رخص التشغيل والسجل الصناعي وإجراءات مستلزمات الإنتاج.', en: 'Operating licenses, industrial registry and production-input procedures.' },
    tags: [{ ar: 'التراخيص', en: 'Licensing' }, { ar: 'الامتثال', en: 'Compliance' }],
  },
  {
    illustration: 'globe',
    title: { ar: 'المستثمرون الدوليون', en: 'International Investors' },
    text: { ar: 'التأسيس والتشغيل في مصر، وتأسيس الشركات في السعودية.', en: 'Establishing and operating in Egypt, and company formation in Saudi Arabia.' },
    tags: [{ ar: 'التأسيس', en: 'Formation' }, { ar: 'الضرائب', en: 'Tax' }, { ar: 'السعودية', en: 'Saudi Arabia' }],
  },
];
