import React, { useState } from "react";
import "./kebab.css";
import Shish from '../../assets/Shish Kebab.png';
import Doner from '../../assets/Doner Kebab Image.png';
import Seekh from '../../assets/Seekh Kebab.png';
import Kofta from '../../assets/Kofta Kebab.png';
import { FaHeart } from "react-icons/fa";

const TypesKubab = () => {
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
      name: "Shish Kebab",
      description: "Grilled cubes of seasoned meat on skewers.",
      price: "Rs. 200",
      image: Shish,
    },
    {
      id: 2,
      name: "Doner Kebab",
      description:
        "Thinly sliced seasoned meat cooked on a vertical rotisserie.",
      price: "Rs. 300",
      image: Doner,
    },
    {
      id: 3,
      name: "Seekh Kebab",
      description: "Minced meat with spices, grilled on skewers.",
      price: "Rs. 400",
      image: Seekh,
    },
    {
      id: 4,
      name: "Kofta Kebab",
      description:
        "Ground meat with herbs and spices, shaped into patties or balls.",
      price: "Rs. 500",
      image: Kofta,
    },
  ];

  return (
    <div className="chicken-burger-section">
      <h1 className="section-heading">Types of Kebabs</h1>
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

export default TypesKubab;
