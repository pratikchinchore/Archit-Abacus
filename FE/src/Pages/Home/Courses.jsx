import React, { useState } from "react";
import "./Courses.css";
import Vedik from '../../Images/Courses/vedic_back.png'
import Kalfun from '../../Images/Courses/kalfun_back.jpg'
import Abacus from '../../Images/Courses/abacus_back.avif'
import Phonix from '../../Images/Courses/phonix_back.jpg'
import Hand_Writing from '../../Images/Courses/handwriting_back.avif'
import Teacher from '../../Images/Courses/teacher2.jpg'

const courseData = [
  { id: 1, title: "Abacus", img: Abacus, description: "Develop lightning-fast mental calculation skills, enhance memory, and boost focus through fun and interactive abacus training." },
  { id: 2, title: "Kalfun", img: Kalfun, description: "A playful and innovative learning approach designed to spark curiosity, creativity, and critical thinking in young minds." },
  { id: 3, title: "Phonics", img: Phonix, description: "Strengthen reading, spelling, and pronunciation skills through engaging phonics activities, perfect for early learners." },
  { id: 4, title: "Vedic Math", img: Vedik, description: "Master ancient Indian mathematical techniques to solve complex problems quickly and efficiently." },
  { id: 5, title: "Handwriting Improvement", img: Hand_Writing, description: "Transform handwriting into a beautiful and legible skill with training focused on style, speed, and neatness." },
  { id: 6, title: "Teacher Training", img: Teacher, description: "Comprehensive programs to equip aspiring teachers with modern teaching strategies, classroom management, and subject expertise." },
];

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleMouseMove = (e, id) => {
    const card = document.getElementById(`course-card-${id}`);
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `rotateY(${x / 20}deg) rotateX(${-y / 20}deg) scale(1.03)`;
  };

  const handleMouseLeave = (id) => {
    const card = document.getElementById(`course-card-${id}`);
    card.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
  };

  return (
    <div className="courses-section">
      <h2 className="courses-title">Our Courses</h2>
      <div className="courses-grid">
        {courseData.map(course => (
          <div
            id={`course-card-${course.id}`}
            key={course.id}
            className="course-card floating"
            onMouseMove={(e) => handleMouseMove(e, course.id)}
            onMouseLeave={() => handleMouseLeave(course.id)}
            onClick={() => setSelectedCourse(course)}
          >
            <div className="course-img">
              <img src={course.img} alt={course.title} />
            </div>
            <h3>{course.title}</h3>
          </div>
        ))}
      </div>

      {selectedCourse && (
        <div className="modal-overlay" onClick={() => setSelectedCourse(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={selectedCourse.img} alt={selectedCourse.title} />
            <h2>{selectedCourse.title}</h2>
            <p>{selectedCourse.description}</p>
            <button className="close-btn" onClick={() => setSelectedCourse(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
