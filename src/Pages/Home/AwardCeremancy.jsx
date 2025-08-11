import React from "react";
import Slider from "react-slick";
import { FaAward } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AwardCeremancy.css";

import First from '../../Images/AwardFunction/res_img_1.jpeg';
import Second from '../../Images/AwardFunction/res_img_2.jpeg';
import Third from '../../Images/AwardFunction/res_img_3.jpeg';
import Fourth from '../../Images/AwardFunction/res_img_4.jpeg';
import Fifth from '../../Images/AwardFunction/res_img_5.jpeg';
import Sixth from '../../Images/AwardFunction/res_img_6.jpeg';

const AwardCeremancy = () => {
    const images = [First, Second, Third, Fourth, Fifth, Sixth];

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // Tablet & below
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 768, // Mobile
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <section className="award-section">
            <div className="award-header">
                <h2 className="award-title"><FaAward className="award-icon" />Annual Award Ceremony</h2>
            </div>

            <div className="award-carousel">
                <Slider {...settings}>
                    {images.map((src, index) => (
                        <div key={index} className="award-carousel-item">
                            <img src={src} alt={`Award ${index}`} />
                        </div>
                    ))}
                </Slider>
            </div>

        </section>
    );
};

export default AwardCeremancy;
