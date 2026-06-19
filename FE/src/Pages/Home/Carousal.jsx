import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import FirstDesktop from '../../Images/CarousalImages/desktop/1.jpg';
import FirstMobile from '../../Images/CarousalImages/mobile/1.jpg';

import SecondDesktop from '../../Images/CarousalImages/desktop/2.jpg';
import SecondMobile from '../../Images/CarousalImages/mobile/2.jpg';

const Carousal = () => {
    return (
        <Carousel>
            <Carousel.Item interval={3000}>
                <picture>
                    <source
                        media="(max-width: 768px)"
                        srcSet={FirstMobile}
                    />
                    <img
                        className="d-block w-100 carousel-image"
                        src={FirstDesktop}
                        alt="First slide"
                    />
                </picture>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
                <picture>
                    <source
                        media="(max-width: 768px)"
                        srcSet={SecondMobile}
                    />
                    <img
                        className="d-block w-100 carousel-image"
                        src={SecondDesktop}
                        alt="Second slide"
                    />
                </picture>
            </Carousel.Item>
        </Carousel>
    );
};

export default Carousal;