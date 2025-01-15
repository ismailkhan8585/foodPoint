import React from 'react';
import '../Pizaa/pizaa.css'
import pizaadeals from '../../assets/PizaaDels.jpg'

const PizzaDeals = () => {
  return (
    <div className="pizza-container">
      <h1 className="pizza-heading">Pizza Deals</h1>
      <div className="pizza-deals-container">
        <div className="pizza-deal-card">
          <span className="pizza-heart-icon">♡</span>
          <img
            src={ pizaadeals}
            alt="Small Pizza Deal"
            className="pizza-deal-image"
          />
          <h2 className="pizza-deal-title">Small Pizza Deal</h2>
          <p className="pizza-deal-description">
            Any Flavor From Local Love Or Over The Sea Flavor Category & 1 Soft Drink.
          </p>
          <div className="pizza-price-container">
            <span className="pizza-price">Rs. 750</span>
            <span className="pizza-starting-price">Starting Price</span>
          </div>
          <button className="pizza-add-to-cart">Add to Cart</button>
        </div>

        <div className="pizza-deal-card">
          <span className="pizza-heart-icon">♡</span>
          <img
            src={ pizaadeals}
            alt="Regular Pizza Deal"
            className="pizza-deal-image"
          />
          <h2 className="pizza-deal-title">Regular Pizza Deal</h2>
          <p className="pizza-deal-description">1 Regular Pizza And 2 Regular Drinks.</p>
          <div className="pizza-price-container">
            <span className="pizza-price">Rs. 1,450</span>
            <span className="pizza-starting-price">Starting Price</span>
          </div>
          <button className="pizza-add-to-cart">Add to Cart</button>
        </div>

        <div className="pizza-deal-card">
          <span className="pizza-heart-icon">♡</span>
          <img
            src= {pizaadeals}
            alt="Large Pizza Deal"
            className="pizza-deal-image"
          />
          <h2 className="pizza-deal-title">Large Pizza Deal</h2>
          <p className="pizza-deal-description">
            Any Flavor From Local Love Or Over The Sea Flavor Category & 1 Liter Drink.
          </p>
          <div className="pizza-price-container">
            <span className="pizza-price">Rs. 1,990</span>
            <span className="pizza-starting-price">Starting Price</span>
          </div>
          <button className="pizza-add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default PizzaDeals;

