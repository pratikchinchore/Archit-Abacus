import React from "react";
import Carousal from "./Home/Carousal";
import AbacusInfo from "./Home/AbacusInfo";
import Acitivities from "./Home/Acitivities";
import Counter from "./Home/Counter";
import TeacherInfo from "./Home/TeacherInfo";
import Testimonials from "./Home/Testimonials";
import Contact from "./Home/Contact";
import AwardCeremancy from "./Home/AwardCeremancy";
import TeacherCertification from "./Home/TeacherCertification";
import Courses from "./Home/Courses";
import Navbarr from '../Pages/Navbarr';


const sectionStyle = { paddingTop: "80px", marginTop: "-80px" };

const Home = () => {
  return (
    <div>
 
      <Navbarr />

      {/* Home Section */}
      <section id="home">
        <Carousal />
      </section>

      {/* Abacus Info Section */}
      <section id="abacus-info" style={sectionStyle}>
        <AbacusInfo />
      </section>

      {/* Courses Section */}
      <section id="courses" style={sectionStyle}>
        <Courses />
      </section>

      {/* Activities Section */}
      <section id="activities" style={sectionStyle}>
        <Acitivities />
      </section>

      {/* Award Ceremony Section */}
      <section id="award-ceremony" style={sectionStyle}>
        <AwardCeremancy />
      </section>

      {/* Counter Section */}
      <section style={sectionStyle}>
        <Counter />
      </section>

      {/* Teacher Info Section */}
      <section id="teacher-info" style={sectionStyle}>
        <TeacherInfo />
      </section>

      {/* Teacher Certification Section */}
      <section id="teacher-certification" style={sectionStyle}>
        <TeacherCertification />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" style={sectionStyle}>
        <Testimonials />
      </section>

      {/* Contact Section */}
      <section id="contact" style={sectionStyle}>
        <Contact />
      </section>

 
    </div>
  );
};

export default Home;
