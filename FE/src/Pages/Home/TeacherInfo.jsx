import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./TeacherInfo.css";
import teacherImage from "../../Images/TeacherImage.jpeg";

const TeacherInfo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="teacher-section">
      <div className="teacher-container">
        <div className="teacher-image-wrapper" data-aos="fade-left">
          <img
            src={teacherImage}
            alt="Mrs. Shital Tushar Chinchore"
            className="teacher-image"
          />
        </div>
        <div className="teacher-content" data-aos="fade-left">
          <h2 className="teacher-title">Mrs. Shital Tushar Chinchore</h2>
          <h4 className="teacher-subtitle">Founder, Archit Magic Maths</h4>
          <p className="teacher-description">
            I am an international trainer specializing in Phonics and Vedic Math, with expertise in
            Abacus, Phonics, Vedic Math, and English Grammar. I founded Archit Magic Maths in
            2017, a certified institute accredited by Optimum Certifications Inc.
          </p>
          <p className="teacher-description">
            My teaching approach focuses on making learning simple, engaging, and enjoyable,
            ensuring that students grasp concepts effectively. I incorporate interactive activities
            designed to enhance critical thinking, creativity, problem-solving, and cognitive skills.
          </p>
          <p className="teacher-description">
            Additionally, I provide training to teachers, equipping them
            with innovative teaching methodologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeacherInfo;
