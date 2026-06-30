import React, { useState } from 'react';
import { Hover } from '../ui.jsx';
import { WhatsApp, Phone, Hamburger } from '../icons.jsx';
import { NAV_ITEMS, WA_LINK, TEL_LINK, PHONE } from '../data.js';
import Logo from './Logo.jsx';

export default function Header({ page, nav, scrolled, isMobile }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navStyle = (id) => {
    const a = page === id;
    return {
      fontFamily: 'Heebo,sans-serif',
      fontWeight: a ? 700 : 600,
      fontSize: 16,
      color: a ? '#1689C4' : '#11313E',
      textDecoration: 'none',
      cursor: 'pointer',
      padding: '6px 2px',
      borderBottom: `2px solid ${a ? '#1689C4' : 'transparent'}`,
      transition: 'color .2s,border-color .2s',
      whiteSpace: 'nowrap',
    };
  };

  const go = (id) => { setMenuOpen(false); nav(id); };

  return (
    <header
      style={{
        position: 'sticky', top: 0, zIndex: 60,
        background: 'rgba(255,255,255,.92)', backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #EAF1F5',
        boxShadow: scrolled ? '0 6px 24px rgba(14,58,79,.1)' : '0 1px 0 rgba(0,0,0,.03)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 22px', height: 74, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18 }}>
        <Logo onClick={() => go('home')} />

        {!isMobile && (
          <nav aria-label="תפריט ראשי" style={{ display: 'flex', alignItems: 'center', gap: 26 }}>
            {NAV_ITEMS.map((it) => (
              <a
                key={it.id}
                href={`#${it.id}`}
                onClick={(e) => { e.preventDefault(); go(it.id); }}
                aria-current={page === it.id ? 'page' : undefined}
                style={navStyle(it.id)}
              >
                {it.label}
              </a>
            ))}
          </nav>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {!isMobile && (
            <Hover as="a" href={WA_LINK} target="_blank" rel="noopener"
              b="display:inline-flex;align-items:center;gap:8px;background:#1689C4;color:#fff;font-family:Heebo,sans-serif;font-weight:700;font-size:15px;padding:11px 20px;border-radius:11px;text-decoration:none;box-shadow:0 8px 18px rgba(22,137,196,.26)"
              h="background:#0E3A4F">
              <WhatsApp s={17} /> חייגו / וואטסאפ
            </Hover>
          )}
          {isMobile && (
            <>
              <a href={TEL_LINK} aria-label={`חיוג ל-${PHONE}`} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 42, height: 42, background: '#1689C4', color: '#fff', borderRadius: 11, textDecoration: 'none' }}>
                <Phone s={19} />
              </a>
              <button type="button" onClick={() => setMenuOpen((v) => !v)} aria-label="תפריט" aria-expanded={menuOpen} aria-controls="mobile-nav" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 42, height: 42, background: '#EEF7FC', border: '1px solid #D9E8F0', borderRadius: 11, cursor: 'pointer' }}>
                <Hamburger />
              </button>
            </>
          )}
        </div>
      </div>

      {isMobile && menuOpen && (
        <nav id="mobile-nav" aria-label="תפריט ראשי" style={{ background: '#fff', borderTop: '1px solid #EAF1F5', padding: '8px 22px 16px', display: 'flex', flexDirection: 'column', animation: 'fadeIn .2s ease both' }}>
          {NAV_ITEMS.map((it, i) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              onClick={(e) => { e.preventDefault(); go(it.id); }}
              aria-current={page === it.id ? 'page' : undefined}
              style={{ padding: '13px 4px', fontFamily: 'Heebo,sans-serif', fontWeight: 600, fontSize: 17, color: '#0E3A4F', textDecoration: 'none', borderBottom: i < NAV_ITEMS.length - 1 ? '1px solid #F0F5F8' : 'none', cursor: 'pointer' }}
            >
              {it.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
