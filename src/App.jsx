import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import Home from './pages/Home.jsx';
import Private from './pages/Private.jsx';
import Buildings from './pages/Buildings.jsx';
import Tech from './pages/Tech.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';
import Accessibility from './pages/Accessibility.jsx';

export default function App() {
  const [page, setPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 880px)');
    const onMq = () => setIsMobile(mq.matches);
    onMq();
    mq.addEventListener('change', onMq);
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      mq.removeEventListener('change', onMq);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const nav = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const pages = {
    home: <Home nav={nav} />,
    private: <Private nav={nav} />,
    building: <Buildings nav={nav} />,
    tech: <Tech nav={nav} />,
    gallery: <Gallery nav={nav} />,
    contact: <Contact nav={nav} />,
    accessibility: <Accessibility />,
  };

  return (
    <>
      <a href="#main-content" className="skip-link">דילוג לתוכן הראשי</a>
      <Header page={page} nav={nav} scrolled={scrolled} isMobile={isMobile} />
      <main id="main-content" key={page} style={{ animation: 'fadeIn .4s ease both' }}>
        {pages[page]}
      </main>
      <Footer nav={nav} />
      <FloatingWhatsApp />
    </>
  );
}
