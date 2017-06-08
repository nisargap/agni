import React, { Component } from "react";
import Slider from "react-slick";
export default class FrontSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToScroll: 1,
      fade: true
    };

    return (
      <Slider {...settings} style={{ overflowY: "none"}}>
        <div className="text">First tag</div>
        <div className="text">Second tag</div>
        <div className="text">Third tag</div>
        <div className="text">Fourth tag</div>
        <div className="text">Fifth tag</div>
        <div className="text">Sixth tag</div>
      </Slider>
    );
  }
}
