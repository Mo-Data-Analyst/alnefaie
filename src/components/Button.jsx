/*
  Link styled as a button.
  variant: 'gold' (main action) | 'ghost' (outline, on dark backgrounds) | 'dark'
  withArrow: shows an arrow that flips automatically in Arabic.
*/
export default function Button({ href, variant = 'gold', withArrow = false, className = '', onClick, children }) {
  return (
    <a href={href} onClick={onClick} className={`button button--${variant} ${className}`.trim()}>
      <span>{children}</span>
      {withArrow && (
        <span className="button__arrow" aria-hidden="true">
          →
        </span>
      )}
    </a>
  );
}
