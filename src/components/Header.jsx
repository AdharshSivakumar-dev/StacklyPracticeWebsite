import logo from '../assets/logo-stackly.png';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ComponentStyles/Header.css'


const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    

    return (
        <header className='header'>
            <div className='header-container'>
                <div className='logo'>
                    <img src={logo} alt='Stackly' />
                </div>
                <div className={`Menubar ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li>
                            <Link to="/#home" onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/#about" onClick={closeMenu}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/#services" onClick={closeMenu}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={closeMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="contact-btn desktop-only">
                    <Link to="/contact" className="btn">Get in Touch</Link>
                </div>
            </div>
        </header>
    )
}

export default Header;
