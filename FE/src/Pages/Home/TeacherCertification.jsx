import React, { useState } from "react";
import "./TeacherCertifications.css";

import Cert1 from "../../Images/Teachers/Cer2.jpeg";
import Cert2 from "../../Images/Teachers/Cer3.jpeg";
import Cert3 from "../../Images/Teachers/Cer4.jpeg";
import Cert4 from "../../Images/Teachers/Cer5.jpeg";
import Cert5 from "../../Images/Teachers/Cer6.jpeg";
import Cert6 from "../../Images/Teachers/Cer1.jpeg";
import Cert7 from "../../Images/Teachers/Cert7.jpeg";

const TeacherCertifications = () => {
    const certificates = [Cert1, Cert2, Cert3, Cert4, Cert5, Cert6,Cert7];
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => setLightboxOpen(false);

    const nextImage = () =>
        setCurrentIndex((prev) => (prev + 1) % certificates.length);

    const prevImage = () =>
        setCurrentIndex((prev) =>
            prev === 0 ? certificates.length - 1 : prev - 1
        );

    return (
        <section className="tc-section">
            <h2 className="tc-section-title">
                <i className="pi pi-star-fill" /> Teacher Certifications & Awards
            </h2>


            <div className="tc-gallery">
                {certificates.map((cert, index) => (
                    <div
                        className="tc-gallery-item"
                        key={index}
                        onClick={() => openLightbox(index)}
                    >
                        <img src={cert} alt={`Certificate ${index + 1}`} />
                    </div>
                ))}
            </div>

            {lightboxOpen && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <span className="lightbox-close" onClick={closeLightbox}>
                        &times;
                    </span>
                    <span
                        className="lightbox-prev"
                        onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                        }}
                    >
                        &#10094;
                    </span>
                    <img
                        src={certificates[currentIndex]}
                        alt="Certificate Full View"
                        className="lightbox-img"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <span
                        className="lightbox-next"
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                        }}
                    >
                        &#10095;
                    </span>
                </div>
            )}
        </section>
    );
};

export default TeacherCertifications;
