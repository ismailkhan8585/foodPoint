import React, { useState } from "react";
import Chapli from '../../assets/Chapli Kebab.png';
import Tandoori from '../../assets/Tandoori Kebab.png';
import Malai from '../../assets/Malai Kebab.png';
import Reshmi from '../../assets/Reshmi Kebab.png';
import { FaHeart } from 'react-icons/fa';
import "./kebab.css";

const MoreTypes = () => {
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
      name: "Chapli Kebab",
      description: "Grilled cubes of seasoned meat on skewers.",
      price: "Rs. 200",
      image: Chapli,
    },
    {
      id: 2,
      name: "Tandoori Kebab",
      description:
        "Thinly sliced seasoned meat cooked on a vertical rotisserie.",
      price: "Rs. 300",
      image: Tandoori,
    },
    {
      id: 3,
      name: "Malai Kebab",
      description: "Minced meat with spices, grilled on skewers.",
      price: "Rs. 400",
      image: Malai,
    },
    {
      id: 4,
      name: "Reshmi Kebab",
      description:
        "Ground meat with herbs and spices, shaped into patties or balls.",
      price: "Rs. 500",
      image: Reshmi,
    },
  ];

  return (
    <div className="chicken-burger-section">
      <div className="menuGrid">
        {kebabs.map((kebab) => (
          <div className="menuItem" key={kebab.id}>
            <div className="menuImage">
              <img src={kebab.image} alt={kebab.name} />
              <FaHeart
                className={`heart-iconddd  ${
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

export default MoreTypes;

