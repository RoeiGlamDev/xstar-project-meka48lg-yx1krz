import React from 'react';
import './ParallaxSection.css'; // Importing CSS for styling

const ParallaxSection: React.FC = () => {
    return (
        <div className="parallax-section">
            <div className="parallax-background" />
            <div className="parallax-content">
                <h1 className="title">Elevate Your Beauty</h1>
                <p className="description">Discover the luxurious world of GlamCS cosmetics.</p>
                <button className="explore-button">Explore Now</button>
            </div>
        </div>
    );
};

export default ParallaxSection;