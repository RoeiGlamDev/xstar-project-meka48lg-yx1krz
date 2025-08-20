import { useEffect, useState } from 'react';

const useScrollAnimation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    setIsVisible(position > 100); // Adjust threshold as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrollPosition, isVisible };
};

export default useScrollAnimation;