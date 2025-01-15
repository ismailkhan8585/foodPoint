import React from "react";


function Hero({ title, subtitle, buttonText, buttonLink, aboutTitle, aboutText1, aboutText2, aboutImage }) {
  return (
    <div>
      <section className="hero" id="hero">
        <div className="hero-content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <a href={buttonLink} className="btn">
            {buttonText}
          </a>
        </div>
      </section>
      <section className="about dark-theme">
        <div className="about-content">
          <h2>{aboutTitle}</h2>
          <p>{aboutText1}</p>
          <p>{aboutText2}</p>
          <a href={buttonLink} className="btn">
            {buttonText}
          </a>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="About" />
        </div>
      </section>
    </div>
  );
}

export default Hero;

