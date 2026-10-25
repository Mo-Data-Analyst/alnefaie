/*
  Decorative dotted map behind the "International Clients" box.
  The dots are abstract land shapes; the pulsing marker shows Egypt (the office's home).
*/

// Rough rectangles [left, top, right, bottom] where dots are drawn
const landAreas = [
  [90, 90, 330, 250],
  [200, 250, 330, 430],
  [520, 80, 720, 190],
  [540, 190, 700, 400],
  [700, 80, 1050, 260],
  [900, 320, 1040, 420],
];

const dots = [];
for (let x = 20; x < 1200; x += 16) {
  for (let y = 20; y < 520; y += 16) {
    const isLand = landAreas.some(
      ([left, top, right, bottom]) => x > left && x < right && y > top && y < bottom && (x * 7 + y * 13) % 9 > 1
    );
    if (isLand) dots.push([x, y]);
  }
}

export default function DotWorldMap({ className }) {
  return (
    <svg className={className} viewBox="0 0 1200 520" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      {dots.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="1.6" fill="var(--color-gold)" opacity=".11" />
      ))}
      <circle cx="640" cy="200" r="5" fill="var(--color-gold)" />
      <circle cx="640" cy="200" r="14" fill="none" stroke="var(--color-gold)" opacity=".5">
        <animate attributeName="r" values="6;22;6" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values=".6;0;.6" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
