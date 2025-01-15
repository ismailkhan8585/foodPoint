import React from 'react'
import '../Pages/Pizaa/pizaa.css'
import PizaaImage from '../assets/pizza22.jpg'

const About2 = () => {
  return (
    <section className="about-section">
    <div className="about-content">
        <h2 className="about-title">About Our Restaurant</h2>
        <p className="about-text">Our restaurant offers a wide variety of delicious dishes made with fresh, locally sourced ingredients.</p>
        <p className="about-text">Whether you're craving pizza, burgers, or gourmet specialties, we have something to satisfy every appetite.</p>
        <a href="#menu" class="cta-button">Browse Our Menu</a>
    </div>
    <div class="about-image">
        <img src={PizaaImage} alt="Delicious Pizza with Stretchy Cheese"/>
    </div>
</section>
  )
}

export default About2
