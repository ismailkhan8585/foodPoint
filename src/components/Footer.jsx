import React from "react";
import YoutubrIcon from "../assets/youtube.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import play from "../assets/play.png";
import app from "../assets/app.png";
import burger from "../assets/iconlogo.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={burger} alt="KFC Logo" />
          </div>

          <div className="social-icons">
            <a href="#" className="social-icon">
              <img src={YoutubrIcon} alt="YouTube" />
            </a>
            <a href="#" className="social-icon">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="#" className="social-icon">
              <img src={facebook} alt="Facebook" />
            </a>
          </div>

          <div className="footer-links">
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

          <div className="app-buttons">
            <a href="#">
              <img src={play} alt="Download on App Store" />
            </a>
            <a href="#">
              <img src={app} alt="Get it on Google Play" />
            </a>
          </div>

          <div className="footer-bottom">
            <div>2025 Food Point. All rights reserved</div>
            <div className="powered-by">
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
    </>
  );
}

export default Footer;
