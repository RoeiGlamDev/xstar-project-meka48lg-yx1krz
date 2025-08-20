import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useAnimation = (trigger: React.RefObject<HTMLElement>, animationProps: object) => {
    const animationRef = useRef<GSAPTimeline | null>(null);

    useEffect(() => {
        if (trigger.current) {
            animationRef.current = gsap.timeline({ paused: true })
                .from(trigger.current, animationProps);

            const handleScroll = () => {
                const { top, bottom } = trigger.current.getBoundingClientRect();
                if (top < window.innerHeight && bottom > 0) {
                    animationRef.current?.play();
                } else {
                    animationRef.current?.pause();
                }
            };

            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Check on mount

            return () => {
                window.removeEventListener('scroll', handleScroll);
                animationRef.current?.kill();
            };
        }
    }, [trigger, animationProps]);

    return animationRef;
};

export default useAnimation;