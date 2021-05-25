import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { getAllAuthor } from "../../actions/authorAction";
import Author from "./Author/Author";
import "./ListAuthors.scss";
const ListAuthors = () => {
  const dispatch = useDispatch();
  const { authors } = useSelector((state) => state.authorReducer);
  useEffect(() => {
    dispatch(getAllAuthor());
  }, []);

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
        {authors?.map((item, index) => (
          <Author key={index} author={item} />
        ))}
      </Slider>
    </div>
  );
};

export default ListAuthors;
