import React from 'react';
import './ContactPage.css'; // Importing CSS for styling

const ContactPage: React.FC = () => {
    return (
        <div className="contact-page">
            <header className="header">
                <h1 className="title">Contact GlamCS</h1>
                <p className="subtitle">We'd love to hear from you!</p>
            </header>
            <main className="form-container">
                <form className="contact-form">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" id="name" className="form-input" required />

                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" className="form-input" required />

                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea id="message" className="form-textarea" required></textarea>

                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </main>
            <footer className="footer">
                <p className="footer-text">© 2023 GlamCS. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ContactPage;