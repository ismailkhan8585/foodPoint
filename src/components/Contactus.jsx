import React from 'react'

function ContactUs() {
  return (
    <>
      <section className="contact" id='contact'>
        <div className="contact-container">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-map-marker-alt" />
              <p>Zaida main bazar, swabi, Pakistan</p>
            </div>
            <div className="info-item">
              <i className="fas fa-phone-alt" />
              <p>+923149060781</p>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope" />
              <p>khannihar921@gmail.com</p>
            </div>
          </div>
          <form className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows={5} required defaultValue={""} />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

    </>
  )
}

export default ContactUs
