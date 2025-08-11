import React from "react";
import { Card } from "primereact/card";
import { Carousel } from "primereact/carousel";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Deepali Bhadane",
    text: "The teachers are highly qualified and supportive. My child loves going to class every day!",
    stars: 5,
  },
  {
    name: "Neha Patel",
    text: "Very interactive sessions and personal attention to every student. Highly recommended!",
    stars: 4,
  },
  {
    name: "Amit Verma",
    text: "Excellent teaching and a great environment for children to grow.",
    stars: 5,
  },
  {
    name: "Priya Kulkarni",
    text: "The activities are well-designed and my kid enjoys every session. Thank you!",
    stars: 4,
  },
  {
    name: "Manoj Gupta",
    text: "A truly caring staff and very effective teaching methods. I can see the difference!",
    stars: 5,
  },
];

const TestimonialItem = (testimonial) => (
  <div className="testimonial-slide">
    <Card className="testimonial-card">
      <i className="pi pi-quote-left quote-icon" />
      <p className="testimonial-text">"{testimonial.text}"</p>
      <div className="testimonial-rating">
        {Array.from({ length: testimonial.stars }).map((_, i) => (
          <i key={i} className="pi pi-star-fill star-icon" />
        ))}
      </div>
      <p className="testimonial-name">— {testimonial.name}</p>
    </Card>
  </div>
);

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">What Parents Say</h2>
      <Carousel
        value={testimonials}
        itemTemplate={TestimonialItem}
        numVisible={3}
        numScroll={1}
        autoplayInterval={4000}
        circular
        responsiveOptions={[
          {
            breakpoint: "1024px",
            numVisible: 2,
            numScroll: 1,
          },
          {
            breakpoint: "600px",
            numVisible: 1,
            numScroll: 1,
          },
        ]}
      />
    </section>
  );
};

export default Testimonials;
