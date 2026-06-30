import React, { useState, useEffect, useRef } from 'react';
import { Hover, Reveal, Img } from '../ui.jsx';
import Hero3D from '../components/Hero3D.jsx';
import {
  WhatsApp, Phone, Mail, Pin, Clock, ShieldCheck, Invoice, Star,
  Drop, Sun, ShieldKeep, ArrowLeft, ChevronRight, ChevronLeft,
} from '../icons.jsx';
import { TESTIMONIALS, PHONE, EMAIL, TEL_LINK, WA_LINK, ACTIVITY_AREAS } from '../data.js';

const eyebrow = { fontFamily: 'Heebo,sans-serif', fontWeight: 700, fontSize: 14, letterSpacing: '.05em', color: '#1689C4', marginBottom: 10 };
const h2 = { fontFamily: 'Heebo,sans-serif', fontWeight: 800, fontSize: 'clamp(27px,3.6vw,42px)', color: '#0E3A4F' };

function Hero({ scrollToForm }) {
  return (
    <section style={{ position: 'relative', minHeight: 'clamp(560px,90vh,820px)', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#0B2E3D' }}>
      <Img src="images/home-hero.png" alt="שטיפת חלון במוט קרבון" />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(285deg, rgba(11,46,61,.08) 0%, rgba(11,46,61,.5) 42%, rgba(11,46,61,.93) 100%)' }} />
      <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '60%', height: '80%', background: 'radial-gradient(circle, rgba(52,179,232,.4) 0%, rgba(52,179,232,0) 65%)', filter: 'blur(20px)', animation: 'auroraMove 14s ease-in-out infinite', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-25%', left: '-8%', width: '55%', height: '75%', background: 'radial-gradient(circle, rgba(22,137,196,.32) 0%, rgba(22,137,196,0) 65%)', filter: 'blur(20px)', animation: 'auroraMove 18s ease-in-out infinite reverse', pointerEvents: 'none' }} />
      <Hero3D />
      <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div style={{ maxWidth: 720, animation: 'fadeUp .8s ease both' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.28)', backdropFilter: 'blur(6px)', color: '#fff', fontFamily: 'Heebo,sans-serif', fontWeight: 600, fontSize: 14, padding: '8px 17px', borderRadius: 100, marginBottom: 24 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#34B3E8', boxShadow: '0 0 0 4px rgba(52,179,232,.3)' }} />
            בטכנולוגיית אוסמוזה הפוכה מתקדמת
          </div>
          <h1 style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 900, fontSize: 'clamp(36px,5.4vw,66px)', lineHeight: 1.05, color: '#fff', letterSpacing: '-.025em', textWrap: 'balance' }}>
            חלונות וויטרינות מבריקים<br />
            <span style={{ background: 'linear-gradient(90deg,#7FE0FF,#34B3E8)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: '#34B3E8' }}>ללא שום סימנים</span>
          </h1>
          <p style={{ fontFamily: 'Assistant,sans-serif', fontWeight: 400, fontSize: 'clamp(17px,2vw,22px)', lineHeight: 1.55, color: 'rgba(255,255,255,.9)', marginTop: 22, maxWidth: 580 }}>
            הפתרון המתקדם והבטוח ביותר לוילות, פנטהאוזים, מרפסות שמש ולובי בניינים — ללא כימיקלים, ללא סולמות, ללא פשרות.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 36 }}>
            <Hover as="button" onClick={scrollToForm}
              b="position:relative;overflow:hidden;display:inline-flex;align-items:center;gap:10px;background:linear-gradient(120deg,#1689C4,#34B3E8);color:#fff;font-family:Heebo,sans-serif;font-weight:700;font-size:18px;padding:18px 34px;border-radius:14px;border:none;cursor:pointer;box-shadow:0 16px 36px rgba(22,137,196,.5)"
              h="box-shadow:0 20px 44px rgba(22,137,196,.62)">
              <span style={{ position: 'absolute', top: 0, bottom: 0, width: '40%', background: 'linear-gradient(90deg,transparent,rgba(255,255,255,.4),transparent)', animation: 'shine 4s ease-in-out infinite' }} />
              לקבלת הצעת מחיר מהירה בקליק
              <ArrowLeft />
            </Hover>
            <Hover as="a" href={WA_LINK} target="_blank" rel="noopener"
              b="display:inline-flex;align-items:center;gap:9px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.42);backdrop-filter:blur(6px);color:#fff;font-family:Heebo,sans-serif;font-weight:700;font-size:18px;padding:18px 28px;border-radius:14px;text-decoration:none"
              h="background:rgba(255,255,255,.22)">
              <WhatsApp s={20} /> דברו איתנו בוואטסאפ
            </Hover>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 26, marginTop: 38 }}>
            {[['0 PPM', 'מים מזוקקים לחלוטין'], ['15 מ׳', 'גובה ללא סולמות'], ['100%', 'ללא כימיקלים']].map((s, i) => (
              <React.Fragment key={i}>
                {i > 0 && <div style={{ width: 1, background: 'rgba(255,255,255,.2)' }} />}
                <div>
                  <div style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 900, fontSize: 30, color: '#fff', lineHeight: 1 }}>{s[0]}</div>
                  <div style={{ fontFamily: 'Assistant,sans-serif', fontSize: 14, color: 'rgba(255,255,255,.7)' }}>{s[1]}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 22, left: '50%', transform: 'translateX(-50%)', width: 26, height: 42, border: '2px solid rgba(255,255,255,.45)', borderRadius: 14, display: 'flex', justifyContent: 'center', paddingTop: 7 }}>
        <span style={{ width: 4, height: 8, borderRadius: 4, background: '#fff', animation: 'scrollDot 1.8s ease-in-out infinite' }} />
      </div>
    </section>
  );
}

function TrustStrip() {
  const item = { display: 'flex', alignItems: 'center', gap: 10 };
  const label = { fontFamily: 'Heebo,sans-serif', fontWeight: 600, fontSize: 15, color: '#0E3A4F' };
  return (
    <section style={{ background: '#fff', borderBottom: '1px solid #EAF1F5' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '26px 24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px 40px' }}>
        <div style={item}><ShieldCheck /><span style={label}>ביטוח צד ג׳ מקיף</span></div>
        <div style={item}><Invoice /><span style={label}>חשבוניות מס מסודרות</span></div>
        <div style={item}><Clock s={22} /><span style={label}>עמידה בלוחות זמנים</span></div>
        <div style={item}><Star /><span style={label}>אחריות מלאה על כל עבודה</span></div>
      </div>
    </section>
  );
}

function AudienceCard({ img, alt, title, sub, onClick }) {
  return (
    <Hover onClick={onClick}
      b="position:relative;border-radius:22px;overflow:hidden;cursor:pointer;min-height:340px;display:flex;align-items:flex-end;box-shadow:0 16px 40px rgba(14,58,79,.12);transition:transform .35s,box-shadow .35s"
      h="transform:translateY(-6px);box-shadow:0 24px 54px rgba(14,58,79,.2)">
      <Img src={img} alt={alt} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(14,58,79,.92) 0%, rgba(14,58,79,.35) 55%, rgba(14,58,79,0) 100%)' }} />
      <div style={{ position: 'relative', padding: 30, color: '#fff' }}>
        <h3 style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 800, fontSize: 26, marginBottom: 6 }}>{title}</h3>
        <p style={{ fontFamily: 'Assistant,sans-serif', fontSize: 16, color: 'rgba(255,255,255,.85)', marginBottom: 16 }}>{sub}</p>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Heebo,sans-serif', fontWeight: 700, fontSize: 16, color: '#fff' }}>
          לפרטים נוספים <ArrowLeft s={17} />
        </span>
      </div>
    </Hover>
  );
}

function Advantage({ icon, title, text }) {
  return (
    <Hover
      b="background:#fff;border:1px solid #E6F1F7;border-radius:20px;padding:38px 28px;text-align:center;box-shadow:0 10px 30px rgba(14,58,79,.07);transition:transform .35s cubic-bezier(.2,.7,.3,1),box-shadow .35s"
      h="transform:translateY(-6px);box-shadow:0 22px 48px rgba(22,137,196,.16);border-color:#CDE8F4">
      <div style={{ width: 78, height: 78, borderRadius: 22, background: 'linear-gradient(135deg,#EAF6FB,#D3ECF8)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.7),0 8px 18px rgba(22,137,196,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 22px' }}>
        {icon}
      </div>
      <h3 style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 800, fontSize: 21, color: '#0E3A4F', marginBottom: 10 }}>{title}</h3>
      <p style={{ fontFamily: 'Assistant,sans-serif', fontSize: 16, lineHeight: 1.6, color: '#5E7782' }}>{text}</p>
    </Hover>
  );
}

function BeforeAfter() {
  const [pos, setPos] = useState(50);
  return (
    <section style={{ padding: 'clamp(58px,8vw,96px) 24px', maxWidth: 1100, margin: '0 auto' }}>
      <Reveal style={{ textAlign: 'center', marginBottom: 42 }}>
        <div style={eyebrow}>ההבדל בעין</div>
        <h2 style={h2}>לפני ואחרי</h2>
      </Reveal>
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: 22, overflow: 'hidden', boxShadow: '0 20px 50px rgba(14,58,79,.18)', userSelect: 'none' }}>
        <Img src="images/ba-after.png" alt="אחרי" />
        <div style={{ position: 'absolute', inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Img src="images/ba-before.png" alt="לפני" />
        </div>
        <div style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(14,58,79,.78)', color: '#fff', fontFamily: 'Heebo,sans-serif', fontWeight: 700, fontSize: 14, padding: '6px 14px', borderRadius: 100 }}>לפני</div>
        <div style={{ position: 'absolute', top: 16, left: 16, background: 'rgba(22,137,196,.9)', color: '#fff', fontFamily: 'Heebo,sans-serif', fontWeight: 700, fontSize: 14, padding: '6px 14px', borderRadius: 100 }}>אחרי</div>
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${pos}%`, width: 3, background: '#fff', transform: 'translateX(-50%)', boxShadow: '0 0 14px rgba(0,0,0,.3)', pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 46, height: 46, borderRadius: '50%', background: '#fff', boxShadow: '0 4px 14px rgba(0,0,0,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1689C4" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6 3 12l6 6M15 6l6 6-6 6" /></svg>
          </div>
        </div>
        <input type="range" min="0" max="100" value={pos} dir="ltr" aria-label="הזזת קו לפני ואחרי"
          onChange={(e) => setPos(Number(e.target.value))}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', margin: 0, opacity: 0, cursor: 'ew-resize' }} />
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  const timer = useRef(null);
  const n = TESTIMONIALS.length;
  useEffect(() => {
    timer.current = setInterval(() => setI((v) => (v + 1) % n), 5500);
    return () => clearInterval(timer.current);
  }, [n]);
  const cur = TESTIMONIALS[i];
  const arrowBtn = 'width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.3);color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center';

  return (
    <section style={{ background: '#0E3A4F', padding: 'clamp(58px,8vw,96px) 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ ...eyebrow, color: '#34B3E8' }}>לקוחות מספרים</div>
        <h2 style={{ ...h2, color: '#fff', marginBottom: 42 }}>ממליצים עלינו בחום</h2>
        <div key={i} style={{ background: '#fff', borderRadius: 22, padding: 'clamp(30px,5vw,48px)', boxShadow: '0 24px 60px rgba(0,0,0,.28)', textAlign: 'right', minHeight: 230, animation: 'fadeIn .4s ease both' }}>
          <div style={{ display: 'flex', gap: 4, marginBottom: 18, color: '#FFB400', fontSize: 20 }}>★★★★★</div>
          <p style={{ fontFamily: 'Assistant,sans-serif', fontWeight: 500, fontSize: 'clamp(18px,2.2vw,23px)', lineHeight: 1.55, color: '#11313E', marginBottom: 26 }}>{cur.text}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 50, height: 50, borderRadius: '50%', background: '#EAF6FB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Heebo,sans-serif', fontWeight: 800, color: '#1689C4', fontSize: 20 }}>{cur.initial}</div>
            <div>
              <div style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 700, fontSize: 17, color: '#0E3A4F' }}>{cur.name}</div>
              <div style={{ fontFamily: 'Assistant,sans-serif', fontSize: 15, color: '#5E7782' }}>{cur.role}</div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, marginTop: 28 }}>
          <Hover as="button" aria-label="הקודם" onClick={() => setI((v) => (v - 1 + n) % n)} b={arrowBtn} h="background:rgba(255,255,255,.22)"><ChevronRight /></Hover>
          <div style={{ display: 'flex', gap: 9 }}>
            {TESTIMONIALS.map((_, k) => (
              <button key={k} aria-label="המלצה" onClick={() => setI(k)}
                style={{ width: k === i ? 26 : 10, height: 10, borderRadius: 100, border: 'none', cursor: 'pointer', padding: 0, background: k === i ? '#34B3E8' : 'rgba(255,255,255,.35)', transition: 'all .3s' }} />
            ))}
          </div>
          <Hover as="button" aria-label="הבא" onClick={() => setI((v) => (v + 1) % n)} b={arrowBtn} h="background:rgba(255,255,255,.22)"><ChevronLeft /></Hover>
        </div>
      </div>
    </section>
  );
}

function ContactCards() {
  const card = 'display:flex;gap:15px;align-items:center;text-decoration:none;background:#fff;border:1px solid #EAF1F5;border-radius:18px;padding:24px;box-shadow:0 8px 24px rgba(14,58,79,.06)';
  const ico = { flexShrink: 0, width: 50, height: 50, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' };
  const title = { display: 'block', fontFamily: 'Heebo,sans-serif', fontWeight: 700, fontSize: 17, color: '#0E3A4F' };
  const sub = { fontFamily: 'Assistant,sans-serif', fontSize: 16, color: '#5E7782' };

  return (
    <section id="lead-form" style={{ padding: 'clamp(58px,8vw,96px) 24px', maxWidth: 900, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 36 }}>
        <div style={eyebrow}>דברו איתנו</div>
        <h2 style={{ ...h2, fontSize: 'clamp(26px,3.4vw,40px)', marginBottom: 8 }}>בואו נבריק את הנכס שלכם</h2>
        <p style={{ fontFamily: 'Assistant,sans-serif', fontSize: 17, color: '#5E7782' }}>זמינים עבורכם בטלפון, בוואטסאפ ובמייל — נשמח לתת הערכת מחיר מהירה</p>
      </div>

      <Reveal delay={100} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: 16 }}>
        <Hover as="a" href={TEL_LINK} b={card} h="border-color:#1689C4">
          <span style={{ ...ico, background: '#EAF6FB' }}><Phone s={23} c="#1689C4" /></span>
          <span><span style={title}>טלפון ישיר</span><span style={sub} dir="ltr">{PHONE}</span></span>
        </Hover>
        <Hover as="a" href={WA_LINK} target="_blank" rel="noopener" b={card} h="border-color:#25D366">
          <span style={{ ...ico, background: '#E7F9EF' }}><WhatsApp s={23} c="#25D366" /></span>
          <span><span style={title}>וואטסאפ</span><span style={sub}>שלחו לנו הודעה עכשיו</span></span>
        </Hover>
        <Hover as="a" href={`mailto:${EMAIL}`} b={card} h="border-color:#1689C4">
          <span style={{ ...ico, background: '#EAF6FB' }}><Mail s={23} /></span>
          <span><span style={title}>אימייל</span><span style={sub} dir="ltr">{EMAIL}</span></span>
        </Hover>
        <div style={{ display: 'flex', gap: 15, alignItems: 'center', background: '#fff', border: '1px solid #EAF1F5', borderRadius: 18, padding: 24, boxShadow: '0 8px 24px rgba(14,58,79,.06)' }}>
          <span style={{ ...ico, background: '#EAF6FB' }}><Pin s={23} /></span>
          <span><span style={title}>אזורי פעילות</span><span style={sub}>{ACTIVITY_AREAS}</span></span>
        </div>
      </Reveal>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 22, color: '#5E7782', fontFamily: 'Assistant,sans-serif', fontSize: 16 }}>
        <Clock /> שעות פעילות: א'–ה' 08:00–18:00 · ו' 08:00–13:00
      </div>

      <div style={{ textAlign: 'center', marginTop: 30 }}>
        <Hover as="a" href={WA_LINK} target="_blank" rel="noopener"
          b="display:inline-flex;align-items:center;gap:10px;background:#1689C4;color:#fff;font-family:Heebo,sans-serif;font-weight:700;font-size:18px;padding:17px 34px;border-radius:13px;text-decoration:none;box-shadow:0 12px 26px rgba(22,137,196,.3)"
          h="background:#0E3A4F">דברו איתנו עכשיו</Hover>
      </div>
    </section>
  );
}

export default function Home({ nav }) {
  const scrollToForm = () => {
    const el = document.getElementById('lead-form');
    if (el) window.scrollTo({ top: window.scrollY + el.getBoundingClientRect().top - 80, behavior: 'smooth' });
  };

  return (
    <div>
      <Hero scrollToForm={scrollToForm} />
      <TrustStrip />

      <section style={{ padding: 'clamp(58px,8vw,96px) 24px', maxWidth: 1200, margin: '0 auto' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 46 }}>
          <div style={eyebrow}>קהלי יעד</div>
          <h2 style={{ ...h2, letterSpacing: '-.01em' }}>מה תרצו שנבריק עבורכם?</h2>
        </Reveal>
        <Reveal delay={120} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 26 }}>
          <AudienceCard img="images/home-aud-villa.png" alt="וילה" title="בתים פרטיים ומרפסות שמש" sub="סטנדרט פרימיום לחלונות סלון ענקיים ומעקות זכוכית" onClick={() => nav('private')} />
          <AudienceCard img="images/home-aud-lobby.png" alt="לובי בניין" title="בנייני מגורים ושטחים משותפים" sub="פתרון מסודר וארוך טווח לוועדי בתים וחברות ניהול" onClick={() => nav('building')} />
        </Reveal>
      </section>

      <section style={{ background: '#EEF7FC', padding: 'clamp(58px,8vw,96px) 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={eyebrow}>היתרונות שלנו</div>
            <h2 style={h2}>למה זה פשוט עובד טוב יותר</h2>
          </Reveal>
          <Reveal delay={120} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
            <Advantage icon={<Drop />} title="100% מים טהורים" text="ניקוי ללא כימיקלים השומר על האלומיניום ועל הצמחייה במרפסת." />
            <Advantage icon={<Sun />} title="ייבוש טבעי ללא סימנים" text="המים המזוקקים מתאדים מעצמם ואינם משאירים אבנית או סימני ניגוב." />
            <Advantage icon={<ShieldKeep />} title="תוצאה שנשארת לאורך זמן" text="המים מונעים חשמל סטטי ודוחים הצטברות אבק — נקי לזמן כפול." />
          </Reveal>
        </div>
      </section>

      <BeforeAfter />
      <Testimonials />
      <ContactCards />
    </div>
  );
}
