import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div>
      <div className="hero__banner">
        <img
          src="https://i.ibb.co/M83dnBc/hero-image.jpg"
          class="hero__image"
          style={{
            zIndex: 1,
          }}
        />
      </div>
    </div>
  );
}

export default HeroSection;
