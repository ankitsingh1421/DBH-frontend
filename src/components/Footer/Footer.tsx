import React from 'react';
// import { Link } from 'react-router-dom';
import './Footer.css';
import { Link as ScrollLink } from 'react-scroll'; // Import react-scroll's Link
import LegalLinks from '../LegalLink/LegalLinks';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-navy-950/80">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>
    Email ID: 
    <a href="mailto:info@decodingbollywoodhits.in" className="text-white hover:underline">
       info@decodingbollywoodhits.in
    </a>
  </p>
  <p>
    Contact Number :  
    <a href="tel:9389916233" className="text-white hover:underline">
       9389916233
    </a>
  </p>

        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.instagram.com/sanskar_saswat?igsh=MW1tc2k5ZjA0dDVkeg==" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/in/sanskar-saswat-47a61725a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
             {!location.pathname.startsWith("/blog") ? (
               <ScrollLink to="home" smooth={true} duration={500} className="text-white cursor-pointer">
               Home
             </ScrollLink>
             ) :
             <Link to="/"  className="text-white cursor-pointer">
             Home
           </Link>
             }
            </li>
            <li>
             {!location.pathname.startsWith("/blog") ? (
               <ScrollLink to="courses" smooth={true} duration={500} className="text-white cursor-pointer">
               Courses
             </ScrollLink>
             ):(
              null
             )}
            </li>
            <li>
          {!location.pathname.startsWith("/blog") ? (
            <ScrollLink to="about" smooth={true} duration={500} className="text-white cursor-pointer">
            About
          </ScrollLink>
          ):(
            null
          )}
            </li>
            <li>

            {!location.pathname.startsWith("/blog") ? (
               <ScrollLink to="blog" smooth={true} duration={500} className="text-white cursor-pointer">
               Blog
             </ScrollLink>
            ) : (
             null
            )}
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p><LegalLinks />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
