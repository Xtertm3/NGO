import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiHeart } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon" style={{ background: 'transparent' }}>
                <img src="/assets/images/logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div>
                <span className="footer-logo-name" style={{ textTransform: 'uppercase' }}>Venkateshwara</span>
                <span className="footer-logo-sub" style={{ textTransform: 'uppercase' }}>Educational and Rural Development Seva Trust</span>
              </div>
            </div>
            <p className="footer-tagline">
              Rooted in compassion, guided by dharma — we walk alongside the elderly, the forgotten, and the vulnerable, offering shelter, dignity, and care.
            </p>
            <p className="footer-reg">
              Registered Trust · Est. 2014 · Reg. No. HSK-4-00519-2013-14
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/donate">Support & Donate</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* What We Do */}
          <div className="footer-col">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              <li>Elderly Care Ashram</li>
              <li>Free Medical Assistance</li>
              <li>Rural Education Programs</li>
              <li>Community Development</li>
              <li>Skill Development Camps</li>
              <li>Annadanam (Free Meals)</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Reach Us</h4>
            <ul className="footer-contact">
              <li>
                <FiMapPin size={15} />
                <span>Thirumala Resort, Near Thirumala Conventional Hall, Soukya Road, Thirumalashettyhalli Cross, Hoskote, Bangalore Rural District, 560067</span>
              </li>
              <li>
                <FiPhone size={15} />
                <a href="tel:+918553182800">+91 85531 82800</a>
                <span> / </span>
                <a href="tel:+918971379711">+91 89713 79711</a>
              </li>
              <li>
                <FiMail size={15} />
                <a href="mailto:venkateshwaraeducationaltrust@gmail.com">venkateshwaraeducationaltrust@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Venkateshwara Educational & Rural Development Seva Trust. All rights reserved.</p>
          <p className="footer-made">
            Made with <FiHeart size={12} style={{ color: 'var(--saffron)', display: 'inline' }} /> for those who serve selflessly
          </p>
        </div>
      </div>
    </footer>
  );
}
