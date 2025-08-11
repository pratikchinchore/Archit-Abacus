import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      {/* Left Column - Info */}
      <div className="contact-info">
        <h2 className="contact-title">Let's Connect 🚀</h2>
        <p className="contact-subtitle">
          Have questions or just want to say hi? We’d love to hear from you!
        </p>

        <div className="contact-details">
          <div className="contact-item">
            <span className="contact-icon"><FaMapMarkerAlt /></span>
            <div>
              <h4>Address</h4>
              <p>Aarya Auspicious,XQP7+526, 3-2, Untwadi, Jagtap Nagar, Nashik, Maharashtra 422008</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon"><FaPhoneAlt /></span>
            <div>
              <h4>Phone</h4>
              <p>+91 808 712 5945</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon"><FaEnvelope /></span>
            <div>
              <h4>Email</h4>
              <p>tushar.chinchore87@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Map */}
      <div className="contact-map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119985.6384323478!2d73.61835479736328!3d19.985367876333886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb1608f6e045%3A0xfe8af805a9cfe672!2sAarya%20Auspicious!5e0!3m2!1sen!2sin!4v1754847607371!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
