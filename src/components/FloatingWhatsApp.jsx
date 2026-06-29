import React from 'react';
import { Hover } from '../ui.jsx';
import { WhatsApp } from '../icons.jsx';
import { WA_LINK } from '../data.js';

export default function FloatingWhatsApp() {
  return (
    <Hover as="a" href={WA_LINK} target="_blank" rel="noopener" aria-label="וואטסאפ"
      b="position:fixed;bottom:22px;left:22px;z-index:90;width:60px;height:60px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;text-decoration:none;box-shadow:0 8px 22px rgba(37,211,102,.45);animation:pulseG 2.4s infinite"
      h="background:#1FB855">
      <WhatsApp s={32} />
    </Hover>
  );
}
