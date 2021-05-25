import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BookInCart from "../Book/BookInCart/BookInCart";

const CartTopBar = () => {
  const { booksInCart } = useSelector((state) => state.bookReducer);
  const { subTotalInCart } = useSelector((state) => state.bookReducer);
  return (
    <>
      {booksInCart?.map((data, index) => (
        <BookInCart data={data} key={index} />
      ))}
      <div className="px-8 py-10 pb-20">
        <div className="flex justify-between items-center mb-10">
          <p className="text-xl font-medium">Subtotal:</p>
          <span className="text-xl font-medium">${subTotalInCart}</span>
        </div>
        <div>
          <Link
            to="/cart"
            className="block py-5 border border-black text-lg text-center mb-6 hover:text-white hover:bg-black transition duration-300"
          >
            View Cart
          </Link>
          <Link
            to="/checkout"
            className="block py-5 border border-black text-lg text-center bg-black text-white hover:text-white"
          >
            Checkout
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartTopBar;
