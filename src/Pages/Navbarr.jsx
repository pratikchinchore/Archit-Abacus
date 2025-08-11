import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Archit_logo from "../Images/archit-logo.png";
import "./Home/Home.css";

const sections = [
  { id: "home", label: "Home" },
  { id: "abacus-info", label: "Abacus Info" },
  { id: "courses", label: "Courses" },
  { id: "activities", label: "Activities" },
  { id: "contact", label: "Contact" },
];

const moreSections = [
  { id: "teacher-info", label: "Teacher Info" },
  { id: "teacher-certification", label: "Teacher Certification" },
  { id: "testimonials", label: "Testimonials" },
  { id: "award-ceremony", label: "Award Ceremony" },
];

const Navbarr = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    const element = document.getElementById(id);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    setExpanded(false); // close menu after click
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      let currentSection = "home";

      document.querySelectorAll("section[id]").forEach((sec) => {
        const secTop = sec.offsetTop - navbarHeight - 10;
        if (window.scrollY >= secTop) {
          currentSection = sec.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // set correct active on page load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className="bg-body-tertiary shadow-sm navbar"
      fixed="top"
    >
      <Container>
        <Navbar.Brand
          onClick={() => scrollToSection("home")}
          style={{ cursor: "pointer" }}
        >
          <img
            src={Archit_logo}
            alt="Logo"
            height="60"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded((prev) => !prev)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {sections.map((sec) => (
              <Nav.Link
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={activeSection === sec.id ? "active-link" : ""}
              >
                {sec.label}
              </Nav.Link>
            ))}

            <NavDropdown title="More" id="basic-nav-dropdown">
              {moreSections.map((sec) => (
                <NavDropdown.Item
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={activeSection === sec.id ? "active-link" : ""}
                >
                  {sec.label}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
