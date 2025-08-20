import React from 'react';
import './StatsSection.css'; // Importing CSS for styling

const StatsSection: React.FC = () => {
    return (
        <section className="stats-section">
            <div className="stats-container">
                <div className="stat-item">
                    <h2 className="stat-number">100+</h2>
                    <p className="stat-description">Luxury Products</p>
                </div>
                <div className="stat-item">
                    <h2 className="stat-number">5000+</h2>
                    <p className="stat-description">Happy Customers</p>
                </div>
                <div className="stat-item">
                    <h2 className="stat-number">10+</h2>
                    <p className="stat-description">Years of Experience</p>
                </div>
                <div className="stat-item">
                    <h2 className="stat-number">20+</h2>
                    <p className="stat-description">Exclusive Brands</p>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;