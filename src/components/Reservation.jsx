import React from 'react'

function Reservation() {
  return (
    <>
      <section className="reservations" id='reservations'>
        <div className="reservation-form">
          <h2>Make a Reservation</h2>
          <form>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="tel" name="phone" placeholder="Phone Number" required />
            <input type="date" name="date" required />
            <input type="time" name="time" required />
            <textarea name="message" placeholder="Additional Message" rows={5} defaultValue={""} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

    </>
  )
}

export default Reservation
