import React from "react";
import "../Pages/burger/burger.css";

const AdsSection = () => {
  return (
    <div className="container">
      <div className="grid">
        <div className="section">
          <h2 className="heading">PICK-UP FROM STORE</h2>
          <p className="subheading">Beat the queue & place the order online!</p>

          <div className="process">
            <div className="step">
              <div className="step-icon">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'/%3E%3C/svg%3E"
                  alt="Order Online"
                />
              </div>
              <span className="step-text">ORDER ONLINE</span>
            </div>
            <span className="arrow">→</span>
            <div className="step">
              <div className="step-icon">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'/%3E%3C/svg%3E"
                  alt="Select Pickup"
                />
              </div>
              <span className="step-text">SELECT PICKUP</span>
            </div>
            <span className="arrow">→</span>
            <div className="step">
              <div className="step-icon">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'/%3E%3C/svg%3E"
                  alt="Get Notified"
                />
              </div>
              <span className="step-text">GET NOTIFIED WHEN READY</span>
            </div>
          </div>

          <a href="#" className="btn">
            ORDER NOW →
          </a>
        </div>

        <div className="section">
          <h2 className="heading">FAVORITE ORDERS</h2>
          <p className="subheading">Order from your favorite list of items.</p>

          <div className="image-container">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-13%20235305-lk0m6EhHl2JbFsIfoSHFs2Vf8cMVJi.png"
              alt="KFC Chicken Bucket"
            />
          </div>

          <a href="#" className="btn">
            ORDER NOW →
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdsSection;
