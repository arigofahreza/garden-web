import React, { useState, useEffect, useRef } from "react";
import "./Carousel.css";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    desc: "A lush backyard garden with vibrant flowers and a cozy seating area."
  },
  {
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    desc: "Modern landscape design featuring stone paths and native plants."
  },
  {
    image: "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=800&q=80",
    desc: "A tranquil water feature surrounded by lush greenery."
  }
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const timeoutRef = useRef();

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleSlide((current + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [current]);

  function handleSlide(idx) {
    setTransitioning(true);
    timeoutRef.current = setTimeout(() => {
      setCurrent(idx);
      setTransitioning(false);
    }, 400);
  }

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  return (
    <div className="carousel">
      <h2 className="carousel-heading">Portfolio</h2>
      <div className="carousel-img-wrapper">
        <img
          src={slides[current].image}
          alt={`carousel slide ${current + 1}`}
          className={`carousel-img${transitioning ? ' carousel-img-transition' : ''}`}
        />
      </div>
      <div className="carousel-dots">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`carousel-dot${current === idx ? ' active' : ''}`}
            onClick={() => !transitioning && handleSlide(idx)}
          />
        ))}
      </div>
      <div className="carousel-desc">{slides[current].desc}</div>
    </div>
  );
}
