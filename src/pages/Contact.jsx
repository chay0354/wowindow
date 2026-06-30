import React from 'react';
import { Hover } from '../ui.jsx';
import { WhatsApp, Phone, Mail, Pin, Clock } from '../icons.jsx';
import { PHONE, EMAIL, TEL_LINK, WA_LINK, ACTIVITY_AREAS } from '../data.js';

function DetailRow({ icon, title, value, href, target, dir }) {
  const inner = (
    <>
      <span style={{ flexShrink: 0, width: 48, height: 48, borderRadius: 13, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</span>
      <span>
        <span style={{ display: 'block', fontFamily: 'Heebo,sans-serif', fontWeight: 700, fontSize: 17, color: '#0E3A4F' }}>{title}</span>
        <span style={{ fontFamily: 'Assistant,sans-serif', fontSize: 16, color: '#5E7782' }} dir={dir}>{value}</span>
      </span>
    </>
  );
  const base = { display: 'flex', gap: 15, alignItems: 'flex-start', textDecoration: 'none' };
  return href
    ? <a href={href} target={target} rel={target ? 'noopener' : undefined} style={{ ...base, alignItems: 'center' }}>{inner}</a>
    : <div style={base}>{inner}</div>;
}

export default function Contact() {
  return (
    <div>
      <section style={{ padding: 'clamp(48px,6vw,76px) 24px clamp(20px,3vw,30px)', textAlign: 'center' }}>
        <div style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 700, fontSize: 14, letterSpacing: '.05em', color: '#1689C4', marginBottom: 10 }}>צור קשר</div>
        <h1 style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 800, fontSize: 'clamp(30px,4.4vw,52px)', color: '#0E3A4F' }}>בואו נבריק את הנכס שלכם</h1>
      </section>

      <section style={{ maxWidth: 1080, margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 30, alignItems: 'start' }}>
          <div style={{ background: '#EEF7FC', borderRadius: 22, padding: '34px 30px', display: 'flex', flexDirection: 'column', gap: 22 }}>
            <DetailRow icon={<Phone s={22} c="#1689C4" />} title="טלפון ישיר" value={PHONE} href={TEL_LINK} dir="ltr" />
            <DetailRow icon={<WhatsApp s={22} c="#25D366" />} title="וואטסאפ לעסקים" value="צ'אט עם הודעה מוכנה" href={WA_LINK} target="_blank" />
            <DetailRow icon={<Mail s={22} />} title="אימייל" value={EMAIL} href={`mailto:${EMAIL}`} dir="ltr" />
            <DetailRow icon={<Pin s={22} />} title="אזורי פעילות" value={ACTIVITY_AREAS} />
            <DetailRow icon={<Clock s={22} />} title="שעות פעילות" value="א'–ה' 08:00–18:00 · ו' 08:00–13:00" />
          </div>

          <div style={{ background: 'linear-gradient(160deg,#0E3A4F,#0B2E3D)', borderRadius: 22, padding: '38px 32px', boxShadow: '0 14px 36px rgba(14,58,79,.18)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 800, fontSize: 'clamp(23px,3vw,30px)', color: '#fff', marginBottom: 8 }}>מעדיפים פשוט לדבר?</h2>
            <p style={{ fontFamily: 'Assistant,sans-serif', fontSize: 17, lineHeight: 1.55, color: 'rgba(255,255,255,.82)', marginBottom: 26 }}>אנחנו זמינים עבורכם בטלפון ובוואטסאפ — נשמח לתת הערכת מחיר מהירה וללא התחייבות.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Hover as="a" href={WA_LINK} target="_blank" rel="noopener"
                b="display:inline-flex;align-items:center;justify-content:center;gap:11px;background:#25D366;color:#fff;font-family:Heebo,sans-serif;font-weight:700;font-size:18px;padding:17px;border-radius:13px;text-decoration:none;box-shadow:0 12px 28px rgba(37,211,102,.35)"
                h="background:#1FB855">
                <WhatsApp s={23} /> שלחו הודעה בוואטסאפ
              </Hover>
              <Hover as="a" href={TEL_LINK}
                b="display:inline-flex;align-items:center;justify-content:center;gap:11px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.35);color:#fff;font-family:Heebo,sans-serif;font-weight:700;font-size:18px;padding:17px;border-radius:13px;text-decoration:none"
                h="background:rgba(255,255,255,.2)">
                <Phone s={22} /> חייגו אלינו עכשיו
              </Hover>
            </div>
            <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 9, color: 'rgba(255,255,255,.7)', fontFamily: 'Assistant,sans-serif', fontSize: 14 }}>
              <Clock s={17} c="#34B3E8" /> זמן תגובה ממוצע: עד שעתיים בשעות הפעילות
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
