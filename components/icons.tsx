type IconProps = { className?: string };

export function SpotifyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9.8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.8 9.6c3.4-1 7.7-0.6 10.4 1.1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M7.1 12.6c2.9-0.8 6.6-0.5 8.9 0.9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M7.5 15.4c2.4-0.6 5.4-0.35 7.3 0.8" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.3" cy="6.7" r="1.05" fill="currentColor" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14 3v10.4a2.7 2.7 0 1 1-2.2-2.65"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 3c0.35 2.15 1.85 3.65 4 3.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function PlusIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function PawMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <ellipse cx="24" cy="31" rx="11.5" ry="9.2" fill="currentColor" />
      <ellipse cx="9" cy="18" rx="4.6" ry="6" fill="currentColor" transform="rotate(-16 9 18)" />
      <ellipse cx="18.5" cy="9.5" rx="4.8" ry="6.4" fill="currentColor" transform="rotate(-5 18.5 9.5)" />
      <ellipse cx="30" cy="9.5" rx="4.8" ry="6.4" fill="currentColor" transform="rotate(5 30 9.5)" />
      <ellipse cx="39.5" cy="18" rx="4.6" ry="6" fill="currentColor" transform="rotate(16 39.5 18)" />
    </svg>
  );
}
