import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Activities.css'; // Custom styles

const Activities = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState('');

  const videos = [
    {
      id: 1,
      thumbnail: 'https://img.youtube.com/vi/tgbNymZ7vqY/0.jpg',
      videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    },
    {
      id: 2,
      thumbnail: 'https://img.youtube.com/vi/sBws8MSXN7A/0.jpg',
      videoUrl: 'https://www.youtube.com/embed/sBws8MSXN7A',
    },
    {
      id: 3,
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 4,
      thumbnail: 'https://img.youtube.com/vi/ScMzIvxBSi4/0.jpg',
      videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4',
    },
    {
      id: 5,
      thumbnail: 'https://img.youtube.com/vi/XGSy3_Czz8k/0.jpg',
      videoUrl: 'https://www.youtube.com/embed/XGSy3_Czz8k',
    },
    {
      id: 6,
      thumbnail: 'https://img.youtube.com/vi/eX2qFMC8cFo/0.jpg',
      videoUrl: 'https://www.youtube.com/embed/eX2qFMC8cFo',
    },
  ];

  const handleThumbnailClick = (videoUrl) => {
    setActiveVideo(videoUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setActiveVideo('');
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 991, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Our Activities</h2>

      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        showDots
        arrows={false}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {videos.map((vid) => (
          <div
            key={vid.id}
            className="video-card"
            onClick={() => handleThumbnailClick(vid.videoUrl)}
          >
            <div className="video-thumbnail">
              <img src={vid.thumbnail} alt="Video Thumbnail" className="img-fluid" />
              <div className="play-icon-overlay">▶</div>
            </div>
          </div>
        ))}
      </Carousel>

      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Body className="p-0">
          {activeVideo && (
            <div className="ratio ratio-16x9">
              <iframe
                src={`${activeVideo}?autoplay=1`}
                title="Activity Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Activities;
