import './Portfolio.css'
import React from "react";
import Slider from "react-slick";
export const Portfolio =()=> {
    {
        var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1
        };
      }
    return (
         
        <div class="container">
      <Slider {...settings}>
      <div  >1</div>
      <div  >2</div>
      <div  >3</div>
      <div  >4</div>
      <div  >5</div>
      </Slider>
        </div>
       
    )
    }