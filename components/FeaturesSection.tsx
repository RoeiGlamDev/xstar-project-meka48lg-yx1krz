import React from 'react';
import './FeaturesSection.css'; // Importing CSS for styling

const FeaturesSection: React.FC = () => {
    return (
        <section className="features-section">
            <div className="container">
                <h2 className="features-title">Why Choose GlamCS?</h2>
                <div className="features-grid">
                    <div className="feature-item">
                        <div className="feature-icon luxury-effect"> {/* 3D effect class */}
                            <i className="fas fa-leaf"></i> {/* Example icon */}
                        </div>
                        <h3 className="feature-heading">Premium Ingredients</h3>
                        <p className="feature-description">We use only the finest ingredients for your skin.</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon luxury-effect"> {/* 3D effect class */}
                            <i className="fas fa-gem"></i> {/* Example icon */}
                        </div>
                        <h3 className="feature-heading">Luxury Packaging</h3>
                        <p className="feature-description">Our products come in elegant, high-end packaging.</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon luxury-effect"> {/* 3D effect class */}
                            <i className="fas fa-heart"></i> {/* Example icon */}
                        </div>
                        <h3 className="feature-heading">Cruelty-Free</h3>
                        <p className="feature-description">We are committed to being cruelty-free and eco-friendly.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;