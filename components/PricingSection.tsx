import React from 'react';
import './PricingSection.css'; // Importing CSS for styling

const PricingSection: React.FC = () => {
    return (
        <section className="pricing-section">
            <div className="container">
                <h2 className="section-title">Our Pricing</h2>
                <div className="pricing-cards">
                    <div className="pricing-card">
                        <h3 className="card-title">Basic Package</h3>
                        <p className="card-price">$29.99</p>
                        <p className="card-description">Perfect for beginners.</p>
                        <button className="card-button">Choose Plan</button>
                    </div>
                    <div className="pricing-card premium">
                        <h3 className="card-title">Premium Package</h3>
                        <p className="card-price">$59.99</p>
                        <p className="card-description">For the luxury experience.</p>
                        <button className="card-button">Choose Plan</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Ultimate Package</h3>
                        <p className="card-price">$99.99</p>
                        <p className="card-description">All-in-one solution.</p>
                        <button className="card-button">Choose Plan</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;