export const contactFormText = {
  fields: {
    fullName: { ar: 'الاسم الكامل', en: 'Full name' },
    company: { ar: 'اسم الشركة', en: 'Company name' },
    country: { ar: 'بلد الإقامة أو النشاط', en: 'Country of residence or business' },
    email: { ar: 'البريد الإلكتروني', en: 'Email address' },
    phone: { ar: 'رقم الهاتف (مع رمز الدولة)', en: 'Phone (with country code)' },
    countryCode: { ar: 'رمز الدولة', en: 'Country code' },
    service: { ar: 'الخدمة المطلوبة', en: 'Service of interest' },
    message: { ar: 'رسالة مختصرة', en: 'Brief message' },
  },
  optional: { ar: '(اختياري)', en: '(optional)' },
  chooseService: { ar: 'اختر الخدمة', en: 'Choose a service' },
  submit: { ar: 'إرسال الطلب', en: 'Send Request' },
  sending: { ar: 'جارٍ الإرسال…', en: 'Sending…' },
  privacyNote: {
    ar: 'نستخدم بياناتك فقط للرد على استفسارك.',
    en: 'We only use your details to respond to your inquiry.',
  },
  errors: {
    required: { ar: 'هذا الحقل مطلوب.', en: 'This field is required.' },
    email: { ar: 'يرجى إدخال بريد إلكتروني صحيح.', en: 'Please enter a valid email address.' },
    phone: { ar: 'يرجى إدخال أرقام فقط (7 إلى 15 رقمًا).', en: 'Please enter digits only (7–15 digits).' },
  },
  status: {
    success: {
      ar: 'تم إرسال طلبك بنجاح. سنتواصل معك قريبًا.',
      en: "Your request was sent successfully. We'll be in touch soon.",
    },
    error: {
      ar: 'تعذّر إرسال الطلب. يرجى المحاولة مرة أخرى أو التواصل مع المكتب مباشرة.',
      en: "We couldn't send your request. Please try again or contact the office directly.",
    },
  },
};

export const countries = [
  { value: 'Egypt', label: { ar: 'مصر', en: 'Egypt' } },
  { value: 'Saudi Arabia', label: { ar: 'السعودية', en: 'Saudi Arabia' } },
  { value: 'United Arab Emirates', label: { ar: 'الإمارات', en: 'United Arab Emirates' } },
  { value: 'Kuwait', label: { ar: 'الكويت', en: 'Kuwait' } },
  { value: 'Qatar', label: { ar: 'قطر', en: 'Qatar' } },
  { value: 'Other', label: { ar: 'دولة أخرى', en: 'Other' } },
];

export const phoneCountryCodes = ['+20', '+966', '+971', '+965', '+974', '+1', '+44'];