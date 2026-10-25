/*
  CHATBOT QUESTIONS AND ANSWERS
  -----------------------------
  The chatbot is NOT AI. It only shows the answers written here.
  - Visitors click a question to see its answer.
  - If they type a question that matches one below exactly (ignoring
    punctuation and small spelling differences), they get that answer.
  - Anything else gets `chatbotText.fallback`.
  To add a question: copy one block, give it a new unique `id`, edit the text.
*/

export const chatbotQuestions = [
  {
    id: 'services',
    question: { ar: 'ما الخدمات التي يقدمها المكتب؟', en: 'What services does the office provide?' },
    answer: {
      ar: 'يقدم مكتب محمد النفيعي خدمات تأسيس الشركات في مصر والسعودية، والتراخيص الصناعية، والمحاسبة والمراجعة، والإقرارات الضريبية، ومتابعة الفواتير والإيصالات الإلكترونية، وإدارة الملفات الائتمانية في البنوك، وتجهيز الملفات للمكاتب الخارجية، والموارد البشرية والتدريب والتهيئة للحصول على الأيزو، والاستشارات المالية، ومتابعة الإجراءات المتعلقة بالتأمينات الاجتماعية.',
      en: 'Mohamed Al Nefaie Office provides company formation in Egypt and Saudi Arabia, industrial licensing, accounting and auditing, tax returns, e-invoice and e-receipt follow-up, bank credit file management, file preparation for external offices, HR, training and ISO preparation, financial consultancy, and follow-up on social insurance procedures.',
    },
  },
  {
    id: 'formation',
    question: { ar: 'هل يساعد المكتب في تأسيس الشركات؟', en: 'Does the office help with company formation?' },
    answer: {
      ar: 'نعم، يقدم المكتب خدمات تأسيس الشركات، والمساعدة في اختيار الشكل القانوني المناسب، واستكمال مستندات وإجراءات التأسيس وفقًا لطبيعة النشاط والمتطلبات المعمول بها في مصر طبقًا للوائح والقوانين. كما يقدم المكتب خدمات تأسيس الشركات في المملكة العربية السعودية.',
      en: 'Yes. The office provides company formation services, helps you choose a suitable legal structure, and completes incorporation documents and procedures according to the nature of the activity and the requirements in force in Egypt, in line with applicable laws and regulations. The office also provides company formation services in Saudi Arabia.',
    },
  },
  {
    id: 'tax',
    question: { ar: 'هل يقدم المكتب خدمات ضريبية؟', en: 'Does the office provide tax services?' },
    answer: {
      ar: 'يقدم المكتب خدمات إعداد الإقرارات الضريبية، ومتابعة الالتزامات الضريبية، ومتابعة الفواتير والإيصالات الإلكترونية، والمساعدة في التعامل مع المنازعات الضريبية وفقًا لنطاق الخدمة المتفق عليه.',
      en: 'The office prepares tax returns, follows up on tax obligations and on e-invoices and e-receipts, and assists with tax disputes within the agreed scope of service.',
    },
  },
  {
    id: 'industrial',
    question: { ar: 'هل يساعد المكتب في استخراج تراخيص المصانع؟', en: 'Does the office help obtain factory licenses?' },
    answer: {
      ar: 'نعم، نقوم باستخراج رخص التشغيل والسجل الصناعي وبطاقة مستلزمات الإنتاج، داخل وخارج المناطق الصناعية، طبقًا لاشتراطات الهيئة العامة للتنمية الصناعية وهيئة المجتمعات العمرانية.',
      en: 'Yes. We obtain operating licenses, industrial registry and production-input cards, inside and outside industrial zones, in accordance with the requirements of the Industrial Development Authority and the New Urban Communities Authority.',
    },
  },
  {
    id: 'monthly',
    question: { ar: 'هل يوفر المكتب خدمات محاسبية شهرية؟', en: 'Does the office offer monthly accounting services?' },
    answer: {
      ar: 'يوفر المكتب ترتيبات للمتابعة المحاسبية والمالية الشهرية والربع سنوية والسنوية. يمكنك التواصل مع المكتب لمعرفة التفاصيل المناسبة لنشاطك.',
      en: 'The office offers monthly, quarterly and annual accounting and financial follow-up arrangements. Contact the office to learn the details that suit your business.',
    },
  },
  {
    id: 'consultation',
    question: { ar: 'هل يمكن التواصل مع المكتب للحصول على استشارة؟', en: 'Can I contact the office for a consultation?' },
    answer: {
      ar: 'بالتأكيد. يمكنك الانتقال إلى قسم «تواصل معنا» على الموقع وإرسال استفسارك من خلال وسائل التواصل المتاحة.',
      en: 'Certainly. Go to the “Contact Us” section of the website and send your inquiry through the available contact channels.',
    },
  },
];

export const chatbotText = {
  title: { ar: 'الأسئلة الشائعة', en: 'Frequently Asked Questions' },
  subtitle: { ar: 'النفيعي للمحاسبة والمراجعة', en: 'Al Nefaie Accounting & Auditing' },
  welcome: { ar: 'مرحبًا بك! اختر أحد الأسئلة التالية لعرض الإجابة.', en: 'Welcome! Choose one of the questions below to see the answer.' },
  backToQuestions: { ar: 'العودة إلى الأسئلة', en: 'Back to Questions' },
  contactUs: { ar: 'تواصل معنا', en: 'Contact Us' },
  inputPlaceholder: { ar: 'اكتب سؤالك أو اختر من القائمة…', en: 'Type your question or pick from the list…' },
  send: { ar: 'إرسال', en: 'Send' },
  open: { ar: 'فتح الأسئلة الشائعة', en: 'Open frequently asked questions' },
  close: { ar: 'إغلاق', en: 'Close' },
  fallback: {
    ar: 'عذرًا، هذا السؤال غير متاح ضمن الأسئلة الشائعة. يرجى اختيار أحد الأسئلة الموجودة أو التواصل مع المكتب.',
    en: "Sorry, this question isn't available in our FAQ. Please choose one of the listed questions or contact the office.",
  },
  footer: { ar: 'إجابات معتمدة مسبقًا · ليست استشارة لحالتك تحديدًا', en: 'Pre-approved answers · not advice for your specific case' },
};
