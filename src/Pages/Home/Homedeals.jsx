import React from 'react'
import dealsImage from '../../assets/deals.webp'
import './home.css'

const HomeDeals = () => {
  return (
    <section className="deals-section" id='deals'>
    <div className="deals-header">
      <h2>Deals</h2>
    </div>
    <div className="deals-image-container">
      <img src={dealsImage} alt="Deals" className="deals-image" />
    </div>
  </section>
  )
}

export default HomeDeals
