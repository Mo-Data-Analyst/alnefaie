
export function getContactMethods(contact) {
  const phoneDigits = contact.phone ? contact.phone.replace(/[^\d+]/g, '') : null;
  return [
    { key: 'address', icon: 'location', value: contact.address, href: null, isText: true },
    { key: 'phone', icon: 'phone', value: contact.phone, href: phoneDigits ? `tel:${phoneDigits}` : null, isLtr: true },
    {
      key: 'whatsapp',
      icon: 'whatsapp',
      value: null,
      href: contact.whatsappNumber ? `https://wa.me/${contact.whatsappNumber}` : null,
      newTab: true,
    },
    { key: 'email', icon: 'mail', value: contact.email, href: contact.email ? `mailto:${contact.email}` : null, isLtr: true },
  ];
}
