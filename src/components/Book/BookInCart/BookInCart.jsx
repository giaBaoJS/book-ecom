import { CloseOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBookInCart } from "../../../actions/bookAction";
import CartImg from "../../../assets/images/cart-img.jpg"

const BookInCart = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const deleteBook = (id) => {
    setLoading(true);
    dispatch(deleteBookInCart(id));
  };
  return (
    <Spin spinning={loading}>
      <div className="px-8 py-8 border-b-2">
        <div className="flex justify-between">
          <img src={CartImg} alt="cartimg" />
          <div className="flex-grow px-4">
            <Link className="mb-1 text-red-500">CHRISTIAN LIVING</Link>
            <h3 className="font-semibold text-base mb-1">
              <Link to={`/book/${data.book.id}`}>{data?.book.name}</Link>
            </h3>
            <p className="text-base text-gray-500 mb-1">
              <Link>{data.book.author.name}</Link>
            </p>
            <p className="text-lg font-semibold">
              {data.quantity} x ${data.book.price}
            </p>
          </div>
          <div>
            <CloseOutlined
              onClick={() => deleteBook(data.id)}
              className="text-lg cursor-pointer"
            />
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default BookInCart;
