import React from 'react'
import lady from "./images/lady-img.jpg"
import dog from "./images/dog-img.jpg"

const Carousel = ()=>{
    return(
        <section className="colored-section" id="testimonials">
        <h1 style={{color:"white",marginBottom:"3%"}}>What our customers Think about us !</h1>
    <div id="testimonial-carousel" className="carousel slide" data-ride="false">
      <div className="carousel-inner">
        <div className="carousel-item active container-fluid">
          <img className="testimonial-image" src={dog} alt="dog-profile"/>
          <em>Beverly Hills, California</em>
          <h2 className="testimonial-text">Best Quality Products , All available in a single place</h2>
        </div>
        <div className="carousel-item container-fluid">
          <img className="testimonial-image" src={lady} alt="lady-profile"/>
          <em>Chennai , TamilNadu</em>
          <h2 className="testimonial-text">Wide range of Products with Best Offers</h2>
        </div>
      </div>
      <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
      </a>
      <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
    <span className="carousel-control-next-icon"></span>
      </a>
    </div>

  </section>

    )
}
export default Carousel;