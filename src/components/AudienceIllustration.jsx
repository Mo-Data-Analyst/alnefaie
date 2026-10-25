
const drawings = {
  startup: (
    <>
      <g fill="none" stroke="var(--color-gold)" strokeWidth="1.2" opacity=".75">
        <path d="M60 130 L150 50 L240 130" />
        <circle cx="150" cy="50" r="6" fill="var(--color-gold)" />
        <path d="M100 130v-25h20v25M180 130v-40h20v40" />
      </g>
      <path d="M0 130h300" stroke="#fff" opacity=".07" />
    </>
  ),
  company: (
    <>
      <g fill="none" stroke="var(--color-gold)" strokeWidth="1.2" opacity=".75">
        <rect x="90" y="40" width="50" height="95" />
        <rect x="150" y="65" width="60" height="70" />
        <path d="M100 55h30M100 70h30M100 85h30M160 80h40M160 95h40" />
      </g>
      <path d="M0 135h300" stroke="#fff" opacity=".07" />
    </>
  ),
  factory: (
    <>
      <g fill="none" stroke="var(--color-gold)" strokeWidth="1.2" opacity=".75">
        <path d="M60 135V90l35 20V90l35 20V90l35 20V55h20v80Z" />
        <circle cx="205" cy="38" r="5" />
        <circle cx="215" cy="26" r="7" />
      </g>
      <path d="M0 135h300" stroke="#fff" opacity=".07" />
    </>
  ),
  globe: (
    <>
      <g fill="none" stroke="var(--color-gold)" strokeWidth="1.2" opacity=".75">
        <circle cx="150" cy="85" r="50" />
        <ellipse cx="150" cy="85" rx="22" ry="50" />
        <path d="M100 85h100M108 60h84M108 110h84" />
      </g>
      <circle cx="168" cy="72" r="5" fill="var(--color-gold)" />
    </>
  ),
};

export default function AudienceIllustration({ name }) {
  return (
    <svg viewBox="0 0 300 170" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <rect width="300" height="170" fill="var(--color-blue)" />
      {drawings[name]}
    </svg>
  );
}
