import React from 'react';
import { Link } from 'react-router-dom';
import './ComponentStyles/About.css';
import aboutImg from '../assets/banner-thumb-bg.png';
import homeVideo from '../assets/home video.mp4';

const values = [
  'Strong Leadership',
  'Work-Life Balance',
  'Recognition and Rewards',
  'Continuous Learning',
  'Trust',
  'Communication',
  'Culture',
  'Amazing Design'
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <div className="about-content">
          <h2>About Company</h2>
          <h3>With vast experience in project management, our team delivers practical expertise.</h3>
          <p>
            Stackly is a powerful platform that streamlines workflow, enhances efficiency, and drives digital success.
            It offers a user-friendly experience with seamless integration, making it an essential tool for businesses
            and individuals looking to optimize their online operations.
          </p>
          <p>
            Founded in 2015, Stackly has grown into one of the leading and most innovative IT companies in the industry.
            With a team of over 120 talented professionals, we specialize in delivering cutting-edge technology solutions
            that drive business success. Our commitment to innovation, excellence, and customer satisfaction has positioned
            us as a trusted partner for businesses seeking to leverage technology for growth and efficiency.
          </p>
          <p>
            Stackly and Preyfox LLC are sister concerns, jointly leading innovation in the IT and ITES industries.
            While Preyfox LLC manages operations in the United States, Stackly oversees operations in India.
          </p>
          <div className="about-actions">
            <Link to="/contact" className="btn btn-primary">Learn More</Link>
          </div>
        </div>
        <div className="about-video">
          <video
            className="about-media"
            src={homeVideo}
            autoPlay
            muted
            loop
            playsInline
            controls={true}
          />
        </div>
      </div>

      <div className="container about-values">
        {values.map((item, idx) => (
          <div key={idx} className="value-card">
            <span className="value-icon">✦</span>
            <span className="value-text">{item}</span>
          </div>
        ))}
      </div>

      <div className="container about-highlights">
        <div className="about-box">
          <h4>Our Mission</h4>
          <p>
            Our mission is simple—create tools that solve real problems. With a strong focus on innovation, reliability,
            and user satisfaction, we aim to enhance your experience, whether you're an individual or part of a growing business.
          </p>
        </div>
        <div className="about-box">
          <h4>Our Vision</h4>
          <p>
            To become a global technology leader empowering businesses through automation, analytics, and intelligent systems.
          </p>
        </div>
        <div className="about-box">
          <h4>Why Choose Us</h4>
          <p>
            We combine deep technical expertise, customer-first thinking, and proven delivery processes to ensure measurable success for our clients.
          </p>
        </div>
      </div>

      <div className="container about-testimonials">
        <h2 className="text-center">What People Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>“Stackly transformed the way we manage projects. Their solutions are intuitive, powerful, and reliable.”</p>
            <h5>Joe Davis</h5>
            <span>CEO</span>
          </div>
          <div className="testimonial-card">
            <p>“The team’s professionalism and technical depth are outstanding. Highly recommended.”</p>
            <h5>Daniel Roden</h5>
            <span>Managing Director</span>
          </div>
          <div className="testimonial-card">
            <p>“Stackly provided exactly what we needed — on time and beyond expectations.”</p>
            <h5>Emily T</h5>
            <span>Project Manager</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
