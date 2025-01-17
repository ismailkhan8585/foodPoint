import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Anytwodelas from "../../assets/ANY-2-DEAL.webp";
import twoforyou from "../../assets/two-for-you.webp";
import gogo from "../../assets/gogo.webp";
import triofast from "../../assets/trio-fest.webp";
import "./home.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const DealsCard = () => {
  const deals = [
    {
      id: 1,
      image: Anytwodelas,
      title: "Delicious Burger",
      description: "Enjoy our juicy and flavorful butcher's burger",
      price: "$12.99",
    },
    {
      id: 2,
      image: twoforyou,
      title: "Two For You",
      description: "2 Large Pan Pizza 1.5 Ltr. Drink.",
      price: "$25.99",
    },
    {
      id: 3,
      image: gogo,
      title: "Refreshing Drinks",
      description: "Cool down with our selection of refreshing beverages.",
      price: "$4.99",
    },
    {
      id: 4,
      image: triofast,
      title: "Trio Feast Deal",
      description: "3 x Cowboy Burgers, 1 x Small Frizza, 3 x Reg. Drink",
      price: "$30.99",
    },
  ];

  return (
    <div className="carousel-container">
      <Carousel responsive={responsive} autoPlay={false} infinite={true}>
        {deals.map((deal) => (
          <div className="card" key={deal.id}>
            <img src={deal.image} alt={deal.title} />
            <div className="card-content">
              <h2 className="text">{deal.title}</h2>
              <p className="text">{deal.description}</p>
              <div className="btn-price">
              <p className="price">{deal.price}</p>
              <button className="carousel-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DealsCard;
