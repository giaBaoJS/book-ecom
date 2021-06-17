import { HeartFilled, ShoppingFilled } from "@ant-design/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addBookInCart, addBookInWishList } from "../../actions/bookAction";
import BookImg from "../../assets/images/book-img.jpg";
import { notification } from 'antd';

import "./Book.scss";
const Book = ({ book, isInCart, isInWishList }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const handleAddToCart = () => {
    notification.open({
      message: 'Cart',
      className: 'wishlist-notify cart-notify',
      description:
        'Added to your Cart!',
        icon: <ShoppingFilled style={{ color: 'white' }} />,
    });
    const wrapData = {
      idBook: book?.id,
      idUser: user?.id,
      quantity: 1,
    };
    dispatch(addBookInCart(wrapData));
  };
  const handleAddToWishList = () => {
    notification.open({
      message: 'Wishlist',
      className: 'wishlist-notify',
      description:
        'Added to your Wishlist!',
        icon: <HeartFilled style={{ color: 'white' }} />,
    });
    const dataWishList = {  
      idBook: book?.id,
      idUser: user?.id,
    };
    dispatch(addBookInWishList(dataWishList));
  };
  return (
    <div>
      <div className="p-10 bg-white rounded-lg border border-solid border-gray-300 book">
        <div className=" relative">
          <div>
            <Link to={`/book/${book.id}`}>
              <img className="m-auto mb-4" src={BookImg} alt="book-img" />
            </Link>
          </div>
          <div className="book__content">
            <p className="uppercase red-color mb-1">
              <Link to="/">{book.category.name}</Link>
            </p>
            <h4 className="font-medium text-lg">
              <Link to={`/book/${book.id}`}>{book.name}</Link>
            </h4>
            <Link
              to={`/author/${book.author.id}`}
              className=" block text-base mb-2"
            >
              {book.author.name}
            </Link>
            <span className="block font-medium text-lg">${book.price}</span>
          </div>
          <div className="absolute bottom-0 left-0 book__add">
            <div className="flex justify-between items-center">
              {isInCart ? (
                <Link className="add-to-cart text-base" to="/cart">
                  VIEW CART
                </Link>
              ) : (
                <button
                  onClick={handleAddToCart}
                  className="add-to-cart text-base"
                >
                  ADD TO CARTy
                </button>
              )}
              {isInWishList ? (
                <Link to="/profile/wishlist" className="heart">
                  <span className="text-base isClicked">
                    <HeartFilled/>
                  </span>
                </Link>
              ) : (
                <div className="heart"> 
                  <span className="text-base">
                    <HeartFilled onClick={handleAddToWishList} />
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
