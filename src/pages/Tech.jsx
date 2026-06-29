import React, { useState } from 'react';
import { Img } from '../ui.jsx';
import { ChevronDown } from '../icons.jsx';
import { FAQS } from '../data.js';

const STEPS = [
  { n: '1', title: `הסינון המוחלט`, text: `מי הברז עוברים דרך סדרת מסננים וממברנות שמסירים 100% מהכלור, המינרלים והאבנית — עד לקבלת מים מזוקקים לחלוטין (0 PPM).` },
  { n: '2', title: `המסה טבעית`, text: `המים הטהורים מוזרמים דרך מוטות קרבון קלים ישירות אל הזכוכית. המים "רעבים" למינרלים, ולכן הם ממיסים וממגנטים אליהם את הלכלוך, הפיח והאבק באופן טבעי וללא צורך בסבון.` },
  { n: '3', title: `ייבוש מושלם`, text: `בסיום השטיפה המים שנשארים על החלון מתאדים מעצמם בשמש. מכיוון שאין בהם אבנית, החלון נותר שקוף, מבריק וללא שום סימני ניגוב.` },
];

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div style={{ border: '1px solid #E2EDF3', borderRadius: 14, overflow: 'hidden', background: '#fff' }}>
      <button onClick={onToggle} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, padding: '20px 22px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'right' }}>
        <span style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 700, fontSize: 18, color: '#0E3A4F' }}>{q}</span>
        <span style={{ display: 'flex', transition: 'transform .3s', transform: `rotate(${open ? '180deg' : '0deg'})` }}><ChevronDown /></span>
      </button>
      <div style={{ overflow: 'hidden', transition: 'max-height .35s ease,opacity .3s', maxHeight: open ? 320 : 0, opacity: open ? 1 : 0 }}>
        <p style={{ padding: '0 22px 22px', fontFamily: 'Assistant,sans-serif', fontSize: 16, lineHeight: 1.65, color: '#5E7782' }}>{a}</p>
      </div>
    </div>
  );
}

export default function Tech() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div>
      <section style={{ position: 'relative', minHeight: 'clamp(340px,48vh,440px)', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#0E3A4F' }}>
        <Img src="images/tech-hero.png" alt="מים זורמים נקיים" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(285deg, rgba(14,58,79,.35) 0%, rgba(14,58,79,.85) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto', padding: '0 24px', width: '100%' }}>
          <div style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 700, fontSize: 14, letterSpacing: '.05em', color: '#34B3E8', marginBottom: 12 }}>איך זה עובד?</div>
          <h1 style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 800, fontSize: 'clamp(27px,4.2vw,48px)', color: '#fff', lineHeight: 1.12 }}>המדע מאחורי השקיפות — מערכת האוסמוזה ההפוכה שלנו</h1>
        </div>
      </section>

      <section style={{ padding: 'clamp(54px,7vw,88px) 24px', maxWidth: 980, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {STEPS.map((st, i) => (
            <div key={st.n} style={{ display: 'flex', gap: 24, alignItems: 'flex-start', position: 'relative' }}>
              <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: 58, height: 58, borderRadius: '50%', background: '#1689C4', color: '#fff', fontFamily: 'Heebo,sans-serif', fontWeight: 800, fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{st.n}</div>
                {i < STEPS.length - 1 && <div style={{ width: 2, flex: 1, background: '#D9E8F0', marginTop: 6 }} />}
              </div>
              <div style={{ paddingBottom: i < STEPS.length - 1 ? 38 : 0 }}>
                <h3 style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 800, fontSize: 22, color: '#0E3A4F', marginBottom: 8 }}>{st.title}</h3>
                <p style={{ fontFamily: 'Assistant,sans-serif', fontSize: 17, lineHeight: 1.65, color: '#5E7782' }}>{st.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 60 }}>
          <h2 style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 800, fontSize: 'clamp(24px,3.2vw,34px)', color: '#0E3A4F', textAlign: 'center', marginBottom: 30 }}>שאלות ותשובות</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {FAQS.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
