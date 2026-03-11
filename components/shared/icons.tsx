type IconProps = {
  className?: string;
};

export function FoundationIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="M3 10h18" strokeWidth="2" />
      <path d="M5 10V6l7-3 7 3v4" strokeWidth="2" />
      <path d="M7 10v7M12 10v7M17 10v7" strokeWidth="2" />
      <path d="M4 20h16" strokeWidth="2" />
    </svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <circle cx="11" cy="11" r="7" strokeWidth="2" />
      <path d="m20 20-4-4" strokeWidth="2" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="M5 12h14" strokeWidth="2" />
      <path d="m13 6 6 6-6 6" strokeWidth="2" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" strokeWidth="1.8" />
      <path d="m4 7 8 6 8-6" strokeWidth="1.8" />
      <path d="M10 4h4" strokeWidth="1.8" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path
        d="M7.8 3.8 5 6.6c-1 1 0 3.9 2.3 6.2s5.2 3.3 6.2 2.3l2.8-2.8c.4-.4.4-1 0-1.4l-2-2a1 1 0 0 0-1.4 0l-1.3 1.2c-.8-.3-1.8-1.1-2.6-2-.9-.9-1.7-1.8-2-2.6l1.2-1.3a1 1 0 0 0 0-1.4l-2-2a1 1 0 0 0-1.4 0Z"
        strokeWidth="1.8"
      />
      <path d="M15.5 4.5a7 7 0 0 1 4 4" strokeWidth="1.8" />
      <path d="M14.5 8a4.5 4.5 0 0 1 2 2" strokeWidth="1.8" />
    </svg>
  );
}

export function TruckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="M2 7h11v8H2z" strokeWidth="2" />
      <path d="M13 10h4l3 3v2h-7z" strokeWidth="2" />
      <circle cx="7" cy="18" r="2" strokeWidth="2" />
      <circle cx="17" cy="18" r="2" strokeWidth="2" />
    </svg>
  );
}

export function WalletIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <rect x="3" y="6" width="18" height="12" rx="2" strokeWidth="2" />
      <path d="M15 12h6" strokeWidth="2" />
      <circle cx="16" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

export function BoxesIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <rect x="3" y="4" width="7" height="7" strokeWidth="2" />
      <rect x="14" y="4" width="7" height="7" strokeWidth="2" />
      <rect x="8.5" y="13" width="7" height="7" strokeWidth="2" />
    </svg>
  );
}

export function ToolsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="m4 20 6-6" strokeWidth="2" />
      <path d="M13 7a3 3 0 0 1 4-4l-2 2 3 3 2-2a3 3 0 0 1-4 4L7 19l-3 1 1-3 8-8Z" strokeWidth="2" />
    </svg>
  );
}

export function BuildingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <rect x="4" y="3" width="16" height="18" strokeWidth="2" />
      <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" strokeWidth="2" />
    </svg>
  );
}

export function LandscapeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="M2 18h20" strokeWidth="2" />
      <path d="m5 18 5-7 4 5 3-4 2 6" strokeWidth="2" />
    </svg>
  );
}

export function FactoryIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="M3 21V9l6 3V9l6 3V6l6 3v12H3Z" strokeWidth="2" />
      <path d="M7 21v-3M11 21v-3M15 21v-3" strokeWidth="2" />
    </svg>
  );
}

export function CraneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="M5 20V4h2v16" strokeWidth="2" />
      <path d="M7 6h12l-3 3" strokeWidth="2" />
      <path d="M16 9v6" strokeWidth="2" />
      <rect x="14" y="15" width="4" height="4" strokeWidth="2" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="M12 22s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z" strokeWidth="2" />
      <circle cx="12" cy="10" r="2.5" strokeWidth="2" />
    </svg>
  );
}

export function SocialDot({ label }: { label: string }) {
  return (
    <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-white/20 px-1 text-xs font-bold lowercase text-white/90">
      {label}
    </span>
  );
}
