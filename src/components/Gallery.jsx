import React from 'react'
import gallery1 from './../assets/gallery1.jpg'
import gallery2 from './../assets/gallery2.jpg'
import gallery3 from './../assets/gallery3.jpg'
import gallery4 from './../assets/gallery4.jpg'
function Gallery() {
  return (
    <>
      <section className="gallery" id='gallery'>
        <h2>Gallery</h2>
        <div className="image-grid">
          <div className="image-item">
            <img src={gallery1} alt="Image 1" />
          </div>
          <div className="image-item">
            <img src={gallery2} alt="Image 2" />
          </div>
          <div className="image-item">
            <img src={gallery3} alt="Image 3" />
          </div>
          <div className="image-item">
            <img src={gallery4} alt="Image 4" />
          </div>
        </div>
      </section>


    </>
  )
}

export default Gallery
