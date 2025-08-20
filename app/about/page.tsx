import React from 'react';
import './AboutPage.css'; // Importing CSS for styling

const AboutPage: React.FC = () => {
    return (
        <div className="about-page">
            <header className="about-header">
                <h1 className="about-title">Welcome to GlamCS</h1>
                <p className="about-subtitle">Elevate Your Beauty Experience</p>
            </header>
            <section className="about-content">
                <h2 className="about-section-title">Our Mission</h2>
                <p className="about-text">
                    At GlamCS, we believe in providing high-end cosmetics that empower you to express your unique beauty.
                </p>
                <h2 className="about-section-title">Our Products</h2>
                <p className="about-text">
                    Explore our luxurious range of cosmetics designed with the finest ingredients and innovative 3D effects.
                </p>
            </section>
            <footer className="about-footer">
                <p className="footer-text">© 2023 GlamCS. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AboutPage;