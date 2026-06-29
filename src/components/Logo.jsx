import React from 'react';

export default function Logo({ onClick, height = 34 }) {
  return (
    <a
      onClick={onClick}
      style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', textDecoration: 'none' }}
    >
      <img
        src="/images/logo.png"
        alt="wowindow"
        style={{ height, width: 'auto', display: 'block' }}
      />
    </a>
  );
}
