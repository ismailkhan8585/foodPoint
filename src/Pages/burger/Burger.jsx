import React from "react";
import Hero from "../../components/Hero";
import burgerImage from "../../assets/burger1.jpg";
import "./burger.css";
import ChickenBurger from "./ChickenBurger";
import BeefBurger from "./BeefBurger";

const Burger = () => {
  return (
    <>
      <Hero
        title="Discover the Best Burgers at Pizza Point"
        subtitle="Indulge in a Flavorsome Burger Adventure"
        buttonText="Explore Our Burger Menu"
        buttonLink="#burger-menu"
        aboutTitle="Why Choose Burger Point?"
        aboutText1="Burger Point is your destination for irresistibly delicious burgers made with premium, fresh ingredients."
        aboutText2="From timeless classics to bold gourmet flavors, every burger is crafted to perfection, delivering an unforgettable experience."
        aboutImage={burgerImage}
      />
     <ChickenBurger/>
     <BeefBurger/>
    </>
  );
};

export default Burger;
