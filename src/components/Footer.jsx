import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-left">
                    <p className="copyright">© {new Date().getFullYear()} ANIT ELECTRONICS. All rights reserved.</p>
                </div>
                <div className="footer-right">
                    <p className="footer-tag">Electrical Contractor & Technical Specialist</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
