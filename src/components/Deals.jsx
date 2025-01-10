import React from "react";
import burger1 from "../assets/burger1.jpg";
import burger2 from "../assets/burger2.jpg";
import burger3 from "../assets/burger3.jpg";

const Deals = () => {
  return (
    <div class="container">
      <section class="top-deals">
        <h2 class="section-title">TOP DEALS</h2>

        <div class="deals-grid">
          <div class="deal-card">
          <div class="dots">
              <span class="red-line"></span>
              <span class="red-line"></span>
              <span class="red-line"></span>
            </div>
            <div class="heart">♥</div>
            <div class="image-container">
              <img
                src={burger1}
                alt="Zinger Stacker Combo"
                class="product-image"
              />
            </div>
            <h3 class="product-title">Zinger Stacker Combo</h3>
            <p class="product-description">
              1 Zinger Stacker + 1 Regular fries + 1 Regular drink
            </p>
            <div class="price">Rs 950</div>
            <button class="add-to-bucket">+ ADD TO BUCKET</button>
          </div>

          <div class="deal-card">
          <div class="dots">
              <span class="red-line"></span>
              <span class="red-line"></span>
              <span class="red-line"></span>
            </div>
            <div class="heart">♥</div>
            <div class="image-container">
              <img src={burger2} alt="Crispy Duo Box" class="product-image" />
            </div>
            <h3 class="product-title">Crispy Duo Box</h3>
            <p class="product-description">
              Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries +
              2 Regular drinks
            </p>
            <div class="price">Rs 1350</div>
            <button class="add-to-bucket">+ ADD TO BUCKET</button>
          </div>

          <div class="deal-card">
            <div class="dots">
              <span class="red-line"></span>
              <span class="red-line"></span>
              <span class="red-line"></span>
            </div>
            <div class="heart">♥</div>
            <div class="image-container">
              <img
                src={burger3}
                alt="Family Festival 3"
                class="product-image"
              />
            </div>
            <h3 class="product-title">Family Festival 3</h3>
            <p class="product-description">
              An ultimate meal for the fam. It includes 4 Zinger burgers + 4
              pieces Hot and Crispy Chicken
            </p>
            <div class="price">Rs 2590</div>
            <button class="add-to-bucket">+ ADD TO BUCKET</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Deals;
