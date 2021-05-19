import { HeartFilled } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import BookImg from "../../assets/images/book-img.jpg";
import "./Book.scss";
const Book = () => {
  return (
    <div>
      <div className="p-10 bg-white rounded-lg border border-solid border-gray-300 book">
        <div className=" relative">
          <div>
            <Link to="/">
              <img className="m-auto mb-4" src={BookImg} alt="book-img" />
            </Link>
          </div>
          <div className="book__content">
            <p className="uppercase red-color mb-1">
              <Link to="/">Hardcover</Link>
            </p>
            <h4 className="font-medium text-lg">
              <Link to="/">By Invitation Only: A Novel</Link>
            </h4>
            <Link to="/" className=" block text-base mb-2">
              Dorothea Benton Frank
            </Link>
            <span className="block font-medium text-lg">$16.78</span>
          </div>
          <div className="absolute bottom-0 left-0 book__add">
            <div className="flex justify-between items-center">
              <Link to="/" className="add-to-cart text-base">
                ADD TO CART
              </Link>
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
