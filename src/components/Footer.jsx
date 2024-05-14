import React from 'react'
import iconLogo from './../assets/iconlogo.png'
function Footer() {
  const year = new Date().getFullYear()
  return (
    <>
      <footer className="footer" id='footer'>
        <div className="footer-content">
          <div className="footer-logo">
            <img src={iconLogo} alt="Logo" />
          </div>
          <nav className="footer-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Menu</a>
            <a href="#">Reservations</a>
            <a href="#">Testimonials</a>
            <a href="#">Gallery</a>
            <a href="#">Contact</a>
          </nav>
          &nbsp; &nbsp;
          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook fa-2x"></i></a>
            <a href="#"><i className="fab fa-twitter fa-2x"></i></a>
            <a href="#"><i className="fab fa-instagram fa-2x"></i></a>
          </div>
        </div>
        <p className="footer-text">© {year} Burger Hut. All rights reserved.</p>
      </footer>

    </>
  )
}

export default Footer
