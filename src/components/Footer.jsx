import React from 'react';
import { Hover } from '../ui.jsx';
import { WhatsApp, Mail } from '../icons.jsx';
import { PHONE, TEL_LINK, EMAIL, WA_LINK } from '../data.js';
import Logo from './Logo.jsx';

export default function Footer({ nav }) {
  const link = {
    fontFamily: 'Assistant,sans-serif', fontSize: 15, color: '#4A6572', textDecoration: 'none', cursor: 'pointer',
  };
  const h4 = { fontFamily: 'Heebo,sans-serif', fontWeight: 700, fontSize: 16, marginBottom: 14, color: '#0E3A4F' };

  return (
    <footer style={{ background: '#F4FAFD', color: '#11313E', padding: 'clamp(46px,6vw,68px) 24px 28px', borderTop: '1px solid #E2EDF3' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 36 }}>
        <div>
          <div style={{ marginBottom: 14 }}>
            <Logo height={38} onClick={() => nav('home')} />
          </div>
          <p style={{ fontFamily: 'Assistant,sans-serif', fontSize: 15, lineHeight: 1.6, color: '#4A6572', maxWidth: 260 }}>
            ניקוי חלונות וויטרינות בטכנולוגיית אוסמוזה הפוכה — ללא סימנים, ללא כימיקלים.
          </p>
        </div>

        <div>
          <h4 style={h4}>אזורי פעילות</h4>
          <p style={{ fontFamily: 'Assistant,sans-serif', fontSize: 15, lineHeight: 1.9, color: '#4A6572' }}>גוש דן · השרון · המרכז</p>
          <h4 style={{ ...h4, margin: '18px 0 10px' }}>שעות פעילות</h4>
          <p style={{ fontFamily: 'Assistant,sans-serif', fontSize: 15, lineHeight: 1.7, color: '#4A6572' }}>א'–ה' 08:00–18:00<br />ו' 08:00–13:00</p>
        </div>

        <div>
          <h4 style={h4}>ניווט מהיר</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            <Hover as="a" onClick={() => nav('private')} b={link} h="color:#1689C4">וילות ופנטהאוזים</Hover>
            <Hover as="a" onClick={() => nav('building')} b={link} h="color:#1689C4">בנייני מגורים</Hover>
            <Hover as="a" onClick={() => nav('tech')} b={link} h="color:#1689C4">הטכנולוגיה</Hover>
            <Hover as="a" onClick={() => nav('gallery')} b={link} h="color:#1689C4">גלריה</Hover>
          </div>
        </div>

        <div>
          <h4 style={h4}>יצירת קשר מהירה</h4>
          <a href={TEL_LINK} dir="ltr" style={{ display: 'block', fontFamily: 'Assistant,sans-serif', fontSize: 16, color: '#0E3A4F', textDecoration: 'none', marginBottom: 10 }}>{PHONE}</a>
          <div style={{ display: 'flex', gap: 10, marginTop: 6 }}>
            <Hover as="a" href={WA_LINK} target="_blank" rel="noopener" aria-label="וואטסאפ"
              b="width:40px;height:40px;border-radius:11px;background:#25D366;display:flex;align-items:center;justify-content:center;text-decoration:none;box-shadow:0 4px 12px rgba(37,211,102,.35)" h="background:#1FB855">
              <WhatsApp s={20} />
            </Hover>
            <Hover as="a" href={`mailto:${EMAIL}`} aria-label="אימייל"
              b="width:40px;height:40px;border-radius:11px;background:#EAF6FB;display:flex;align-items:center;justify-content:center;text-decoration:none" h="background:#1689C4">
              <Mail s={20} c="#1689C4" />
            </Hover>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '32px auto 0', paddingTop: 22, borderTop: '1px solid #D9E8F0', display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'Assistant,sans-serif', fontSize: 14, color: '#6B8490' }}>© wowindow · כל הזכויות שמורות</span>
        <a onClick={() => nav('accessibility')} style={{ fontFamily: 'Assistant,sans-serif', fontSize: 14, color: '#6B8490', textDecoration: 'underline', cursor: 'pointer' }}>הצהרת נגישות</a>
      </div>
    </footer>
  );
}
