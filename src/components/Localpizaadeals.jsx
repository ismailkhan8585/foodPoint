import React from 'react';
import '../Pages/Pizaa/pizaa.css';
import pizzaa from '../assets/Localpizaa.webp';
import ChickenFajita from '../assets/Pizza Chicken Fajita.png'
import ChickenLover from '../assets/Chicken Lover pizza image.png' 

const Localpizaadeals = () => {
  return (
    <section id='menu'>
      <div className="container">
      <h1>Somewhat Local</h1>
      <div className="products-grid">
        
        <div className="product-card">
          <button className="favorite-btn" aria-label="Add to favorites">
            <svg className="heart-icon" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
          <img src={pizzaa} alt="Chicken Tikka Pizza" className="product-image" />
          <h2 className="product-title">Chicken Tikka</h2>
          <p className="product-description">Tender Chunks Of Marinated Grilled Chicken With Savory Onion.</p>
          <div className="price-container">
            <span className="price">Rs. 690</span>
            <span className="price-label">Starting Price</span>
          </div>
          <button className="add-to-cart">+ ADD TO CART</button>
        </div>

        <div className="product-card">
          <button className="favorite-btn" aria-label="Add to favorites">
            <svg className="heart-icon" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
          <img src={ChickenFajita} alt="Chicken Fajita Pizza" className="product-image" />
          <h2 className="product-title">Chicken Fajita</h2>
          <p className="product-description">An Authentic Taste Of Fajita Marinated Chicken, Onion And Bell Peppers.</p>
          <div className="price-container">
            <span className="price">Rs. 690</span>
            <span className="price-label">Starting Price</span>
          </div>
          <button className="add-to-cart">+ ADD TO CART</button>
        </div>

        <div className="product-card">
          <button className="favorite-btn" aria-label="Add to favorites">
            <svg className="heart-icon" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
          <img src={ChickenLover} alt="Chicken Lover Pizza" className="product-image" />
          <h2 className="product-title">Chicken Lover</h2>
          <p className="product-description">Extreme Quantity Of Chicken And Onion With Rich Mozzarella Cheese.</p>
          <div className="price-container">
            <span className="price">Rs. 690</span>
            <span className="price-label">Starting Price</span>
          </div>
          <button className="add-to-cart">+ ADD TO CART</button>
        </div>
        <div className="product-card">
          <button className="favorite-btn" aria-label="Add to favorites">
            <svg className="heart-icon" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
          <img src={ChickenLover} alt="Chicken Lover Pizza" className="product-image" />
          <h2 className="product-title">Chicken Lover</h2>
          <p className="product-description">Extreme Quantity Of Chicken And Onion With Rich Mozzarella Cheese.</p>
          <div className="price-container">
            <span className="price">Rs. 690</span>
            <span className="price-label">Starting Price</span>
          </div>
          <button className="add-to-cart">+ ADD TO CART</button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Localpizaadeals;
