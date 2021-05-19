import React from "react";
import Slider from "react-slick";
import Author from "./Author/Author";
import "./ListAuthors.scss";
const ListAuthors = () => {
  let settings = {
    dots: false,
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <Author />
        <Author />
        <Author />
        <Author />
        <Author />
        <Author />
        <Author />
        <Author />
      </Slider>
    </div>
  );
};

export default ListAuthors;
