import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Pizzaa from "./Pages/Pizaa/Pizzaa";
import Burger from "./Pages/burger/Burger";
import Kebab from "./Pages/kebab/Kebab";
import Navbar from "./components/Navbar";
import PizzaDeals from "./Pages/Pizaa/Pizaadeals";
import Footer from "./components/Footer";
import Contact from "./Pages/contact/Contact";

const AppRoutes = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pizza" element={<Pizzaa />} />
      <Route path="/burger" element={<Burger />} />
      <Route path="/kebab" element={<Kebab />} />
      <Route path="/PizzaDeals" element={<PizzaDeals />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
    <Footer/>
  </Router>
);

export default AppRoutes;
