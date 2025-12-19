import React from 'react';
import { Link } from 'react-router-dom';
import './ComponentStyles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>Stackly</h3>
            <p>Innovating today for a smarter tomorrow.</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Company</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="/#about">About Us</a></li>
                <li><a href="/#services">Services</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h4>Services</h4>
              <ul>
                <li><a href="/#">Web Development</a></li>
                <li><a href="/#">App Development</a></li>
                <li><a href="/#">Digital Marketing</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:info@thestackly.com">info@thestackly.com</a></li>
                <li><a href="tel:+1234567890">+1 234 567 890</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Stackly. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
