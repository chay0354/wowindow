import React, { useRef, useEffect } from 'react';

// Animated 3D field of floating glass droplets, drawn on a canvas.
export default function Hero3D() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0, H = 0, raf = 0, running = true;

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      W = r.width; H = r.height;
      canvas.width = Math.max(1, W * dpr);
      canvas.height = Math.max(1, H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const N = 46;
    const pts = [];
    for (let i = 0; i < N; i++) {
      pts.push({
        x: Math.random() * 2 - 1,
        y: Math.random() * 2 - 1,
        z: Math.random() * 2 + 0.2,
        r: Math.random() * 26 + 8,
        spin: Math.random() * Math.PI * 2,
        sp: (Math.random() * 0.4 + 0.15) * (Math.random() < 0.5 ? 1 : -1),
      });
    }
    const FOV = 1.7;
    let t = 0;

    const draw = () => {
      if (!running) return;
      t += 0.0045;
      ctx.clearRect(0, 0, W, H);
      const cx = W * 0.5, cy = H * 0.5;
      const ca = Math.cos(t), sa = Math.sin(t * 0.7);
      const proj = pts
        .map((p) => {
          const rx = p.x * ca - (p.z - 1.1) * sa;
          const rz = p.x * sa + (p.z - 1.1) * ca + 1.1;
          const depth = FOV / (rz + 0.4);
          return {
            sx: cx + rx * depth * (W * 0.42),
            sy: cy + (p.y + Math.sin(t * 1.3 + p.spin) * 0.12) * depth * (H * 0.42),
            s: depth, r: p.r, rz, p,
          };
        })
        .sort((a, b) => a.rz - b.rz);

      for (const o of proj) {
        const rad = o.r * o.s;
        if (rad < 0.5) continue;
        const alpha = Math.max(0, Math.min(0.7, (1.6 - o.rz) * 0.5));
        const g = ctx.createRadialGradient(o.sx - rad * 0.3, o.sy - rad * 0.3, rad * 0.1, o.sx, o.sy, rad);
        g.addColorStop(0, `rgba(255,255,255,${alpha * 0.9})`);
        g.addColorStop(0.35, `rgba(127,224,255,${alpha * 0.5})`);
        g.addColorStop(0.75, `rgba(52,179,232,${alpha * 0.28})`);
        g.addColorStop(1, 'rgba(22,137,196,0)');
        ctx.beginPath();
        ctx.arc(o.sx, o.sy, rad, 0, 6.2832);
        ctx.fillStyle = g;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(o.sx - rad * 0.32, o.sy - rad * 0.34, rad * 0.18, 0, 6.2832);
        ctx.fillStyle = `rgba(255,255,255,${alpha * 0.85})`;
        ctx.fill();
        o.p.spin += o.p.sp * 0.01;
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.9 }}
    />
  );
}
