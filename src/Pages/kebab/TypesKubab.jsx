import React from "react";
import "./kebab.css";
import kebabImage from "../../assets/kubaab.webp";
import Shish from '../../assets/Shish Kebab.png'
import Doner from '../../assets/Doner Kebab Image.png'
import Seekh from '../../assets/Seekh Kebab.png'
import Kofta from '../../assets/Kofta Kebab.png'
const TypesKubab = () => {
  return (
    <div className="chicken-burger-section">
      <h1 className="section-heading">Types of Kebabs</h1>
      <div className="menuGrid">
        <div className="menuItem">
          <div className="menuImage">
            <img src={Shish} alt="Bronco Chicken Burger" />
          </div>
          <div className="menuContent">
            <h2 className="menuTitle">Shish Kebab</h2>
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
            <img src={Doner} alt="Cronco Chicken Burger" />
          </div>
          <div className="menuContent">
            <h2 className="menuTitle">Doner Kebab</h2>
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
            <img src={Seekh} alt="Chee Haww Chicken" />
          </div>
          <div className="menuContent">
            <h2 className="menuTitle">Seekh Kebab</h2>
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
            <img src={Kofta} alt="Reggy Chicken Burger" />
          </div>
          <div className="menuContent">
            <h2 className="menuTitle">Kofta Kebab</h2>
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

export default TypesKubab;
