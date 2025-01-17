import React from 'react';
import customer1 from './../assets/customer1.jpg';
import customer2 from './../assets/customer2.jpg';


function Testimonials() {
  return (
    <>
      <section className="testimonials" id="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-row">
          <div className="testimonial-card">
            <img src={customer1} alt="Customer 1" />
            <p>"The burgers at Berger Hut are simply amazing! The flavors are rich, and the ingredients are always fresh. It's my go-to place whenever I'm craving a delicious meal."</p>
            <h4>John Doe</h4>
          </div>
          <div className="testimonial-card">
            <img src={customer2} alt="Customer 2" />
            <p>"Berger Hut never disappoints! The quality of their burgers and the friendly service make it a top-notch dining experience. I highly recommend it to all burger lovers!"</p>
            <h4>Jane Smith</h4>
          </div>
          <div className="testimonial-card">
            <img src={customer2} alt="Customer 2" />
            <p>"Berger Hut never disappoints! The quality of their burgers and the friendly service make it a top-notch dining experience. I highly recommend it to all burger lovers!"</p>
            <h4>Jane Smith</h4>
          </div>
          
        </div>
      </section>
    </>
  );
}

export default Testimonials;
