import React, { useState, useEffect, useRef } from 'react';

/**
 * Parse a CSS declaration string ("a:b;c:d") into a React style object.
 * Lets us port the original inline styles almost verbatim.
 */
export function css(str) {
  if (!str || typeof str === 'object') return str || {};
  const out = {};
  str.split(';').forEach((rule) => {
    const i = rule.indexOf(':');
    if (i < 0) return;
    let k = rule.slice(0, i).trim();
    const v = rule.slice(i + 1).trim();
    if (!k) return;
    // keep CSS custom properties as-is; camelCase the rest
    if (!k.startsWith('--')) k = k.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    out[k] = v;
  });
  return out;
}

/**
 * Element with a base style and a hover style (replaces the DC `style-hover`).
 * Usage: <Hover as="a" b="...base css..." h="...hover css..." href="#">...</Hover>
 */
export function Hover({ as: Tag = 'div', b = '', h = '', style, children, ...rest }) {
  const [hov, setHov] = useState(false);
  const base = typeof b === 'object' ? b : css(b);
  const hover = hov ? (typeof h === 'object' ? h : css(h)) : null;
  return (
    <Tag
      style={{ ...base, ...(hover || {}), ...(style || {}) }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Reveal-on-scroll wrapper (replaces the DC `data-reveal` IntersectionObserver).
 */
export function Reveal({ delay = 0, style, children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        ...(style || {}),
        opacity: shown ? undefined : 0,
        animation: shown ? `reveal .7s cubic-bezier(.2,.7,.3,1) ${delay}ms both` : undefined,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

/** Cover/contain image filling its positioned parent (replaces <image-slot>). */
export function Img({ src, alt = '', fit = 'cover', radius, style }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: fit,
        borderRadius: radius,
        ...(style || {}),
      }}
    />
  );
}
