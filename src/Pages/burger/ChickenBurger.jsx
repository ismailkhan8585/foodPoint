import React from "react";
import burgerRuber from '../../assets/Reggy Burger.png';
import CroncoChicken from '../../assets/Cronco Chicken Burger.png';
import CheeHaww from '../../assets/Chee Haww Chicken Burger.png';
import ReggyChicken from '../../assets/Reggy Chicken Burger.png';

const ChickenBurger = () => {
  const chickenBurgers = [
    {
      id: 1,
      image: burgerRuber,
      title: "Bronco Chicken Burger",
      description:
        "Juicy Zinger, smothered in hot sauce, delivering a scorching hot and spicy kick with every bite.",
      price: 599,
    },
    {
      id: 2,
      image: CroncoChicken,
      title: "Cronco Chicken Burger",
      description:
        "Juicy Zinger, smothered in Buffalo sauce, offering a sweet & tangy flavor explosion in every mouthful.",
      price: 599,
    },
    {
      id: 3,
      image: CheeHaww,
      title: "Chee Haww Chicken",
      description:
        "A spicy fusion of two grilled chicken fillets embracing a Jalapeño cheese core, topped with fiery sauce.",
      price: 899,
    },
    {
      id: 4,
      image: ReggyChicken,
      title: "Reggy Chicken Burger",
      description:
        "Our signature chicken fillet topped with crisp lettuce, fresh tomato, and creamy mayo for a classic taste.",
      price: 699,
    },
  ];

  return (
    <div className="chicken-burger-section">
      <h1 className="section-heading">Chicken Burgers</h1>
      <div className="menuGrid">
        {chickenBurgers.map((burger) => (
          <div className="menuItem" key={burger.id}>
            <div className="menuImage">
              <img src={burger.image} alt={burger.title} />
            </div>
            <div className="menuContent">
              <h2 className="menuTitle">{burger.title}</h2>
              <p className="menuDescription">{burger.description}</p>
              <div className="menuFooter">
                <span className="price">Rs. {burger.price}</span>
                <button className="addToCart">ADD TO CART</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChickenBurger;
