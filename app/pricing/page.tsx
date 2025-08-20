import React from 'react';
import './PricingPage.css'; // Custom styles for the pricing page

const PricingPage: React.FC = () => {
    return (
        <div className="pricing-page">
            <header className="header">
                <h1 className="title">GlamCS Pricing</h1>
                <p className="subtitle">Elevate your beauty with our luxurious products</p>
            </header>
            <section className="pricing-options">
                <div className="pricing-card">
                    <h2 className="card-title">Basic Package</h2>
                    <p className="price">$29.99</p>
                    <p className="description">Includes essential cosmetics for everyday use.</p>
                    <button className="cta-button">Select</button>
                </div>
                <div className="pricing-card">
                    <h2 className="card-title">Premium Package</h2>
                    <p className="price">$49.99</p>
                    <p className="description">A curated selection of high-end products.</p>
                    <button className="cta-button">Select</button>
                </div>
                <div className="pricing-card">
                    <h2 className="card-title">Luxury Package</h2>
                    <p className="price">$99.99</p>
                    <p className="description">The ultimate collection for the discerning beauty lover.</p>
                    <button className="cta-button">Select</button>
                </div>
            </section>
            <footer className="footer">
                <p className="footer-text">© 2023 GlamCS. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default PricingPage;