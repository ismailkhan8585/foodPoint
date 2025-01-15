import React from 'react';


const ChickenBurger = () => {
  return (
    <div className="chicken-burger-container">
      <div className="burger-grid">
        <div className="burger-card">
          <div className="burger-image-container">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20160719-mKjDIHVZXrFQNACuKRS9ryJpgaF6B0.png"
              alt="Bronco Chicken Burger"
              className="burger-image"
            />
          </div>
          <div className="burger-content">
            <h2 className="burger-title">Bronco Chicken Burger</h2>
            <p className="burger-description">
              Juicy Zinger, smothered in hot sauce, delivering a scorching hot and ...
            </p>
            <div className="burger-footer">
              <span className="price">Rs. 599</span>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="burger-card">
          <div className="burger-image-container">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20160719-mKjDIHVZXrFQNACuKRS9ryJpgaF6B0.png"
              alt="Cronco Chicken Burger"
              className="burger-image"
            />
          </div>
          <div className="burger-content">
            <h2 className="burger-title">Cronco Chicken Burger</h2>
            <p className="burger-description">
              Juicy Zinger, smothered in Buffalo sauce, offering a sweet & ...
            </p>
            <div className="burger-footer">
              <span className="price">Rs. 599</span>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="burger-card">
          <div className="burger-image-container">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20160719-mKjDIHVZXrFQNACuKRS9ryJpgaF6B0.png"
              alt="Chee Haww Chicken"
              className="burger-image"
            />
          </div>
          <div className="burger-content">
            <h2 className="burger-title">Chee Haww Chicken</h2>
            <p className="burger-description">
              A spicy fusion of two grilled chicken fillets embracing a Jalapeño ...
            </p>
            <div className="burger-footer">
              <span className="price">Rs. 899</span>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>
         <div className="burger-card">
          <div className="burger-image-container">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20160719-mKjDIHVZXrFQNACuKRS9ryJpgaF6B0.png"
              alt="Chee Haww Chicken"
              className="burger-image"
            />
          </div>
          <div className="burger-content">
            <h2 className="burger-title">Chee Haww Chicken</h2>
            <p className="burger-description">
              A spicy fusion of two grilled chicken fillets embracing a Jalapeño ...
            </p>
            <div className="burger-footer">
              <span className="price">Rs. 899</span>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChickenBurger;