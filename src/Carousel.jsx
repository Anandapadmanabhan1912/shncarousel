import React, { useState, useEffect } from "react";
import "./Carousel.css"; // We'll define some CSS for styling

const images = [
  "static/group42.png",
  "static/group42.png",
  "static/group42.png",
  "static/group42.png",
  "static/group42.png",
  //"static/group42.png",
  //"static/group42.png",
  // Add more image URLs as needed
];
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const getClassName = (index) => {
    if (index === currentIndex) {
      return "carousel-image center";
    } else if (index === (currentIndex + 1) % images.length) {
      return "carousel-image center-left";
    } else if (index === (currentIndex - 1 + images.length) % images.length) {
      return "carousel-image left";
    } else if (index === (currentIndex + 2) % images.length) {
      return "carousel-image shadow-right";
    } else if (index === (currentIndex - 2 + images.length) % images.length) {
      return "carousel-image shadow-left";
    }
    return "carousel-image";
  };

  return (
    <div className="carousel">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Carousel ${index}`}
          className={getClassName(index)}
        />
      ))}
    </div>
  );
};

export default Carousel;
