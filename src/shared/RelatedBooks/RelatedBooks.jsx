import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import Book from "../../components/Book/Book";
import { getBooksByFilter } from "../../actions/bookAction";
import "./RelatedBook.scss";
const RelatedBooks = () => {
  const { bookDetail } = useSelector((state) => state.bookReducer);
  const { bookbyFilter } = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const queryString = `?IdCategory=${bookDetail.category?.id}`;
    dispatch(getBooksByFilter(queryString));
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
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  if (bookbyFilter?.length < 5) {
    settings.slidesToShow = 2;
  }
  return (
    <>
      <h3 className="text-3xl font-medium mb-6">Related Books</h3>
      <Slider className="related-book" {...settings}>
        {bookbyFilter?.map((item, index) => (
          <Book key={index} book={item} />
        ))}
      </Slider>
    </>
  );
};

export default RelatedBooks;
