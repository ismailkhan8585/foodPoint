import React from 'react'
import burgerImage1 from './../assets/pizza22.jpg'
import burgerImage2 from './../assets/pizza22.jpg'
import burgerImage3 from './../assets/pizza22.jpg'
function Menu() {
  return (
    <>
      <section className="menu" id='menu'>
        <h2>Our Menu</h2>
        <div className="menu-items">
          <div className="menu-item">
            <img src={burgerImage1} alt="Burger 1" />
            <h3>Classic Cheeseburger</h3>
            <p>A juicy beef patty topped with melted cheese, fresh lettuce, tomato, and our special sauce. Served with a
              side of crispy fries.</p>
          </div>
          <div className="menu-item">
            <img src={burgerImage2} alt="Burger 2" />
            <h3>Veggie Delight</h3>
            <p>A delicious veggie patty made from a blend of fresh vegetables and spices. Topped with avocado, sprouts, and
              tangy mayo. Served with a side of sweet potato fries.</p>
          </div>
          <div className="menu-item">
            <img src={burgerImage3} alt="Burger 3" />
            <h3>Spicy BBQ Burger</h3>
            <p>A fiery burger packed with flavor! Grilled chicken breast smothered in spicy BBQ sauce, topped with
              jalapenos, crispy onion rings, and chipotle mayo. Served with a side of coleslaw.</p>
          </div>
        </div>
      </section>


    </>
  )
}

export default Menu
