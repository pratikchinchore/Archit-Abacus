import React, { useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FaChalkboardTeacher,
  FaCalculator,
  FaPenNib,
  FaBookReader,
} from "react-icons/fa";
import "./Counter.css";
import AOS from "aos";
import "aos/dist/aos.css";

const counterData = [
  { label: "Vedic Math", count: 300, suffix: "+ students", icon: <FaCalculator /> },
  { label: "Abacus", count: 400, suffix: "+ students", icon: <FaPenNib /> },
  { label: "Phonics", count: 100, suffix: "+ students", icon: <FaBookReader /> },
  { label: "Teacher Training", count: 25, suffix: "+ teachers", icon: <FaChalkboardTeacher /> },
];

const CounterCard = ({ item }) => {
  // threshold helps ensure counters trigger properly on small screens
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });

  return (
    <article
      ref={ref}
      className="counter-box"
      role="group"
      aria-label={`${item.label} counter`}
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div className="counter-number-box">
        {item.icon && <div className="counter-icon" aria-hidden>{item.icon}</div>}
        <div className="counter-value-wrap">
          <span className="counter-value">
            {inView ? <CountUp end={item.count} duration={2.2} /> : 0}
          </span>
          {item.suffix && <span className="counter-unit">{item.suffix}</span>}
        </div>
      </div>

      <div className="counter-label-box">{item.label}</div>
    </article>
  );
};

const Counter = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900, easing: "ease-out-cubic" });
  }, []);

  return (
    <section className="counter-section" aria-labelledby="counter-heading">
      <div className="counter-text">
        <h3 id="counter-heading" className="counter-animated-text">Training & Achievements</h3>
        <p className="counter-description">
          My students' enthusiasm and improved performance reflect focused practice and nurturing teaching.
          We focus on clarity, fundamentals, and joyful learning.
        </p>
      </div>

      <div className="counter-grid" role="list">
        {counterData.map((item, index) => (
          <CounterCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Counter;
