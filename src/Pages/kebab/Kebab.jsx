import React from "react";
import Hero from "../../components/Hero";
import "./kebab.css";
import KebabImage from "../../assets/kubab.jpg";

const Kebab = () => {
  return (
    <Hero
      title="The Finest Kebabs Await"
      subtitle="Indulge in Authentic Flavors"
      buttonText="Explore Kebabs"
      buttonLink="#kebab-menu"
      aboutTitle="Why Kebab Corner?"
      aboutText1="Experience perfectly grilled, flavorful kebabs crafted with care and tradition."
      aboutText2="From tender tandoori to mouthwatering shawarma, enjoy the best in every bite."
      aboutImage={KebabImage}
    />
  );
};

export default Kebab;
