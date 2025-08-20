import React from 'react';
import './Slider.css'; // Importing CSS for styling

const Slider: React.FC = () => {
    return (
        <div className="slider-container">
            <div className="slider">
                <div className="slide">
                    <img src="/images/slide1.jpg" alt="Luxury Product 1" />
                </div>
                <div className="slide">
                    <img src="/images/slide2.jpg" alt="Luxury Product 2" />
                </div>
                <div className="slide">
                    <img src="/images/slide3.jpg" alt="Luxury Product 3" />
                </div>
            </div>
            <div className="slider-controls">
                <button className="prev" aria-label="Previous Slide">❮</button>
                <button className="next" aria-label="Next Slide">❯</button>
            </div>
        </div>
    );
};

export default Slider;