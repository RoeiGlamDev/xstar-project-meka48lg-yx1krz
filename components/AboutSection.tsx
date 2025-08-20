import React from 'react';
import './AboutSection.css'; // Importing CSS for styling

const AboutSection: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h1 className="about-title">Welcome to GlamCS</h1>
                <p className="about-description">
                    Experience the elegance of luxury cosmetics crafted for the modern individual. 
                    Our products are designed with the finest ingredients and innovative 3D technology, 
                    ensuring a high-end experience with every application.
                </p>
                <button className="about-button">Discover Our Collection</button>
            </div>
        </section>
    );
};

export default AboutSection;