import React, { useState, useEffect } from 'react';
import { Hover, Img } from '../ui.jsx';
import { Play, Close, ChevronRight, ChevronLeft } from '../icons.jsx';
import { GALLERY, GALLERY_FILTERS } from '../data.js';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const filtered = filter === 'all' ? GALLERY : GALLERY.filter((g) => g.cat === filter);
  const n = filtered.length;
  const lbItem = lightbox != null ? filtered[lightbox] : null;

  useEffect(() => { setLightbox(null); }, [filter]);

  useEffect(() => {
    if (lightbox == null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null);
      else if (e.key === 'ArrowLeft') setLightbox((v) => (v + 1) % n);
      else if (e.key === 'ArrowRight') setLightbox((v) => (v - 1 + n) % n);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, n]);

  const arrowBtn = { position: 'absolute', top: '50%', transform: 'translateY(-50%)', width: 54, height: 54, borderRadius: '50%', background: 'rgba(255,255,255,.14)', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 };

  return (
    <div>
      <section style={{ padding: 'clamp(44px,6vw,72px) 24px clamp(20px,3vw,30px)', maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 700, fontSize: 14, letterSpacing: '.05em', color: '#1689C4', marginBottom: 10 }}>הפרויקטים שלנו</div>
        <h1 style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 800, fontSize: 'clamp(30px,4.4vw,50px)', color: '#0E3A4F', marginBottom: 8 }}>גלריית פרויקטים</h1>
        <p style={{ fontFamily: 'Assistant,sans-serif', fontSize: 18, color: '#5E7782' }}>תמונות שוות אלף מילים</p>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginBottom: 32 }}>
          {GALLERY_FILTERS.map((f) => {
            const a = filter === f.id;
            return (
              <button key={f.id} onClick={() => setFilter(f.id)}
                style={{ fontFamily: 'Heebo,sans-serif', fontWeight: 700, fontSize: 15, padding: '10px 20px', borderRadius: 100, cursor: 'pointer', transition: 'all .2s', border: `1.5px solid ${a ? '#1689C4' : '#D9E8F0'}`, background: a ? '#1689C4' : '#fff', color: a ? '#fff' : '#5E7782' }}>
                {f.label}
              </button>
            );
          })}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 16 }}>
          {filtered.map((g, i) => (
            <Hover key={g.id} onClick={() => setLightbox(i)}
              b="position:relative;aspect-ratio:1/1;border-radius:16px;overflow:hidden;cursor:pointer;box-shadow:0 8px 22px rgba(14,58,79,.09);transition:transform .3s"
              h="transform:scale(1.02)">
              <Img src={`images/${g.id}.png`} alt={g.label} />
              <Hover b="position:absolute;inset:0;background:linear-gradient(0deg, rgba(14,58,79,.7) 0%, rgba(14,58,79,0) 50%);opacity:0;transition:opacity .3s" h="opacity:1" style={{ pointerEvents: 'none' }} />
              {g.video && (
                <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(0,0,0,.55)', color: '#fff', borderRadius: 8, padding: '5px 9px', display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'Heebo,sans-serif', fontWeight: 700, fontSize: 12 }}>
                  <Play /> Reel
                </div>
              )}
              <div style={{ position: 'absolute', bottom: 0, right: 0, left: 0, padding: 14, color: '#fff', fontFamily: 'Heebo,sans-serif', fontWeight: 700, fontSize: 15 }}>{g.label}</div>
            </Hover>
          ))}
        </div>
      </section>

      {lbItem && (
        <div onClick={() => setLightbox(null)} style={{ position: 'fixed', inset: 0, zIndex: 120, background: 'rgba(8,28,38,.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, animation: 'fadeIn .2s ease both' }}>
          <button onClick={() => setLightbox(null)} aria-label="סגירה" style={{ position: 'absolute', top: 20, left: 20, width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,255,255,.14)', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Close /></button>
          <button onClick={(e) => { e.stopPropagation(); setLightbox((v) => (v + 1) % n); }} aria-label="הבא" style={{ ...arrowBtn, left: 18 }}><ChevronLeft s={26} /></button>
          <button onClick={(e) => { e.stopPropagation(); setLightbox((v) => (v - 1 + n) % n); }} aria-label="הקודם" style={{ ...arrowBtn, right: 18 }}><ChevronRight s={26} /></button>
          <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', maxWidth: 900, width: '100%', maxHeight: '80vh', aspectRatio: '4/3' }}>
            <Img src={`images/${lbItem.id}.png`} alt={lbItem.label} fit="contain" radius={16} />
            <div style={{ position: 'absolute', bottom: -44, right: 0, left: 0, textAlign: 'center', color: '#fff', fontFamily: 'Heebo,sans-serif', fontWeight: 600, fontSize: 16 }}>{lbItem.label}</div>
          </div>
        </div>
      )}
    </div>
  );
}
