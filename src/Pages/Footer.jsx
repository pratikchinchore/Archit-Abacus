import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaArrowUp } from 'react-icons/fa';
import logo from '../Images/archit-logo-1.png'; // Change path as needed
import './Home/Home.css'

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Show button after scrolling 100px
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer bg-dark text-light pt-4 pb-3 border-top border-secondary position-relative">
        <Container>
          <Row className="align-items-center">
            {/* Logo & Copyright */}
            <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
              <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
              <span className="fw-semibold">© 2025 Archit Magic Maths. All Rights Reserved.</span>
            </Col>

            {/* Social Icons */}
            <Col md={6} className="text-center text-md-end">
              <a href="https://www.facebook.com/profile.php?id=61555744427112" className="text-light fs-5 me-3" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://www.instagram.com/archit_magic_maths?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-light fs-5 me-3" target="_blank" rel="noreferrer"><FaInstagram /></a>
              {/* <a href="https://youtube.com" className="text-light fs-5" target="_blank" rel="noreferrer"><FaYoutube /></a> */}
            </Col>
          </Row>
        </Container>

        {/* Scroll to top button */}
        {showScroll && (
          <button
            onClick={scrollToTop}
            className="scroll-to-top"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        )}
      </footer>
    </>
  );
};

export default Footer;
