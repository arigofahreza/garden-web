import React, { useState } from "react";
import "./Carousel.css";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=800&q=80"
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="carousel">
      <h2 className="carousel-heading">Portfolio</h2>
      <div className="carousel-img-wrapper">
        <button className="carousel-btn left" onClick={prevSlide}>&lt;</button>
        <img src={images[current]} alt="carousel slide" className="carousel-img" />
        <button className="carousel-btn right" onClick={nextSlide}>&gt;</button>
      </div>
      <div className="carousel-desc">A showcase of our latest garden projects and designs.</div>
    </div>
  );
}
