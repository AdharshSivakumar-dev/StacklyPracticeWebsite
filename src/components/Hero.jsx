import React from 'react';
import { Link } from 'react-router-dom';
import './ComponentStyles/Hero.css';
import heroImg from '../assets/banner-thumb-bg.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Innovating today for a smarter tomorrow.</h1>
          <p>We specialize in delivering cutting-edge technology solutions that drive business success.</p>
          <div className="hero-buttons">
            <a href="/#services" className="btn btn-primary">Our Services</a>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
