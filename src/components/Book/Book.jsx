import { HeartFilled } from "@ant-design/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addBookInCart } from "../../actions/bookAction";
import BookImg from "../../assets/images/book-img.jpg";
import "./Book.scss";
const Book = ({ book }) => {
  const dispatch = useDispatch();
  const  user  = useSelector((state) => state.authReducer.user);
  const handleAdd = () => {
    const wrapData = {
      idBook: book?.id,
      idUser: user?.id,
      quantity: 1,
    };
    dispatch(addBookInCart(wrapData));
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
            <Link to="/" className=" block text-base mb-2">
              {book.author.name}
            </Link>
            <span className="block font-medium text-lg">${book.price}</span>
          </div>
          <div className="absolute bottom-0 left-0 book__add">
            <div className="flex justify-between items-center">
              <div onClick={handleAdd} className="add-to-cart text-base">
                ADD TO CART
              </div>
              <Link to="/" className="heart">
                <span className="text-base">
                  <HeartFilled />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
