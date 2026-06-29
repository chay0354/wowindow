# wowindow — אתר ניקוי חלונות (React + Vite)

אתר תדמית בעברית (RTL) לחברת **wowindow** — ניקוי חלונות וויטרינות בטכנולוגיית אוסמוזה הפוכה.
בנוי ב-React 18 + Vite, עיצוב נקי ויוקרתי בפלטת כחול-מים, מותאם מובייל (Mobile First).

## הרצה מקומית

דרושה התקנת [Node.js](https://nodejs.org) (גרסה 18 ומעלה).

```bash
npm install      # התקנת תלויות
npm run dev      # שרת פיתוח (http://localhost:5173)
npm run build    # בנייה לפרודקשן (תיקיית dist/)
npm run preview  # תצוגה מקדימה של הבנייה
```

## פריסה ל-Vercel

הפרויקט מוכן לפריסה סטטית ב-[Vercel](https://vercel.com). הבנייה (`npm run build`) נבדקה ועוברת בהצלחה.

### אפשרות 1 — חיבור GitHub (מומלץ)

1. אתחול מאגר Git (אם עדיין לא):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. דחיפה ל-GitHub.
3. ב-Vercel: **Add New Project** → בחרו את המאגר.
4. Vercel מזהה אוטומטית Vite. ודאו:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. לחצו **Deploy**.

> אם המאגר הוא תיקיית האב `wowindow` (ולא `wowindow-react` ישירות), הגדירו **Root Directory** ל-`wowindow-react`.

### אפשרות 2 — Vercel CLI

```bash
npm i -g vercel
vercel          # פריסת preview
vercel --prod   # פריסה לפרודקשן
```

קובץ `vercel.json` כבר מוגדר עם SPA fallback, cache לתמונות ו-assets.

## מבנה הפרויקט

```
wowindow-react/
├─ index.html               # נקודת כניסה + טעינת פונטים (Heebo, Assistant)
├─ vite.config.js
├─ public/
│  └─ images/               # כל התמונות (באנרים, גלריה, לפני/אחרי)
└─ src/
   ├─ main.jsx              # אתחול React
   ├─ App.jsx               # שלד + ניווט בין העמודים (state-based)
   ├─ styles.css            # reset + אנימציות keyframes
   ├─ data.js               # תוכן: פרטי קשר, המלצות, גלריה, שאלות נפוצות
   ├─ ui.jsx                # עזרי תשתית: css(), Hover, Reveal, Img
   ├─ icons.jsx             # סט אייקוני SVG
   ├─ components/
   │  ├─ Header.jsx         # תפריט עליון דביק + תפריט מובייל
   │  ├─ Footer.jsx
   │  ├─ FloatingWhatsApp.jsx
   │  └─ Hero3D.jsx         # אנימציית טיפות תלת-ממד על canvas
   └─ pages/
      ├─ Home.jsx           # באנר, קהלי יעד, יתרונות, לפני/אחרי, המלצות, פרטי קשר
      ├─ Private.jsx        # וילות, פנטהאוזים ומרפסות
      ├─ Buildings.jsx      # ועדי בתים ובנייני מגורים
      ├─ Tech.jsx           # הסבר הטכנולוגיה + שאלות ותשובות (אקורדיון)
      ├─ Gallery.jsx        # גלריה עם סינון + Lightbox
      └─ Contact.jsx        # צור קשר
```

## עדכון פרטי קשר ותוכן

כל הטקסטים והנתונים מרוכזים ב-`src/data.js` — טלפון, וואטסאפ, אימייל, אזורי פעילות, המלצות,
פריטי גלריה ושאלות נפוצות. ערכו שם, ללא צורך לגעת בקוד העמודים.

## החלפת תמונות

החליפו את הקבצים ב-`public/images/` (שמרו על אותם שמות), או עדכנו את הנתיבים ב-`data.js`
ובקומפוננטות העמודים. כרגע מוצבות תמונות פלייסהולדר בסגנון המותג.

## הערות

- **ניווט**: מבוסס state פנימי (ללא ריענון עמוד). להחלפה ל-URL אמיתי אפשר להוסיף `react-router-dom`.
- **RTL**: מוגדר ב-`<html dir="rtl" lang="he">`.
- **אנימציות**: חשיפה בגלילה (`Reveal`), אפקטי hover (`Hover`), ואנימציית התלת-ממד בבאנר (`Hero3D`).
