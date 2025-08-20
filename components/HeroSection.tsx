import React from 'react';
import './HeroSection.css'; // Import the CSS for styling

const HeroSection: React.FC = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">GlamCS</h1>
                <p className="hero-subtitle">Elevate Your Beauty</p>
                <button className="hero-button">Shop Now</button>
            </div>
            <div className="hero-background">
                {/* 3D luxury design effect can be applied here */}
            </div>
        </div>
    );
};

export default HeroSection;