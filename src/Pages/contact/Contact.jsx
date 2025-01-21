import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p className="contact-subtitle">
          We'd love to hear from you! Please fill out the form below or use our contact information.
        </p>
      </div>
  
      <div className="contact-content-wrapper">
        <div className="contact-form-section">
          <form>
            <div className="contact-form-grid">
              <div className="contact-form-group">
                <label htmlFor="firstName" className="contact-label">First Name</label>
                <input type="text" id="firstName" name="firstName" className="contact-input" required />
              </div>
              <div className="contact-form-group">
                <label htmlFor="lastName" className="contact-label">Last Name</label>
                <input type="text" id="lastName" name="lastName" className="contact-input" required />
              </div>
            </div>
  
            <div className="contact-form-group">
              <label htmlFor="email" className="contact-label">Email</label>
              <input type="email" id="email" name="email" className="contact-input" required />
            </div>
  
            <div className="contact-form-group">
              <label htmlFor="message" className="contact-label">Message</label>
              <textarea id="message" name="message" className="contact-textarea" required></textarea>
            </div>
  
            <button type="submit" className="contact-submit-btn">
              SUBMIT
            </button>
          </form>
        </div>
  
        <div className="contact-info-section">
          <h2>Contact Information</h2>
          <div className="contact-details-section">
            <div className="contact-item">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9ed84b"
                strokeWidth="2"
              >
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
              <span>info@eurofreshmart.com</span>
            </div>
            <div className="contact-item">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9ed84b"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              <span>+0000000000</span>
            </div>
            <div className="contact-item">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9ed84b"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>123 Fence Street, Sydney, NSW 2000</span>
            </div>
          </div>
  
          {/* <div className="contact-map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26537.90346132691!2d151.20543769884955!3d-33.86882975766034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401e8b983f%3A0x5017d681632ccc0!2sSydney%20NSW%202000%2C%20Australia!5e0!3m2!1sen!2s!4v1705849472274!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Contact
