import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaChalkboardTeacher, FaCalculator, FaPenNib, FaChild, FaBookReader } from "react-icons/fa";
import "./Counter.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const counterData = [
  { label: "Vedic Math", count: 300, suffix: "+ students", icon: <FaCalculator /> },
  { label: "Abacus", count: 400, suffix: "+ students", icon: <FaPenNib /> },
  { label: "Phonics", count: 100, suffix: "+ students", icon: <FaBookReader /> },
  { label: "Handwriting", count: 100, suffix: "+ students", icon: <FaChild /> },
  { label: "Teacher Training", count: 25, suffix: "+ teachers", icon: <FaChalkboardTeacher /> },
];

const CounterCard = ({ item }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="counter-card" data-aos="fade-up" data-aos-duration="1200">
      <div className="icon-wrapper">{item.icon}</div>
      <h4 className="counter-label">{item.label}</h4>
      <h2 className="counter-number">
        {inView && <CountUp end={item.count} duration={2.5} />}
        {inView && ` ${item.suffix}`}
      </h2>
    </div>
  );
};

const Counter = () => {
  return (
    <div className="counter-container">
      <h2 className="counter-heading">Our Achievements</h2>
      <div className="counter-grid">
        {counterData.map((item, index) => (
          <CounterCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Counter;
