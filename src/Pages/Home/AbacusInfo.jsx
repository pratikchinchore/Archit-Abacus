import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css'
import AbacusImage from '../../Images/about1.jpg'; // Replace with your image path

const AbacusInfo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="abacus-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} data-aos="fade-right">
            <img
              src={AbacusImage}
              alt="Abacus"
              className="img-fluid rounded shadow abacus-image"
            />
          </Col>
          <Col md={6} data-aos="fade-left" className="mt-4 mt-md-0">
            <h2 className="abacus-title mb-3">What Is Abacus?</h2>
            <p className="abacus-text">
              The name Abacus is derived from the Latin word <em>abax</em>. An abacus is a
              wooden rectangular box lined with vertical rods fitted with beads — one of the
              ancient tools used for calculations. Each bead can represent a number.
              Types include Russian, Chinese, and Japanese, with the Chinese abacus being
              the most popular. It boosts concentration, confidence, and various capabilities in children.
            </p>

            <h2 className="abacus-title mb-3">History & Research</h2>
            <ul className="abacus-list">
              <li><i className="bi bi-check-circle-fill"></i> The abacus, also called a counting frame, is a calculating tool.</li>
              <li><i className="bi bi-check-circle-fill"></i> Despite modern calculators, abaci are still widely used in some countries.</li>
              <li><i className="bi bi-check-circle-fill"></i> Globally, abaci help schools teach numerals and arithmetic basics.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AbacusInfo;
