import React from 'react';
import '../Pizaa/pizaa.css'
import superpizaa from '../../assets/sooperpizaa.webp'
import chickenSupreme from '../../assets/Chicken Supreme pizza.png'
import BlackTikkka from '../../assets/Black Pepper Tikka pizza.png'
const PizzaSooper = () => {
  return (
    <div className="pizza-sooper-container">
      <h1 className="pizza-sooper-heading">Somewhat Sooper</h1>
      <div className="pizza-sooper-grid">
        <div className="pizza-sooper-card">
          <span className="pizza-sooper-heart-icon">♡</span>
          <img
            src={ superpizaa}
            alt="Euro Pizza"
            className="pizza-sooper-image"
          />
          <h2 className="pizza-sooper-title">Euro</h2>
          <p className="pizza-sooper-description">
            A Delightful Combination Of Specially Marinated Smoked Chicken With Bell Pepper.
          </p>
          <div className="pizza-sooper-price-container">
            <span className="pizza-sooper-price">Rs. 690</span>
            <span className="pizza-sooper-starting-price">Starting Price</span>
          </div>
          <button className="pizza-sooper-add-to-cart">+ ADD TO CART</button>
        </div>

        <div className="pizza-sooper-card">
          <span className="pizza-sooper-heart-icon">♡</span>
          <img
            src={chickenSupreme}
            alt="Chicken Supreme Pizza"
            className="pizza-sooper-image"
          />
          <h2 className="pizza-sooper-title">Chicken Supreme</h2>
          <p className="pizza-sooper-description">
            A Combination Of 3 Flavors Of Chicken, Black Olives, Mushrooms, Bell Pepper.
          </p>
          <div className="pizza-sooper-price-container">
            <span className="pizza-sooper-price">Rs. 690</span>
            <span className="pizza-sooper-starting-price">Starting Price</span>
          </div>
          <button className="pizza-sooper-add-to-cart">+ ADD TO CART</button>
        </div>

        <div className="pizza-sooper-card">
          <span className="pizza-sooper-heart-icon">♡</span>
          <img
            src={BlackTikkka }
            alt="Black Pepper Tikka Pizza"
            className="pizza-sooper-image"
          />
          <h2 className="pizza-sooper-title">Black Pepper Tikka</h2>
          <p className="pizza-sooper-description">
            A Blend Of Marinated Black Pepper Chicken, Onion And Bell Pepper.
          </p>
          <div className="pizza-sooper-price-container">
            <span className="pizza-sooper-price">Rs. 690</span>
            <span className="pizza-sooper-starting-price">Starting Price</span>
          </div>
          <button className="pizza-sooper-add-to-cart">+ ADD TO CART</button>
        </div>
          <div className="pizza-sooper-card">
          <span className="pizza-sooper-heart-icon">♡</span>
          <img
            src={BlackTikkka }
            alt="Black Pepper Tikka Pizza"
            className="pizza-sooper-image"
          />
          <h2 className="pizza-sooper-title">Black Pepper Tikka</h2>
          <p className="pizza-sooper-description">
            A Blend Of Marinated Black Pepper Chicken, Onion And Bell Pepper.
          </p>
          <div className="pizza-sooper-price-container">
            <span className="pizza-sooper-price">Rs. 690</span>
            <span className="pizza-sooper-starting-price">Starting Price</span>
          </div>
          <button className="pizza-sooper-add-to-cart">+ ADD TO CART</button>
        </div>
        
      </div>
    </div>
  );
};

export default PizzaSooper;