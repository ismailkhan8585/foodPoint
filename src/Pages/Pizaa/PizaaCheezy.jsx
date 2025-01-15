import React from 'react'
import '../Pizaa/pizaa.css'
import pizaacheese from '../../assets/pizaacheese.png'

const PizzaCheezy = () => {
  return (
    <div className="pizza-container">
      <h1 className="cheesy-title">Cheezy Treats</h1>
      <div className="pizza-item-grid">
        
        <div className="pizza-item-card">
            <span className="favorite-heart-icon">♡</span>
            <img src={pizaacheese} alt="Cheezious Special Pizza" className="pizza-img"/>
            <h2 className="pizza-name">Cheezious Special</h2>
            <p className="pizza-details">Delicious Special Chicken With Black Olives, Sausages And Bell Pepper.</p>
            <div className="price-wrapper">
                <span className="pizza-price">Rs. 1,550</span>
                <span className="starting-price-label">Starting Price</span>
            </div>
            <button className="add-to-cart-btn">+ ADD TO CART</button>
        </div>

        <div className="pizza-item-card">
            <span className="favorite-heart-icon">♡</span>
            <img src={pizaacheese} alt="Behari Kebab Pizza" className="pizza-img"/>
            <h2 className="pizza-name">Behari Kebab</h2>
            <p className="pizza-details">Enjoy Special Chicken Behari Kabab, Grilled Chicken With Onion Jalapenos And Gin...</p>
            <div className="price-wrapper">
                <span className="pizza-price">Rs. 1,550</span>
                <span className="starting-price-label">Starting Price</span>
            </div>
            <button className="add-to-cart-btn">+ ADD TO CART</button>
        </div>

        <div className="pizza-item-card">
            <span className="favorite-heart-icon">♡</span>
            <img src={pizaacheese} alt="Chicken Extreme Pizza" className="pizza-img"/>
            <h2 className="pizza-name">Chicken Extreme</h2>
            <p className="pizza-details">Combination Of 3 Flavors Of Chicken With Onion Bell Pepper, Green Olives, Mushro...</p>
            <div className="price-wrapper">
                <span className="pizza-price">Rs. 1,550</span>
                <span className="starting-price-label">Starting Price</span>
            </div>
            <button className="add-to-cart-btn">+ ADD TO CART</button>
        </div>
        <div className="pizza-item-card">
            <span className="favorite-heart-icon">♡</span>
            <img src={pizaacheese} alt="Chicken Extreme Pizza" className="pizza-img"/>
            <h2 className="pizza-name">Chicken Extreme</h2>
            <p className="pizza-details">Combination Of 3 Flavors Of Chicken With Onion Bell Pepper, Green Olives, Mushro...</p>
            <div className="price-wrapper">
                <span className="pizza-price">Rs. 1,550</span>
                <span className="starting-price-label">Starting Price</span>
            </div>
            <button className="add-to-cart-btn">+ ADD TO CART</button>
        </div>
      </div>
    </div>
  )
}

export default PizzaCheezy

