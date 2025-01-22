import React from 'react';
import Rancheroniiibrger from '../../assets/Rancheroniii brger.png';
import CheeHaww from '../../assets/Chee Haww Beef burger.png';
import MightyRodeo from '../../assets/Mighty Rodeo Beef burger.png';
import RButcherburger from '../../assets/Butcher burger.png';
import './burger.css'
const BeefBurger = () => {
  const beefBurgers = [
    {
      id: 1,
      image: Rancheroniiibrger,
      title: 'Rancheroniii',
      description:
        'Double Beef Patty, Chilli Mayo, Iceberg Lettuce, Onions, Tomato, White Cheese Slices 2, Beef Pepperoni 8, Buffalo Special Sauce.',
      price: 975,
    },
    {
      id: 2,
      image: CheeHaww,
      title: 'Chee Haww Beef',
      description:
        'A spicy fusion of two grilled beef fillets embracing a Jalapeño cheese patty, Buffalo spicy Sauce topped with melted cheese and crispy Jalapeños.',
      price: 1049,
    },
    {
      id: 3,
      image: MightyRodeo,
      title: 'Mighty Rodeo Beef',
      description:
        'Indulge in our Mozzarella Inferno Burger, featuring two grilled Beef patty stuffed with melted mozzarella cheese, topped with an additional cheese slice, crispy Jalapeños, and tangy salsa sauce.',
      price: 1049,
    },
    {
      id: 4,
      image: RButcherburger,
      title: 'Butcher',
      description:
        'A spicy fusion of two grilled beef fillets embracing a Jalapeño cheese patty, Buffalo spicy Sauce topped with melted cheese and crispy Jalapeños.',
      price: 949,
    },
  ];

  return (
    <div className="beef-burger-section">
      <h1 className="section-heading">Beef Burgers</h1>
      <div className="menuGrid">
        {beefBurgers.map((burger) => (
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

export default BeefBurger;
