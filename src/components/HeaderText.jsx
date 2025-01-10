import React from "react";
import aboutImage from "./../assets/pizza22.jpg";
function HeaderText() {
  return (
    <>
      <div>
        <section className="hero" id="hero">
          <div className="hero-content">
            <h1>Welcome to Pizza point</h1>
            <p>Experience the Taste of Perfection</p>
            <a href="#menu" className="btn">
              Explore Our Menu
            </a>
          </div>
        </section>
        <section className="about dark-theme">
          <div className="about-content">
            <h2>About Pizza point</h2>
            <p>
              Experience the finest gourmet burgers in a cozy and rustic
              atmosphere. At pizza point, we are dedicated to delivering
              exceptional flavors that will tantalize your taste buds.
            </p>
            <p>
              Our chefs meticulously craft each pizza using locally sourced
              ingredients and unique flavor combinations. From juicy beef
              patties to mouthwatering vegetarian options, there's something for
              everyone.
            </p>
            <a href="#menu" className="btn">
              Explore Our Menu
            </a>
          </div>
          <div className="about-image">
            <img src={aboutImage} alt="About Image" />
          </div>
        </section>
      </div>
    </>
  );
}

export default HeaderText;
