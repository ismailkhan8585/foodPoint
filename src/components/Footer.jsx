import React from "react";
// import iconLogo from './../assets/iconlogo.png'
import YoutubrIcon from "../assets/youtube.png"
import instagram from "../assets/instagram.png"
import facebook from "../assets/facebook.png"
import play from "../assets/play.png"
import app from "../assets/app.png"
import burger from "../assets/iconlogo.png"
function Footer() {
  // const year = new Date().getFullYear()
  return (
    <>
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-logo">
            <img
             src={burger}
              alt="KFC Logo"
            />
          </div>

          <div class="social-icons">
            <a href="#" class="social-icon">
              <img src={YoutubrIcon} alt="YouTube"  />
            </a>
            <a href="#" class="social-icon">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="#" class="social-icon">
              <img src={facebook} alt="Facebook" />
            </a>
          </div>

          <div class="footer-links">
            <div>
              <a href="#">About Us</a>
              <a href="#">Mitao Bhook</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Careers</a>
            </div>
            <div>
              <a href="#">Contact Us</a>
              <a href="#">Store Locator</a>
              <a href="#">Track Order</a>
            </div>
            <div>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>

          <div class="app-buttons">
            <a href="#">
              <img src={play} alt="Download on App Store" />
            </a>
            <a href="#">
              <img src={app} alt="Get it on Google Play" />
            </a>
          </div>

          <div class="footer-bottom">
            <div>2025 Food Point. All rights reserved</div>
            <div class="powered-by">
              <span>Powered by</span>
              <a
                href="#"
                style={{ color: "white", textDecoration: "underline" }}
              >
                Techcreator
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* <footer className="footer" id='footer'>
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
      </footer> */}
    </>
  );
}

export default Footer;
