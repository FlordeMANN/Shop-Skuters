import Slider from "react-slick";
import slides from './slides'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react'


function SliderComponent() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
      arrows: false
    }
    return (
        <Slider {...settings}>
             {
                 slides.map((x, i) => {
                     return(
                         <div key={i} className="img-card">
                            <img className="img" src={x.img} alt={x.img} title={x.title} />
                            <div className="card-body">
                                <div className="card-title">{x.title}</div>
                            </div>
                        </div>
                     )
                 })
             }
        </Slider>
    );
}

export default SliderComponent
