import React from 'react';
import { PHONE, EMAIL, TEL_LINK, ACCESSIBILITY_COORDINATOR, ACCESSIBILITY_LAST_UPDATED } from '../data.js';

const section = { marginBottom: 32 };
const h2 = { fontFamily: 'Heebo,sans-serif', fontWeight: 800, fontSize: 22, color: '#0E3A4F', marginBottom: 12 };
const p = { fontFamily: 'Assistant,sans-serif', fontSize: 16, lineHeight: 1.75, color: '#4A6572', marginBottom: 10 };
const li = { fontFamily: 'Assistant,sans-serif', fontSize: 16, lineHeight: 1.75, color: '#4A6572', marginBottom: 6 };

export default function Accessibility() {
  return (
    <div>
      <section style={{ padding: 'clamp(48px,6vw,76px) 24px clamp(20px,3vw,30px)', textAlign: 'center' }}>
        <div style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 700, fontSize: 14, letterSpacing: '.05em', color: '#1689C4', marginBottom: 10 }}>נגישות</div>
        <h1 style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 800, fontSize: 'clamp(30px,4.4vw,52px)', color: '#0E3A4F' }}>הצהרת נגישות</h1>
      </section>

      <section style={{ maxWidth: 780, margin: '0 auto', padding: '0 24px 80px' }} lang="he">
        <div style={section}>
          <h2 style={h2}>כללי</h2>
          <p style={p}>
            wowindow מחויבת להנגיש את אתר האינטרנט שלה לאנשים עם מוגבלות, על מנת לאפשר לכל אדם לגלוש באתר
            בצורה יעילה, נוחה ועצמאית. האתר פועל בהתאם להוראות חוק שוויון זכויות לאנשים עם מוגבלות,
            התשנ״ח–1998, ולתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע״ג–2013.
          </p>
          <p style={p}>
            האתר נבנה בהתאם להנחיות WCAG 2.1 ברמת AA, ככל הניתן ובהתאם לעקרונות הנגישות של W3C.
          </p>
        </div>

        <div style={section}>
          <h2 style={h2}>הסדרי נגישות באתר</h2>
          <ul style={{ paddingRight: 22, margin: 0 }}>
            <li style={li}>מבנה סמנטי של HTML (כותרות, אזורי ניווט, תוכן ראשי ותחתית)</li>
            <li style={li}>תמיכה בניווט באמצעות מקלדת</li>
            <li style={li}>קישור «דילוג לתוכן הראשי» בתחילת העמוד</li>
            <li style={li}>סימון ברור של מיקוד (focus) בעת ניווט במקלדת</li>
            <li style={li}>טקסטים חלופיים (alt) לתמונות משמעותיות</li>
            <li style={li}>תוויות (aria-label) לכפתורים ולקישורים ללא טקסט גלוי</li>
            <li style={li}>ניגודיות צבעים מספקת בין טקסט לרקע</li>
            <li style={li}>תמיכה בהגדלת טקסט דרך הגדרות הדפדפן</li>
            <li style={li}>תמיכה בכיווניות RTL לעברית</li>
            <li style={li}>כיבוי אנימציות עבור משתמשים עם prefers-reduced-motion</li>
          </ul>
        </div>

        <div style={section}>
          <h2 style={h2}>דפדפנים וטכנולוגיות מסייעות</h2>
          <p style={p}>
            האתר נבדק ותומך בדפדפנים העדכניים: Chrome, Firefox, Safari ו-Edge, במחשב ובמכשירים ניידים.
            מומלץ להשתמש בגרסה העדכנית ביותר של הדפדפן ובתוכנות קורא מסך (כגון NVDA, JAWS, VoiceOver).
          </p>
        </div>

        <div style={section}>
          <h2 style={h2}>פערים ידועים</h2>
          <p style={p}>
            אנו פועלים לשיפור מתמיד של נגישות האתר. ייתכן שחלק מהתמונות הדקורטיביות, האנימציות
            או רכיבי צד שלישי (כגון פונטים חיצוניים) אינם נגישים במלואם. אנו ממשיכים לעבוד על
            התאמות נוספות.
          </p>
        </div>

        <div style={section}>
          <h2 style={h2}>רכז/ת נגישות — פניות ומשוב</h2>
          <p style={p}>
            אם נתקלתם בבעיית נגישות באתר, או שיש לכם הצעות לשיפור — נשמח לשמוע.
            ניתן לפנות ל{ACCESSIBILITY_COORDINATOR}:
          </p>
          <ul style={{ paddingRight: 22, margin: 0 }}>
            <li style={li}>
              טלפון:{' '}
              <a href={TEL_LINK} dir="ltr" style={{ color: '#1689C4', textDecoration: 'underline' }}>{PHONE}</a>
            </li>
            <li style={li}>
              דוא״ל:{' '}
              <a href={`mailto:${EMAIL}`} dir="ltr" style={{ color: '#1689C4', textDecoration: 'underline' }}>{EMAIL}</a>
            </li>
          </ul>
          <p style={{ ...p, marginTop: 14 }}>
            נשתדל לחזור אליכם בהקדם האפשרי, ולא יאוחר מ-5 ימי עסקים.
          </p>
        </div>

        <div style={section}>
          <h2 style={h2}>תאריך עדכון ההצהרה</h2>
          <p style={p}>{ACCESSIBILITY_LAST_UPDATED}</p>
        </div>
      </section>
    </div>
  );
}
