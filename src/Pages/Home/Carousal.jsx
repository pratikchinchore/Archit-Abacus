import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import First from '../../Images/CarousalImages/1.jpg';
import Second from '../../Images/CarousalImages/2.jpg';
import Third from '../../Images/CarousalImages/3.jpg';
import Fourth from '../../Images/CarousalImages/4.jpg';
import './Home.css'

const Carousal = () => {
    return (
        <Carousel>
            <Carousel.Item interval={3000}>
                <div className="carousel-image-wrapper">
                    <img
                        className="d-block w-100 carousel-image"
                        src={First}
                        alt="First slide"
                    />
                    <div className="carousel-overlay">TEST</div>
                </div>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
                <div className="carousel-image-wrapper">
                    <img
                        className="d-block w-100 carousel-image"
                        src={Second}
                        alt="Second slide"
                    />
                    <div className="carousel-overlay"></div>
                </div>

            </Carousel.Item>

            <Carousel.Item interval={3000}>
                <div className="carousel-image-wrapper">
                    <img
                        className="d-block w-100 carousel-image"
                        src={Third}
                        alt="Third slide"
                    />
                    <div className="carousel-overlay"></div>
                </div>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
                <div className="carousel-image-wrapper">
                    <img
                        className="d-block w-100 carousel-image"
                        src={Fourth}
                        alt="Fourth slide"
                    />
                    <div className="carousel-overlay"></div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default Carousal;
