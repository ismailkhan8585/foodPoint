import React from "react";
import Hero from "../../components/Hero";
import burgerImage from "../../assets/burger1.jpg";
import "./burger.css";
import ChickenBurger from "./ChickenBurger";
import BeefBurger from "./BeefBurger";
import BurgerHero from "./BurgerHero";

const Burger = () => {
  return (
    <>
      <BurgerHero/>
     <ChickenBurger/>
     <BeefBurger/>
    </>
  );
};

export default Burger;
