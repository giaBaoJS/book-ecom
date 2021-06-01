import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooksByFilter } from "../actions/bookAction";
import ListAuthors from "../components/Authors/ListAuthors";
import Banner from "../components/Banner/Banner";
import Book from "../components/Book/Book";
import FeatureCaterory from "../components/FeatureCaterory/FeatureCaterory";
import TitleHome from "../shared/TitleHome/TitleHome";
const HomePage = () => {
  const dispatch = useDispatch();
  const { bookbyFilter } = useSelector((state) => state.bookReducer);
  const { booksInCart } = useSelector((state) => state.bookReducer);
  const { booksInWishList } = useSelector((state) => state.bookReducer);
  useEffect(() => {
    dispatch(getBooksByFilter(""));
  }, [dispatch]);
  return (
    <div>
      <Banner />
      <FeatureCaterory />  
      <div className="py-24" style={{ backgroundColor: "#fff6f6" }}>
        <div className="container">
          <TitleHome name="Trending Book" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-5 md:gap-5 lg:gap-7">
            {bookbyFilter?.map((item, index) => (
              <Book
                key={index}
                book={item}
                isInWishList={booksInWishList.find(
                  (i) => i.book.id === item.id
                )}
                isInCart={booksInCart.find((i) => i.book.id === item.id)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="authors py-12">
        <div className="container">
          <TitleHome name="Favourite Authors" />
          <ListAuthors />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
