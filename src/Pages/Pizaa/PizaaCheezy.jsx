import React, { useState } from 'react';
import '../kebab/kebab.css'
import pizaacheese from '../../assets/pizaacheese.png';
import { FaHeart } from "react-icons/fa";

const pizzaData = [
  {
    id: 1,
    name: 'Cheezious Special',
    description: 'Delicious Special Chicken With Black Olives, Sausages And Bell Pepper.',
    price: 'Rs. 1,550',
    image: pizaacheese,
  },
  {
    id: 2,
    name: 'Behari Kebab',
    description: 'Enjoy Special Chicken Behari Kabab, Grilled Chicken With Onion Jalapenos And Gin...',
    price: 'Rs. 1,550',
    image: pizaacheese,
  },
  {
    id: 3,
    name: 'Chicken Extreme',
    description: 'Combination Of 3 Flavors Of Chicken With Onion Bell Pepper, Green Olives, Mushro...',
    price: 'Rs. 1,550',
    image: pizaacheese,
  },
  {
    id: 4,
    name: 'Chicken Extreme',
    description: 'Combination Of 3 Flavors Of Chicken With Onion Bell Pepper, Green Olives, Mushro...',
    price: 'Rs. 1,550',
    image: pizaacheese,
  },
];

const PizzaCheezy = () => {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (itemId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [itemId]: !prevFavorites[itemId],
    }));
  };

  return (
    <div className="chicken-burger-section">
      <h1 className="section-heading">Cheezy Treats</h1>
      <div className="menuGrid">
        {pizzaData.map((kebab) => (
          <div className="menuItem" key={kebab.id}>
            <div className="menuImage">
              <img src={kebab.image} alt={kebab.name} />
              <FaHeart
                className={`heart-iconddd ${favorites[kebab.id] ? "active" : ""}`}
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

export default PizzaCheezy;


