/*
  Line icons used across the site (24×24, drawn with the current text colour).
  To add an icon, add a new entry to `iconPaths` and use <Icon name="yourName" />.
*/

const iconPaths = {
  building: <><path d="M4 21V9l8-5 8 5v12" /><path d="M9 21v-6h6v6M3 21h18" /></>,
  factory: <><path d="M3 21V11l5 3v-3l5 3v-3l5 3V5h3v16H3Z" /><path d="M7 18h2M11 18h2M15 18h2" /></>,
  calculator: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 7h8M8 11h2M12 11h2M8 15h2M12 15h2M8 18h8" /></>,
  receipt: <><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" /><path d="m9 14 6-6M9.5 8.5h.01M14.5 13.5h.01" /></>,
  bank: <><path d="M3 10 12 4l9 6" /><path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 21h18" /></>,
  folderCheck: <><path d="M4 6a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" /><path d="m9 13 2 2 4-4" /></>,
  userCheck: <><circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><path d="m16 11 2 2 4-4" /></>,
  shield: <><path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6Z" /><path d="M9 12h6M12 9v6" /></>,
  chartUp: <><path d="M4 20V4M4 20h16" /><path d="m7 15 4-4 3 3 5-6" /><path d="M15 8h4v4" /></>,
  grid: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
  document: <><path d="M4 4h10l6 6v10H4z" /><path d="M14 4v6h6M8 14h8M8 17h5" /></>,
  person: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" /></>,
  refresh: <><path d="M21 12a9 9 0 1 1-3-6.7" /><path d="M21 4v5h-5" /></>,
  institution: <path d="M3 21h18M5 21V10M19 21V10M9 21v-7M15 21v-7M2 10l10-6 10 6" />,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></>,
  barChart: <><path d="M4 20V4M4 20h16" /><rect x="7" y="12" width="3" height="5" /><rect x="12" y="8" width="3" height="9" /><rect x="17" y="10" width="3" height="7" /></>,
  checkSquare: <><path d="M9 11l3 3 8-8" /><path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9" /></>,
  message: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />,
  location: <><path d="M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></>,
  lines: <path d="M4 7h16M4 12h16M4 17h10" />,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />,
  whatsapp: <path d="M3 21l1.6-4.7A8.5 8.5 0 1 1 8 19.6Z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  check: <path d="m5 12 5 5 9-10" />,
  info: <><circle cx="12" cy="12" r="9" /><path d="M12 8h.01M11 12h1v5h1" /></>,
  chat: <><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.8A8 8 0 1 1 21 12Z" /><path d="M8.5 10.5h7M8.5 13.5h4.5" /></>,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  send: <path d="M4 12h15M13 6l6 6-6 6" />,
};

export default function Icon({ name, size = 24, strokeWidth = 1.6, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {iconPaths[name]}
    </svg>
  );
}
