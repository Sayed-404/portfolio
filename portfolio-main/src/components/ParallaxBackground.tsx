import { useEffect, useState } from 'react';

const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="parallax-bg">
      <div
        className="floating-shape shape-1"
        style={{ transform: `translate(${scrollY * 0.02}px, ${scrollY * 0.03}px)` }}
      />
      <div
        className="floating-shape shape-2"
        style={{ transform: `translate(${-scrollY * 0.015}px, ${-scrollY * 0.02}px)` }}
      />
      <div
        className="floating-shape shape-3"
        style={{ transform: `translate(${scrollY * 0.01}px, ${-scrollY * 0.025}px)` }}
      />
    </div>
  );
};

export default ParallaxBackground;
