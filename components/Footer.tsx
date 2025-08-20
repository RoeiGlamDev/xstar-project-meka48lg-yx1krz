import React from 'react';
import './Footer.css'; // Importing CSS for styling

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h1>GlamCS</h1> {/* Logo */}
                </div>
                <nav className="footer-nav">
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                    </ul>
                </nav>
                <div className="footer-social">
                    <a href="#" className="social-icon">Instagram</a>
                    <a href="#" className="social-icon">Facebook</a>
                    <a href="#" className="social-icon">Twitter</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} GlamCS. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;