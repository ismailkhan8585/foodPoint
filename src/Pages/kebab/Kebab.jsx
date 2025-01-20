import React from "react";
import "./kebab.css";
import KebabImage from "../../assets/kubab.jpg";
import TypesKubab from "./TypesKubab";
import MoreTypes from "./MoreTypes";
import doner from '../../assets/Doner Kebab Image.png'
// import FlameIcon from "../../assets/flame-icon.svg";

const Kebab = () => {
  return (
    <>
    <section className="kebab-hero">
      <div className="kebab-hero-content">
        <div className="kebab-hero-text">
          <h1 className="kebab-hero-title">The Finest Kebabs Await</h1>
          <p className="kebab-hero-subtitle">Indulge in Authentic Flavors</p>
          <a href="#explore" className="kebab-cta-button">Explore Kebabs</a>
          <div className="kebab-stats">
            <div className="stat-item">
              <img src={KebabImage} alt="Freshly Grilled" className="stat-icon" />
              <p>100% Freshly Grilled</p>
            </div>
            <div className="stat-item">
              <img src={KebabImage} alt="Varieties Available" className="stat-icon" />
              <p>50+ Kebab Varieties</p>
            </div>
            <div className="stat-item">
              <img src={KebabImage} alt="Traditional Recipes" className="stat-icon" />
              <p>Authentic Recipes</p>
            </div>
          </div>
        </div>
        <div className="kebab-hero-image">
          <img src={KebabImage} alt="Delicious Kebab" className="kebab-burger-img" />
        </div>
      </div>
      <div className="kebab-overlay"></div>
    </section>
    <TypesKubab/>
    <MoreTypes/>
    </>
    
  );
};

export default Kebab;

{/* <Hero
title="The Finest Kebabs Await"
subtitle="Indulge in Authentic Flavors"
buttonText="Explore Kebabs"
buttonLink="#kebab-menu"
aboutTitle="Why Kebab Corner?"
aboutText1="Experience perfectly grilled, flavorful kebabs crafted with care and tradition."
aboutText2="From tender tandoori to mouthwatering shawarma, enjoy the best in every bite."
aboutImage={KebabImage}
/> */}