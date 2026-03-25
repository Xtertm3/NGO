import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiHeart } from 'react-icons/fi';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/donate', label: 'Donate' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="logo-placeholder" style={{ background: 'transparent' }}>
            <img src="/assets/images/logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div className="logo-text">
            <span className="logo-name" style={{ textTransform: 'uppercase' }}>Venkateshwara</span>
            <span className="logo-sub" style={{ textTransform: 'uppercase' }}>Educational and Rural Development Seva Trust</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar-links">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <Link to="/donate" className="navbar-cta">
          <FiHeart size={14} />
          Support Us
        </Link>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${open ? 'open' : ''}`}>
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
          >
            {link.label}
          </NavLink>
        ))}
        <Link to="/donate" className="mobile-cta btn-primary">
          <FiHeart size={14} />
          Support Now
        </Link>
      </div>
    </header>
  );
}
