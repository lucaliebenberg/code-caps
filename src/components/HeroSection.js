import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div>
      <div className="hero__banner">
        <img
          src="https://i.ibb.co/vvMgTqB/banner-image2.jpg"
          class="hero__image"
          style={{
            zIndex: 1,
            opacity: "90%",
            objectFit: "fill",
            backgroundPosition: "center",
          }}
        />
      </div>
    </div>
  );
}

export default HeroSection;
