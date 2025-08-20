import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define the keyframes for the gradient animation
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Create a styled div for the gradient background
const GradientBackgroundContainer = styled.div`
  height: 100vh; // Full height
  width: 100%; // Full width
  background: linear-gradient(270deg, #ff7e5f, #feb47b); // Orange gradient
  background-size: 400% 400%; // Size for animation
  animation: ${gradientAnimation} 15s ease infinite; // Animation properties
  position: absolute; // Positioning
  top: 0; // Align to top
  left: 0; // Align to left
  z-index: -1; // Behind other components
`;

// Define the GradientBackground component
const GradientBackground: React.FC = () => {
  return <GradientBackgroundContainer />; // Render the gradient background
};

export default GradientBackground; // Export the component