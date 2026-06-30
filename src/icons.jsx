import React from 'react';

// Icon set — proper JSX SVGs, parameterized by size/color.

export const WhatsApp = ({ s = 24, c = '#fff' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c} aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.7-1.2-4.4-3.9-4.6-4.1-.1-.2-1-1.4-1-2.6 0-1.2.6-1.8.9-2.1.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.5.7 1.7.8 1.9.1.1.1.3 0 .5l-.7 1c-.1.1-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1.9 1.9 1.2 2.2 1.3.3.1.4.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1.2.1 1.5.7 1.7.9.2.1.4.2.4.3.1.1.1.6-.1 1.1Z" />
  </svg>
);

export const Phone = ({ s = 22, c = '#fff' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c} aria-hidden="true">
    <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.5-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1l-2.2 2.3Z" />
  </svg>
);

export const Mail = ({ s = 22, c = '#1689C4' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const Pin = ({ s = 22, c = '#1689C4' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s7-5.7 7-11a7 7 0 0 0-14 0c0 5.3 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const Clock = ({ s = 20, c = '#1689C4' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ShieldCheck = ({ s = 22, c = '#1689C4' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" />
    <path d="m9 12 2 2 4-4" strokeLinecap="round" />
  </svg>
);

export const Invoice = ({ s = 22, c = '#1689C4' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" />
    <path d="M14 2v6h6M9 13h6M9 17h6" />
  </svg>
);

export const Star = ({ s = 22, c = '#FFB400' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c} aria-hidden="true">
    <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z" />
  </svg>
);

export const Drop = ({ s = 36, c = '#1689C4' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c} aria-hidden="true">
    <path d="M12 2C12 2 5 9.6 5 14a7 7 0 0 0 14 0C19 9.6 12 2 12 2Z" />
  </svg>
);

export const Sun = ({ s = 36, c = '#1689C4' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4.5" fill={c} stroke="none" />
    <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M5 5l1.8 1.8M17.2 17.2 19 19M19 5l-1.8 1.8M6.8 17.2 5 19" />
  </svg>
);

export const ShieldKeep = ({ s = 36, c = '#1689C4', fill = '#EAF6FB' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" fill={fill} />
    <path d="m9 12 2 2 4-4" strokeLinecap="round" />
  </svg>
);

export const ArrowLeft = ({ s = 19, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 12H5M12 5l-7 7 7 7" />
  </svg>
);

export const ChevronRight = ({ s = 20, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export const ChevronLeft = ({ s = 20, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
    <path d="m15 6-6 6 6 6" />
  </svg>
);

export const ChevronDown = ({ s = 22, c = '#1689C4' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const Close = ({ s = 24, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const Hamburger = ({ s = 22, c = '#0E3A4F' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Check = ({ s = 15, c = '#1FB855' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m5 13 4 4L19 7" />
  </svg>
);

export const Grid = ({ s = 28, c = '#1689C4' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="1.5" />
    <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
  </svg>
);

export const Railing = ({ s = 28, c = '#1689C4' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M4 20h16M5 20V8M9 20V8M15 20V8M19 20V8M3 8h18l-3-4H6L3 8Z" />
  </svg>
);

export const Skylight = ({ s = 28, c = '#1689C4' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 21 12 4l9 17H3Z" />
    <path d="M8 21v-5h8v5" />
  </svg>
);

export const Play = ({ s = 13, c = '#fff' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c} aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
);
