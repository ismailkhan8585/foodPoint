import React from "react";
import PizaaImage from "../assets/pizza44.png";
import "../Pages/Pizaa/pizaa.css";

const Hero2 = () => {
  return (
    <section className="pizza-hero">
      <div className="pizza-hero-content">
        <h1 className="pizza-hero-title">Savor the Taste of Authentic Pizza</h1>
        <p className="pizza-hero-subtitle">
          Crafted with fresh ingredients and bursting with flavor, our pizzas are sure to delight.
        </p>
        <a href="#menu" className="pizza-cta-button">
          Explore Our Menu
        </a>
      </div>
      <img
        src={PizaaImage}
        alt="Delicious Pizza"
        className="pizza-hero-image"
      />
    </section>
  );
};

export default Hero2;


