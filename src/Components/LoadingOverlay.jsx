import React from 'react';
import './ComponentStyles/Loading.css';
import logoStackly from '../assets/logo-stackly.png';
import logoS from '../assets/logo-s.png';

const LoadingOverlay = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-backdrop"></div>
      <div className="loader-content">
        <img className="loader-emblem" src={logoS} alt="Stackly emblem" />
        <div className="loader-kicker">Welcome to</div>
        <img className="loader-logo" src={logoStackly} alt="Stackly" />
        <div className="loader-glow"></div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
