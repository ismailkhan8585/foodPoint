import React from "react";
import KebabImage from "../../assets/kubab.jpg";
import Chapli from '../../assets/Chapli Kebab.png'
import Tandoori  from '../../assets/Tandoori Kebab.png'
import Malai  from '../../assets/Malai Kebab.png'
import Reshmi from '../../assets/Reshmi Kebab.png'
import "./kebab.css";

const MoreTypes = () => {
  return (
    <div className="chicken-burger-section">
      <div className="menuGrid">
        <div className="menuItem">
          <div className="menuImage">
            <img src={ Chapli} alt="Bronco Chicken Burger" />
          </div>
          <div className="menuContent">
            <h2 className="menuTitle">Chapli Kebab</h2>
            <p className="menuDescription">
              Grilled cubes of seasoned meat on skewers.
            </p>
            <div className="menuFooter">
              <span className="price">Rs. 200</span>
              <button className="addToCart">ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="menuItem">
          <div className="menuImage">
            <img src={Tandoori} alt="Cronco Chicken Burger" />
          </div>
          <div className="menuContent">
            <h2 className="menuTitle">Tandoori Kebab</h2>
            <p className="menuDescription">
              Thinly sliced seasoned meat cooked on a vertical rotisserie.
            </p>
            <div className="menuFooter">
              <span className="price">Rs. 300</span>
              <button className="addToCart">ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="menuItem">
          <div className="menuImage">
            <img src={Malai} alt="Chee Haww Chicken" />
          </div>
          <div className="menuContent">
            <h2 className="menuTitle">Malai Kebab</h2>
            <p className="menuDescription">
              Minced meat with spices, grilled on skewers
            </p>
            <div className="menuFooter">
              <span className="price">Rs. 400</span>
              <button className="addToCart">ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="menuItem">
          <div className="menuImage">
            <img src={Reshmi} alt="Reggy Chicken Burger" />
          </div>
          <div className="menuContent">
            <h2 className="menuTitle">Reshmi Kebab</h2>
            <p className="menuDescription">
              Ground meat with herbs and spices, shaped into patties or balls.
            </p>
            <div className="menuFooter">
              <span className="price">Rs. 500</span>
              <button className="addToCart">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreTypes;
