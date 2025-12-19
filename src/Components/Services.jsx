import React from 'react';
import './ComponentStyles/Services.css';

const servicesList = [
  { title: 'Web Development', icon: '💻' },
  { title: 'Digital Marketing', icon: '📈' },
  { title: 'Mob App Development', icon: '📱' },
  { title: 'Product Design', icon: '🎨' },
  { title: 'AI Automation', icon: '🤖' },
  { title: 'Data Processing', icon: '📊' },
  { title: 'Data Insights', icon: '🔍' },
  { title: 'Form Filling', icon: '📝' },
  { title: 'Voice Process', icon: '🎙️' },
  { title: 'E-Pub & XML', icon: '📄' },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Specialize</h2>
          <h3>What We Offer</h3>
          <p>Comprehensive solutions tailored to your business needs.</p>
        </div>
        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h4>{service.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
