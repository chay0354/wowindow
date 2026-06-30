// Shared business data + contact info for the wowindow site.

export const PHONE = '050-504-0061';
export const TEL_LINK = 'tel:+972505040061';
export const EMAIL = 'office@wowindow.com';
export const WA_LINK =
  'https://wa.me/972505040061?text=' +
  encodeURIComponent('היי, אשמח לקבל פרטים לגבי ניקוי באוסמוזה הפוכה');

export const ACCESSIBILITY_COORDINATOR = 'wowindow';
export const ACCESSIBILITY_LAST_UPDATED = '29 ביוני 2026';

export const ACTIVITY_AREAS = 'גוש דן, השרון, המרכז וירושלים והסביבה';
export const ACTIVITY_AREAS_DOTS = 'גוש דן · השרון · המרכז · ירושלים והסביבה';

export const TESTIMONIALS = [
  { name: `משפחת לוי`, role: `וילה בהרצליה פיתוח`, initial: `ל`, text: `החלונות הענקיים בסלון נראים כאילו אין בכלל זכוכית. עבודה נקייה, מקצועית וללא טיפת בלגן. ממליצים בחום!` },
  { name: `דנה — ועד הבית`, role: `בניין מגורים, רמת השרון`, initial: `ד`, text: `הלובי וחזית הזכוכית פשוט זוהרים. הגיעו בזמן, עם חשבונית מסודרת, וללא שלוליות סבון בכניסה. שירות מעולה.` },
  { name: `אבי כהן`, role: `פנטהאוז בתל אביב`, initial: `א`, text: `מעקה הזכוכית במרפסת היה מלא אבנית ופיח. אחרי הטיפול — שקוף לחלוטין. הכל בלי סנפלינג ובלי סולמות מסוכנים.` },
  { name: `משפחת אזולאי`, role: `בית פרטי, כפר סבא`, initial: `א`, text: `הפתיע אותי שאין שום סימני ניגוב. חודשיים אחרי והחלונות עדיין נקיים. טכנולוגיה אמיתית, לא סיסמאות.` },
];

export const GALLERY = [
  { id: 'g1', cat: 'villa', label: `וילה בהרצליה`, video: false },
  { id: 'g2', cat: 'villa', label: `חלונות סלון`, video: false },
  { id: 'g3', cat: 'balcony', label: `מרפסת שמש`, video: true },
  { id: 'g4', cat: 'lobby', label: `לובי בניין`, video: false },
  { id: 'g5', cat: 'villa', label: `בית פרטי`, video: false },
  { id: 'g6', cat: 'balcony', label: `מעקה זכוכית`, video: false },
  { id: 'g7', cat: 'lobby', label: `חזית זכוכית`, video: true },
  { id: 'g8', cat: 'balcony', label: `מרפסת פנטהאוז`, video: false },
  { id: 'g9', cat: 'lobby', label: `כניסת בניין`, video: false },
];

export const GALLERY_FILTERS = [
  { id: 'all', label: `הכל` },
  { id: 'villa', label: `וילות ופנטהאוזים` },
  { id: 'balcony', label: `מרפסות שמש` },
  { id: 'lobby', label: `לובי ובניינים` },
];

export const FAQS = [
  { q: `האם המים פוגעים בצמחייה במרפסת?`, a: `ממש לא. המים הם 100% טבעיים ללא כימיקלים, ובטוחים לחלוטין לגינות ולחיות מחמד.` },
  { q: `לאיזה גובה המערכת מגיעה?`, a: `בעזרת מוטות הקרבון הייעודיים אנו מגיעים בקלות ובבטחה עד לגובה של כ-15 מטרים (קומה 3–4) ישירות מהקרקע או מהמרפסת.` },
  { q: `כל כמה זמן מומלץ לבצע את הניקוי?`, a: `בזכות התכונה דוחת האבק של המים המזוקקים, החלונות נשארים נקיים לזמן כפול. לרוב אנו ממליצים על ניקוי אחת ל-3 עד 6 חודשים לשמירה על מראה מושלם.` },
];

export const NAV_ITEMS = [
  { id: 'home', label: `בית` },
  { id: 'private', label: `וילות ופנטהאוזים` },
  { id: 'building', label: `בנייני מגורים` },
  { id: 'tech', label: `הטכנולוגיה` },
  { id: 'gallery', label: `גלריה` },
  { id: 'contact', label: `צור קשר` },
];
