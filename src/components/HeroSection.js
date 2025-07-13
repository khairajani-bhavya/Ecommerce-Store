import React from "react";

const HeroSection = () => {
  const scrollToProducts = () => {
    const section = document.getElementById("products-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-container">
      <div className="hero-overlay">
        <h2>Welcome to Ecommerce</h2>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <button className="scroll-btn" onClick={scrollToProducts}>
          Scroll ⌄
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
