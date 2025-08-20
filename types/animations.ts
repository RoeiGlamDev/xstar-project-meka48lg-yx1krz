import { AnimationType } from './types'; // Assuming there's a types file for shared types

const animationTypes: AnimationType[] = [
  {
    id: 'fadeIn', // Fade in effect
    name: 'Fade In',
    duration: 300, // Duration in milliseconds
    timingFunction: 'ease-in', // Timing function for the animation
  },
  {
    id: 'slideUp', // Slide up effect
    name: 'Slide Up',
    duration: 500,
    timingFunction: 'ease-out',
  },
  {
    id: 'zoomIn', // Zoom in effect
    name: 'Zoom In',
    duration: 400,
    timingFunction: 'ease-in-out',
  },
  {
    id: 'rotate', // Rotate effect
    name: 'Rotate',
    duration: 600,
    timingFunction: 'linear',
  },
  {
    id: 'bounce', // Bounce effect
    name: 'Bounce',
    duration: 700,
    timingFunction: 'ease-in-out',
  },
];

export default animationTypes;