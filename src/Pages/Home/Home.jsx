import React from "react";
import Hero from "../../components/Hero";
import Menu from "../../components/Menu";
import Reservation from "../../components/Reservation";
import Testimonials from "../../components/Testimonials";
import Gallery from "../../components/Gallery";
import ContactUs from "../../components/Contactus";
import BurgerImage from "../../assets/pizza22.jpg";
import Footer from "../../components/Footer";
import PizzaDeals from "../Pizaa/Pizaadeals";

const Home = () => {
  return (
    <>
      <Hero
        title="Welcome to Pizza Point"
        subtitle="Discover the Best Dishes in Town"
        buttonText="Browse Our Menu"
        buttonLink="#menu"
        aboutTitle="About Our Restaurant"
        aboutText1="Our restaurant offers a wide variety of delicious dishes made with fresh, locally sourced ingredients."
        aboutText2="Whether you're craving pizza, burgers, or gourmet specialties, we have something to satisfy every appetite."
        aboutImage={BurgerImage}
      />
      <Menu />
      {/* <Deals /> */}
      <PizzaDeals/>
      {/* <Reservation /> */}
      <Testimonials />
      <Gallery />
      {/* <ContactUs /> */}
      <Footer />
    </>
  );
};

export default Home;
