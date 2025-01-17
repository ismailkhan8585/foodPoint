import React from "react";
import Hero from "../../components/Hero";
import Testimonials from "../../components/Testimonials";
import Gallery from "../../components/Gallery";
import BurgerImage from "../../assets/pizza22.jpg";
import Homedeals from "./Homedeals";
import DealsCard from "./DealsCard";


const Home = () => {
  return (
    <>
      <Hero
        title="Welcome to Food Point"
        subtitle="Discover the Best Dishes in Town"
        buttonText="Browse Our Menu"
        buttonLink="#menu"
        aboutTitle="About Our Restaurant"
        aboutText1="Our restaurant offers a wide variety of delicious dishes made with fresh, locally sourced ingredients."
        aboutText2="Whether you're craving pizza, burgers, or gourmet specialties, we have something to satisfy every appetite."
        aboutImage={BurgerImage}
      />
      <Homedeals/>
      <DealsCard/>
      {/* <Menu /> */}
      {/* <Deals /> */}
      {/* <PizzaDeals/> */}
      {/* <Reservation /> */}
      <Gallery />
      <Testimonials />
    </>
  );
};

export default Home;
