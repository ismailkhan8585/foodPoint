import React from 'react'
import aboutImage from './../assets/about-image.jpg'
function HomeComponent() {
  return (
    <>
      <div>
        <section className="hero" id='hero'>
          <div className="hero-content">
            <h1>Welcome to Burger Hut</h1>
            <p>Experience the Taste of Perfection</p>
            <a href="#menu" className="btn">Explore Our Menu</a>
          </div>
        </section>
        <section className="about dark-theme">
          <div className="about-content">
            <h2>About Burger Hut</h2>
            <p>Experience the finest gourmet burgers in a cozy and rustic atmosphere. At Berger Hut, we are dedicated to
              delivering exceptional flavors that will tantalize your taste buds.</p>
            <p>Our chefs meticulously craft each burger using locally sourced ingredients and unique flavor combinations. From
              juicy beef patties to mouthwatering vegetarian options, there's something for everyone.</p>
            <a href="#menu" className="btn">Explore Our Menu</a>
          </div>
          <div className="about-image">
            <img src={aboutImage} alt="About Image" />
          </div>
        </section>
      </div>


    </>
  )
}

export default HomeComponent
