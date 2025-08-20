'use client';

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealComponent: React.FC = ({ children }) => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom', // Animation origin
      distance: '50px', // Distance of the reveal
      duration: 1000, // Duration of the animation
      delay: 200, // Delay before the animation starts
      reset: true, // Reset animation on scroll
    });

    sr.reveal('.reveal', {}); // Apply reveal effect to elements with class 'reveal'
  }, []);

  return <div className="reveal">{children}</div>; // Render children with reveal class
};

export default ScrollRevealComponent;