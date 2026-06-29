import React from 'react';
import { Hover, Img } from '../ui.jsx';
import { WhatsApp, Phone, Mail, Pin, Clock, Check, Invoice, ShieldKeep } from '../icons.jsx';
import { PHONE, EMAIL, TEL_LINK, WA_LINK } from '../data.js';

const INCLUDED = [
  `ניקוי חלונות ויטרינה בלובי כניסה (כולל גבהים)`,
  `שטיפה וחידוש של חיפויי חוץ (אלומיניום, זכוכית, שיש)`,
  `ניקוי מעקות זכוכית בשטחים המשותפים`,
  `אפשרות להסכמי תחזוקה תקופתיים (רבעוני / חצי-שנתי)`,
];

export default function Buildings() {
  const darkCard = 'display:flex;gap:14px;align-items:center;text-decoration:none;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);border-radius:16px;padding:20px';
  const ico = { flexShrink: 0, width: 46, height: 46, borderRadius: 13, display: 'flex', alignItems: 'center', justifyContent: 'center' };
  const t = { display: 'block', fontFamily: 'Heebo,sans-serif', fontWeight: 700, fontSize: 16, color: '#fff' };
  const s = { fontFamily: 'Assistant,sans-serif', fontSize: 15, color: 'rgba(255,255,255,.75)' };

  return (
    <div>
      <section style={{ position: 'relative', minHeight: 'clamp(360px,52vh,480px)', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#0E3A4F' }}>
        <Img src="images/bld-hero.png" alt="בניין מגורים מודרני" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(285deg, rgba(14,58,79,.3) 0%, rgba(14,58,79,.82) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto', padding: '0 24px', width: '100%' }}>
          <div style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 700, fontSize: 14, letterSpacing: '.05em', color: '#34B3E8', marginBottom: 12 }}>המגזר המשותף</div>
          <h1 style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 800, fontSize: 'clamp(28px,4.4vw,50px)', color: '#fff', lineHeight: 1.12 }}>פתרונות ניקוי מתקדמים לוועדי בתים ובנייני מגורים</h1>
        </div>
      </section>

      <section style={{ padding: 'clamp(54px,7vw,88px) 24px', maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 40 }}>
          <div>
            <h2 style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 800, fontSize: 'clamp(23px,2.8vw,30px)', color: '#0E3A4F', marginBottom: 22 }}>השירותים הכלולים</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {INCLUDED.map((txt, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: '50%', background: '#E4F5EA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Check /></span>
                  <span style={{ fontFamily: 'Assistant,sans-serif', fontSize: 17, lineHeight: 1.5, color: '#11313E' }}>{txt}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: '#EEF7FC', borderRadius: 20, padding: '30px 28px' }}>
            <h2 style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 800, fontSize: 'clamp(23px,2.8vw,30px)', color: '#0E3A4F', marginBottom: 20 }}>למה ועדי בתים בוחרים בנו?</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ display: 'flex', gap: 13, alignItems: 'flex-start' }}>
                <span style={{ flexShrink: 0, marginTop: 1 }}><Invoice s={24} /></span>
                <div style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 700, fontSize: 17, color: '#0E3A4F' }}>עבודה מסודרת עם חשבוניות מס</div>
              </div>
              <div style={{ display: 'flex', gap: 13, alignItems: 'flex-start' }}>
                <span style={{ flexShrink: 0, marginTop: 1 }}><Clock s={24} /></span>
                <div style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 700, fontSize: 17, color: '#0E3A4F' }}>עמידה קפדנית בלוחות זמנים</div>
              </div>
              <div style={{ display: 'flex', gap: 13, alignItems: 'flex-start' }}>
                <span style={{ flexShrink: 0, marginTop: 1 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1689C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C12 2 5 9.6 5 14a7 7 0 0 0 14 0C19 9.6 12 2 12 2Z" /></svg>
                </span>
                <div>
                  <div style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 700, fontSize: 17, color: '#0E3A4F' }}>ללא סבונים שמחליקים או משאירים שלוליות</div>
                  <div style={{ fontFamily: 'Assistant,sans-serif', fontSize: 14, color: '#5E7782' }}>טכנולוגיה שאינה מלכלכת את סביבת הלובי</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 50, background: '#0E3A4F', borderRadius: 22, padding: 'clamp(30px,5vw,46px)' }}>
          <h2 style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 800, fontSize: 'clamp(22px,3vw,30px)', color: '#fff', marginBottom: 6, textAlign: 'center' }}>מעוניינים בהצעה לבניין?</h2>
          <p style={{ fontFamily: 'Assistant,sans-serif', fontSize: 16, color: 'rgba(255,255,255,.8)', textAlign: 'center', marginBottom: 28 }}>דברו איתנו ונבנה יחד פתרון תחזוקה שמתאים לבניין שלכם</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 14 }}>
            <Hover as="a" href={TEL_LINK} b={darkCard} h="background:rgba(255,255,255,.14)">
              <span style={{ ...ico, background: 'rgba(255,255,255,.12)' }}><Phone s={22} /></span>
              <span><span style={t}>טלפון ישיר</span><span style={s} dir="ltr">{PHONE}</span></span>
            </Hover>
            <Hover as="a" href={WA_LINK} target="_blank" rel="noopener" b={darkCard} h="background:rgba(255,255,255,.14)">
              <span style={{ ...ico, background: 'rgba(37,211,102,.18)' }}><WhatsApp s={22} c="#25D366" /></span>
              <span><span style={t}>וואטסאפ</span><span style={s}>שלחו הודעה עכשיו</span></span>
            </Hover>
            <Hover as="a" href={`mailto:${EMAIL}`} b={darkCard} h="background:rgba(255,255,255,.14)">
              <span style={{ ...ico, background: 'rgba(255,255,255,.12)' }}><Mail s={22} c="#fff" /></span>
              <span><span style={t}>אימייל</span><span style={s} dir="ltr">{EMAIL}</span></span>
            </Hover>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '8px 22px', marginTop: 22, color: 'rgba(255,255,255,.75)', fontFamily: 'Assistant,sans-serif', fontSize: 15 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><Pin s={18} c="#34B3E8" />גוש דן, השרון והמרכז</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><Clock s={18} c="#34B3E8" />א'–ה' 08:00–18:00 · ו' 08:00–13:00</span>
          </div>
        </div>
      </section>
    </div>
  );
}
