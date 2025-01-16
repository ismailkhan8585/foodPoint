import React from "react";
import burgerRuber from '../../assets/Reggy Burger.png'
import CroncoChicken from '../../assets/Cronco Chicken Burger.png'
import CheeHaww from '../../assets/Chee Haww Chicken Burger.png'
import ReggyChicken from '../../assets/Reggy Chicken Burger.png'

const ChickenBurger = () => {
  return (
    <div className="chicken-burger-section">
      <h1 className="section-heading">Chicken Burgers</h1>
      <div className="menuGrid">
        <div className="menuItem">
          <div className="menuImage">
            <img src={burgerRuber} alt="Bronco Chicken Burger" />
          </div>
          <div className="menuContent">
            <h2 className="menuTitle">Bronco Chicken Burger</h2>
            <p className="menuDescription">
              Juicy Zinger, smothered in hot sauce, delivering a scorching hot
              and spicy kick with every bite.
            </p>
            <div className="menuFooter">
              <span className="price">Rs. 599</span>
              <button className="addToCart">ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="menuItem">
          <div className="menuImage">
            <img src={CroncoChicken} alt="Cronco Chicken Burger" />
          </div>
          <div className="menuContent">
            <h2 className="menuTitle">Cronco Chicken Burger</h2>
            <p className="menuDescription">
              Juicy Zinger, smothered in Buffalo sauce, offering a sweet &
              tangy flavor explosion in every mouthful.
            </p>
            <div className="menuFooter">
              <span className="price">Rs. 599</span>
              <button className="addToCart">ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="menuItem">
          <div className="menuImage">
            <img src={CheeHaww} alt="Chee Haww Chicken" />
          </div>
          <div className="menuContent">
            <h2 className="menuTitle">Chee Haww Chicken</h2>
            <p className="menuDescription">
              A spicy fusion of two grilled chicken fillets embracing a
              Jalapeño cheese core, topped with fiery sauce.
            </p>
            <div className="menuFooter">
              <span className="price">Rs. 899</span>
              <button className="addToCart">ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="menuItem">
          <div className="menuImage">
            <img src={ReggyChicken} alt="Reggy Chicken Burger" />
          </div>
          <div className="menuContent">
            <h2 className="menuTitle">Reggy Chicken Burger</h2>
            <p className="menuDescription">
              Our signature chicken fillet topped with crisp lettuce, fresh tomato,
              and creamy mayo for a classic taste.
            </p>
            <div className="menuFooter">
              <span className="price">Rs. 699</span>
              <button className="addToCart">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChickenBurger;

