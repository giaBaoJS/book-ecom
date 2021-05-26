import { CloseOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBookInCart } from "../../../actions/bookAction";
import CartImg from "../../../assets/images/cart-img.jpg";
import { Modal } from "antd";
const { confirm } = Modal;
const BookInCart = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const showDeleteConfirm = (id) => {
    confirm({
      title: "Are you sure delete this book?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        setLoading(true);
        dispatch(deleteBookInCart(id));
      },
      onCancel() {},
    });
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
              <Link to={`/author/${data.book.author.id}`}>{data.book.author.name}</Link>
            </p>
            <p className="text-lg font-semibold">
              {data.quantity} x ${data.book.price}
            </p>
          </div>
          <div>
            <CloseOutlined
              onClick={() => showDeleteConfirm(data.id)}
              className="text-lg cursor-pointer"
            />
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default BookInCart;
