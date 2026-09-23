import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

/**
 * App Allies Logo Emblem:
 * Flat vector emblem of two rounded app-icon squircles overlapping like a handshake,
 * front one in #E8542F, back one in #1C1B18 outline, transparent background, no text.
 */
export const AppAlliesEmblem: React.FC<LogoProps> = ({ size = 28, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      {/* Back squircle - #1C1B18 outline */}
      <rect
        x="4"
        y="4"
        width="24"
        height="24"
        rx="7"
        fill="none"
        stroke="var(--text-primary)"
        strokeWidth="2.5"
      />
      {/* Front squircle - solid #E8542F, overlapping in handshake gesture */}
      <rect
        x="13"
        y="13"
        width="23"
        height="23"
        rx="7"
        fill="var(--accent)"
      />
      {/* Subtle interior craft curve */}
      <path
        d="M 17 21 C 21 21, 27 25, 29 29"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  );
};

export const AppAlliesWordmark: React.FC<{ size?: number }> = ({ size = 28 }) => {
  return (
    <div className="flex items-center gap-3">
      <AppAlliesEmblem size={size} />
      <span
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '22px',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: 'var(--text-primary)',
        }}
      >
        App Allies
      </span>
    </div>
  );
};
