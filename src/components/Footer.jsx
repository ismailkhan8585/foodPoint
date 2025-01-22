import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import Payment from "../assets/Payment.102d5cc02434b289f7bd.png";
import websiteLogo from "../assets/Tclogo1.webp";
import download from "../assets/download.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="features">
        <Link to="https://www.techcreator.co/" target="_blank">
          <img src={websiteLogo} className="websitelogo" alt="Website Logo" />
        </Link>

        <div className="feature">
          <img src={download} alt="" className="feature-icon" />
          <div className="feature-text">
            <h3>Best Prices & Deals</h3>
            <p>Don't miss our daily amazing deals and prices</p>
          </div>
        </div>
        <div className="feature">
          <img src={download} alt="" className="feature-icon" />
          <div className="feature-text">
            <h3>Refundable</h3>
            <p>If your items have damage, we agree to refund it</p>
          </div>
        </div>
        <div className="feature">
          <img src={download} alt="" className="feature-icon" />
          <div className="feature-text">
            <h3>Free delivery</h3>
            <p>Purchase over €50 and get free delivery anywhere</p>
          </div>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-column contact-info">
          <div className="contact-item">
            <FaMapMarkerAlt />
            <p>Address: 1762 School House Road</p>
          </div>
          <div className="contact-item">
            <FaPhone />
            <p>Call Us: 1233-777</p>
          </div>
          <div className="contact-item">
            <FaEnvelope />
            <p>Email: FoodPoint@contact.com</p>
          </div>
          <div className="contact-item">
            <FaClock />
            <p>Work hours: 8:00 - 20:00</p>
          </div>
        </div>

        <div className="footer-column">
          <h2>Account</h2>
          <ul>
            <li>
              <a href="#">Wishlist</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Shipping Details</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h2>Links</h2>
          <div className="social-links">
            <a href="#">
              <AiFillInstagram />
              Instagram
            </a>
            <a href="#">
              <AiFillFacebook />
              Facebook
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h2>Help Center</h2>
          <ul>
            <li>
              <a href="#">Payments</a>
            </li>
            <li>
              <a href="#">Refund</a>
            </li>
            <li>
              <a href="#">Q&A</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="payment-methods">
        <img src={Payment} />
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";
// import YoutubrIcon from "../assets/youtube.png";
// import instagram from "../assets/instagram.png";
// import facebook from "../assets/facebook.png";
// import play from "../assets/play.png";
// import app from "../assets/app.png";
// import burger from "../assets/iconlogo.png";

// function Footer() {
//   return (
//     <>
//       <footer className="footer">
//         <div className="footer-content">
//           <div className="footer-logo">
//             <img src={burger} alt="KFC Logo" />
//           </div>

//           <div className="social-icons">
//             <a href="#" className="social-icon">
//               <img src={YoutubrIcon} alt="YouTube" />
//             </a>
//             <a href="#" className="social-icon">
//               <img src={instagram} alt="Instagram" />
//             </a>
//             <a href="#" className="social-icon">
//               <img src={facebook} alt="Facebook" />
//             </a>
//           </div>

//           <div className="footer-links">
//             <div>
//               <a href="#">About Us</a>
//               <a href="#">Mitao Bhook</a>
//               <a href="#">Privacy Policy</a>
//               <a href="#">Careers</a>
//             </div>
//             <div>
//               <a href="#">Contact Us</a>
//               <a href="#">Store Locator</a>
//               <a href="#">Track Order</a>
//             </div>
//             <div>
//               <a href="#">Terms & Conditions</a>
//             </div>
//           </div>

//           <div className="app-buttons">
//             <a href="#">
//               <img src={play} alt="Download on App Store" />
//             </a>
//             <a href="#">
//               <img src={app} alt="Get it on Google Play" />
//             </a>
//           </div>

//           <div className="footer-bottom">
//             <div>2025 Food Point. All rights reserved</div>
//             <div className="powered-by">
//               <span>Powered by</span>
//               <a
//                 href="#"
//                 style={{ color: "white", textDecoration: "underline" }}
//               >
//                 Techcreator
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }

// export default Footer;
