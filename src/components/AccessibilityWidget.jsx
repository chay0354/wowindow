import React, { useEffect, useState } from 'react';
import { AccessibilityIcon } from '../icons.jsx';

const STORAGE_KEY = 'wowindow-a11y';

const DEFAULT = { fontLevel: 0, contrast: false, highlightLinks: false };

function loadSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...DEFAULT, ...JSON.parse(raw) } : DEFAULT;
  } catch {
    return DEFAULT;
  }
}

function applySettings({ fontLevel, contrast, highlightLinks }) {
  const root = document.documentElement;
  root.classList.remove('a11y-font-1', 'a11y-font-2', 'a11y-font-3');
  if (fontLevel > 0) root.classList.add(`a11y-font-${fontLevel}`);
  root.classList.toggle('a11y-contrast', contrast);
  root.classList.toggle('a11y-links', highlightLinks);
}

const btn = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 10,
  padding: '11px 14px',
  border: '1px solid #D9E8F0',
  borderRadius: 10,
  background: '#fff',
  color: '#0E3A4F',
  fontFamily: 'Heebo,sans-serif',
  fontWeight: 600,
  fontSize: 15,
  cursor: 'pointer',
  textAlign: 'right',
};

export default function AccessibilityWidget({ nav }) {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(loadSettings);

  useEffect(() => {
    applySettings(settings);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  const set = (patch) => setSettings((prev) => ({ ...prev, ...patch }));
  const reset = () => setSettings(DEFAULT);

  const fontLabel = ['רגיל', 'גדול', 'גדול יותר', 'גדול מאוד'][settings.fontLevel];

  return (
    <div style={{ position: 'fixed', bottom: 22, right: 22, zIndex: 91 }}>
      {open && (
        <div
          id="a11y-panel"
          role="dialog"
          aria-modal="true"
          aria-label="תפריט נגישות"
          style={{
            position: 'absolute',
            bottom: 72,
            right: 0,
            width: 'min(300px, calc(100vw - 44px))',
            background: '#fff',
            border: '1px solid #D9E8F0',
            borderRadius: 16,
            boxShadow: '0 16px 40px rgba(14,58,79,.18)',
            padding: '18px 16px 14px',
            animation: 'fadeIn .2s ease both',
          }}
        >
          <div style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 800, fontSize: 17, color: '#0E3A4F', marginBottom: 14, paddingInline: 4 }}>
            התאמות נגישות
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
              <button type="button" style={btn} onClick={() => set({ fontLevel: Math.max(0, settings.fontLevel - 1) })} aria-label="הקטנת טקסט">
                A−
              </button>
              <button type="button" style={{ ...btn, justifyContent: 'center', fontSize: 13, color: '#5E7782' }} disabled aria-live="polite">
                {fontLabel}
              </button>
              <button type="button" style={btn} onClick={() => set({ fontLevel: Math.min(3, settings.fontLevel + 1) })} aria-label="הגדלת טקסט">
                A+
              </button>
            </div>

            <button
              type="button"
              style={{ ...btn, background: settings.contrast ? '#0E3A4F' : '#fff', color: settings.contrast ? '#fff' : '#0E3A4F' }}
              onClick={() => set({ contrast: !settings.contrast })}
              aria-pressed={settings.contrast}
            >
              <span>ניגודיות גבוהה</span>
              <span>{settings.contrast ? 'פעיל' : 'כבוי'}</span>
            </button>

            <button
              type="button"
              style={{ ...btn, background: settings.highlightLinks ? '#EAF6FB' : '#fff' }}
              onClick={() => set({ highlightLinks: !settings.highlightLinks })}
              aria-pressed={settings.highlightLinks}
            >
              <span>הדגשת קישורים</span>
              <span>{settings.highlightLinks ? 'פעיל' : 'כבוי'}</span>
            </button>

            <button
              type="button"
              style={btn}
              onClick={() => { setOpen(false); nav('accessibility'); }}
            >
              הצהרת נגישות
            </button>

            <button type="button" style={{ ...btn, color: '#1689C4', borderColor: '#CDE8F4' }} onClick={reset}>
              איפוס הגדרות
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="פתיחת תפריט נגישות"
        aria-expanded={open}
        aria-controls="a11y-panel"
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          border: '2px solid #fff',
          background: '#0066B3',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 8px 22px rgba(0,102,179,.45)',
        }}
      >
        <AccessibilityIcon s={30} />
      </button>
    </div>
  );
}
