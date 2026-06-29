import React from 'react';
import { Hover, Img } from '../ui.jsx';
import { WhatsApp, Grid, Railing, Skylight, ShieldKeep } from '../icons.jsx';
import { WA_LINK } from '../data.js';

function Feature({ icon, title, text }) {
  return (
    <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', background: '#fff', border: '1px solid #EAF1F5', borderRadius: 18, padding: '26px 24px', boxShadow: '0 8px 24px rgba(14,58,79,.06)' }}>
      <div style={{ flexShrink: 0, width: 56, height: 56, borderRadius: 15, background: '#EAF6FB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</div>
      <div>
        <h3 style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 800, fontSize: 21, color: '#0E3A4F', marginBottom: 6 }}>{title}</h3>
        <p style={{ fontFamily: 'Assistant,sans-serif', fontSize: 16, lineHeight: 1.6, color: '#5E7782' }}>{text}</p>
      </div>
    </div>
  );
}

export default function Private() {
  return (
    <div>
      <section style={{ position: 'relative', minHeight: 'clamp(360px,52vh,480px)', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#0E3A4F' }}>
        <Img src="images/priv-hero.png" alt="מרפסת שמש יוקרתית" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(285deg, rgba(14,58,79,.3) 0%, rgba(14,58,79,.82) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto', padding: '0 24px', width: '100%' }}>
          <div style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 700, fontSize: 14, letterSpacing: '.05em', color: '#34B3E8', marginBottom: 12 }}>המגזר הפרטי</div>
          <h1 style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 800, fontSize: 'clamp(30px,4.6vw,52px)', color: '#fff', lineHeight: 1.1 }}>שירות פרימיום לוילות ופנטהאוזים</h1>
        </div>
      </section>

      <section style={{ padding: 'clamp(54px,7vw,88px) 24px', maxWidth: 980, margin: '0 auto' }}>
        <p style={{ fontFamily: 'Assistant,sans-serif', fontSize: 'clamp(18px,2vw,21px)', lineHeight: 1.6, color: '#5E7782', textAlign: 'center', maxWidth: 680, margin: '0 auto 50px' }}>
          לבעלי נכסים שחשוב להם הסטנדרט הגבוה, השמירה על הרכוש, וההגעה הבטוחה גם למקומות הקשים ביותר.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <Feature icon={<Grid />} title="חלונות וויטרינות ענק" text="התמודדות עם מפתחי זכוכית גדולים בסלון ובחללי אירוח — ללא סימני ניגוב." />
          <Feature icon={<Railing />} title="מעקות זכוכית במרפסות שמש" text="הסרת אבנית, פיח ונזקי מזג אוויר מהחלק החיצוני — ללא צורך בסנפלינג." />
          <Feature icon={<Skylight />} title="סקיילייט וחלונות גג" text="הגעה בטוחה לחלונות עליונים באמצעות מוטות קרבון מתקדמים." />
        </div>

        <div style={{ marginTop: 40, background: 'linear-gradient(120deg,#EAF6FB,#F4FAFD)', border: '1.5px solid #CDE8F4', borderRadius: 20, padding: '32px 30px', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
          <span style={{ flexShrink: 0, marginTop: 2 }}><ShieldKeep s={34} fill="none" /></span>
          <p style={{ fontFamily: 'Assistant,sans-serif', fontWeight: 500, fontSize: 'clamp(16px,1.8vw,19px)', lineHeight: 1.6, color: '#0E3A4F' }}>
            אנחנו יודעים כמה הנכס שלכם יקר לכם. העבודה מתבצעת ללא סולמות או פיגומים מסוכנים, והחברה מחזיקה בביטוח צד ג' מקיף ואחריות מלאה על כל עבודה.
          </p>
        </div>

        <div style={{ textAlign: 'center', marginTop: 42 }}>
          <Hover as="a" href={WA_LINK} target="_blank" rel="noopener"
            b="display:inline-flex;align-items:center;gap:10px;background:#25D366;color:#fff;font-family:Heebo,sans-serif;font-weight:700;font-size:18px;padding:17px 32px;border-radius:13px;text-decoration:none;box-shadow:0 12px 28px rgba(37,211,102,.35)"
            h="background:#1FB855">
            <WhatsApp s={22} /> דברו איתנו בוואטסאפ לקבלת הערכת מחיר מהירה
          </Hover>
        </div>
      </section>
    </div>
  );
}
