import React from "react";
import HeaderText from "../components/HeaderText";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Reservation from "../components/Reservation";
import Gallery from "../components/Gallery";
import ContactUs from "../components/Contactus";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Deals from "../components/Deals";



function Home() {
  return (
    <>
      <Header />
      <HeaderText />
      <Menu />
      <Deals/>
      <Reservation />
      <Testimonials />
      <Gallery />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Home;
