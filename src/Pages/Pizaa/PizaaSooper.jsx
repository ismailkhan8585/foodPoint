import React, { useState } from "react";
import "../Pizaa/pizaa.css";
import superpizaa from "../../assets/sooperpizaa.webp";
import chickenSupreme from "../../assets/Chicken Supreme pizza.png";
import BlackTikkka from "../../assets/Black Pepper Tikka pizza.png";
import { FaHeart } from "react-icons/fa";
import '../kebab/kebab.css'
const PizzaSooper = () => {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (item) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [item]: !prevFavorites[item],
    }));
  };
  const kebabs = [
    {
      id: 1,
      name: "Chicken Tikka",
      description:
        "Extreme Quantity Of Chicken And Onion With Rich Mozzarella Cheese.",
      price: "Rs. 1000",
      image: superpizaa,
    },
    {
      id: 2,
      name: "Chicken Fajita",
      description:
        "An Authentic Taste Of Fajita Marinated Chicken, Onion And Bell Peppers.",
      price: "Rs. 2000",
      image: chickenSupreme,
    },
    {
      id: 3,
      name: "Chicken Lover",
      description:
        "Extreme Quantity Of Chicken And Onion With Rich Mozzarella Cheese..",
      price: "Rs. 3000",
      image: BlackTikkka,
    },
    {
      id: 4,
      name: "Chicken Lover",
      description:
        "Extreme Quantity Of Chicken And Onion With Rich Mozzarella Cheese.",
      price: "Rs. 4000",
      image: BlackTikkka,
    },
  ];
  return (
    <div className="chicken-burger-section">
      <h1 className="section-heading">Somewhat Sooper</h1>
      <div className="menuGrid">
        {kebabs.map((kebab) => (
          <div className="menuItem" key={kebab.id}>
            <div className="menuImage">
              <img src={kebab.image} alt={kebab.name} />
              <FaHeart
                className={`heart-iconddd ${
                  favorites[kebab.id] ? "active" : ""
                }`}
                onClick={() => toggleFavorite(kebab.id)}
              />
            </div>
            <div className="menuContent">
              <h2 className="menuTitle">{kebab.name}</h2>
              <p className="menuDescription">{kebab.description}</p>
              <div className="menuFooter">
                <span className="price">{kebab.price}</span>
                <button className="addToCart">ADD TO CART</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PizzaSooper;
