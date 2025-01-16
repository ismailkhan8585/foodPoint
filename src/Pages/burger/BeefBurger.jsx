import React from 'react'
import Rancheroniiibrger from '../../assets/Rancheroniii brger.png'
import CheeHaww from '../../assets/Chee Haww Beef burger.png'
import MightyRodeo from '../../assets/Mighty Rodeo Beef burger.png'
import RButcherburger from '../../assets/Butcher burger.png'
const BeefBurger = () => {
  return (
    <div className="chicken-burger-section">
    <h1 className="section-heading">Beef Burgers</h1>
    <div className="menuGrid">
      <div className="menuItem">
        <div className="menuImage">
          <img src={Rancheroniiibrger} alt="Bronco Chicken Burger" />
        </div>
        <div className="menuContent">
          <h2 className="menuTitle">Rancheroniii</h2>
          <p className="menuDescription">
          Double Beef Patty, Chilli Mayo, Iceberg Lettuce, Onions, Tomato, White Cheese Slices 2, Beef Pepperoni 8 , Buffalo Special Sauce.
          </p>
          <div className="menuFooter">
            <span className="price">Rs. 975</span>
            <button className="addToCart">ADD TO CART</button>
          </div>
        </div>
      </div>

      <div className="menuItem">
        <div className="menuImage">
          <img src={CheeHaww} alt="Cronco Chicken Burger" />
        </div>
        <div className="menuContent">
          <h2 className="menuTitle">Chee Haww Beef</h2>
          <p className="menuDescription">
          A spicy fusion of two grilled beef fillets embracing a Jalapeño cheese patty, Buffalo spicy Sauce topped with melted cheese and crispy Jalapeños.
          </p>
          <div className="menuFooter">
            <span className="price">Rs. 1049</span>
            <button className="addToCart">ADD TO CART</button>
          </div>
        </div>
      </div>

      <div className="menuItem">
        <div className="menuImage">
          <img src={MightyRodeo} alt="Chee Haww Chicken" />
        </div>
        <div className="menuContent">
          <h2 className="menuTitle">Mighty Rodeo Beef</h2>
          <p className="menuDescription">
          Indulge in our Mozzarella Inferno Burger, featuring two grilled Beef patty stuffed with melted mozzarella cheese, topped with an additional cheese slice, crispy Jalapeños, and tangy salsa sauce.
          </p>
          <div className="menuFooter">
            <span className="price">Rs. 1049</span>
            <button className="addToCart">ADD TO CART</button>
          </div>
        </div>
      </div>

      <div className="menuItem">
        <div className="menuImage">
          <img src={RButcherburger} alt="Reggy Chicken Burger" />
        </div>
        <div className="menuContent">
          <h2 className="menuTitle">Butcher</h2>
          <p className="menuDescription">
          A spicy fusion of two grilled beef fillets embracing a Jalapeño cheese patty, Buffalo spicy Sauce topped with melted cheese and crispy Jalapeños.
          </p>
          <div className="menuFooter">
            <span className="price">Rs. 949</span>
            <button className="addToCart">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BeefBurger
