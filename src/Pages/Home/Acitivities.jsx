import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Activities.css";
import FirstThumbnail from "../../Videos/thumbnail/firstthumbnail.png";
import SecondThumbnail from "../../Videos/thumbnail/secondthumnnail.jpeg";
import firstVideo from "../../Videos/first.mp4";
import secondVideo from "../../Videos/second.mp4";

const Activities = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");

  const videos = [
    { id: 1, thumbnail: FirstThumbnail, videoUrl: firstVideo },
    { id: 2, thumbnail: SecondThumbnail, videoUrl: secondVideo },
    { id: 3, thumbnail: FirstThumbnail, videoUrl: firstVideo },
    { id: 4, thumbnail: SecondThumbnail, videoUrl: secondVideo },
    { id: 5, thumbnail: FirstThumbnail, videoUrl: firstVideo },
    { id: 6, thumbnail: SecondThumbnail, videoUrl: secondVideo },
  ];

  const handleThumbnailClick = (videoUrl) => {
    setActiveVideo(videoUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setActiveVideo("");
  };

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 992 }, items: 3 },
    tablet: { breakpoint: { max: 991, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 767, min: 0 }, items: 1 },
  };

  return (
    <div className="container my-5 activities-container">
      <h2 className="mb-4 text-center section-title">Our Activities</h2>

      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3500}
        showDots
        arrows={false}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {videos.map((vid) => (
          <div
            key={vid.id}
            className="video-card animated-card"
            onClick={() => handleThumbnailClick(vid.videoUrl)}
          >
            <div className="video-thumbnail-wrapper tilt-hover">
              <img src={vid.thumbnail} alt="Video Thumbnail" />
              <div className="play-icon-overlay pulse">
                <span>▶</span>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered className="contentpadding">
        <Modal.Body className="p-0 contentpadding">
          {activeVideo && (
            <video controls autoPlay className="w-100 contentpadding">
              <source src={activeVideo} type="video/mp4" />
            </video>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Activities;
