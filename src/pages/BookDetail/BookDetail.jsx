import React, { useEffect } from "react";
import Slider from "react-slick";
import BookDetailImg from "../../assets/images/book-detail.jpg";
import RelatedBooks from "../../shared/RelatedBooks/RelatedBooks";
import "./BookDetail.scss";
import Tablist from "../../components/Tablist/Tablist";
import AddCard from "../../components/AddCard/AddCard";
import BookInfo from "../../components/Book/BookInfo/BookInfo";
import { useDispatch, useSelector } from "react-redux";
import { getBookById } from "../../actions/bookAction";
import { useParams } from "react-router";

const BookDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { bookDetail } = useSelector((state) => state.bookReducer);
  useEffect(() => {
    dispatch(getBookById(id));
  }, [dispatch, id]);
  let settings = {
    dots: true,
    infinite: false,
    arrows: false,
    responsive: [],
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="book-detail py-20">
      {Object.keys(bookDetail).length !== 0 ? (
        <>
          <div className="container">
            <div className="wrap-detail flex flex-wrap mb-20">
              <div className="col-3 col mb-10 lg:mb-0">
                <Slider {...settings}>
                  <div>
                    <img
                      className="m-auto object-cover"
                      src={BookDetailImg}
                      alt="book"
                    />
                  </div>
                  <div>
                    <img
                      className="m-auto object-cover"
                      src={BookDetailImg}
                      alt="book"
                    />
                  </div>
                </Slider>
              </div>
              <div className="col-5 col mb-10 lg:mb-0">
                <BookInfo />
              </div>
              <div className="col-4 col">
                <AddCard />
              </div>
            </div>
          </div>
          <div className="mb-20">
            <Tablist />
          </div>
          <div className="container">
            <RelatedBooks />
          </div>
        </>
      ) : (
        "loading"
      )}
    </div>
  );
};

export default BookDetail;
