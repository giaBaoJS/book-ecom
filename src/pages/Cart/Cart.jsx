import React from "react";
import "./Cart.scss";
import { InputNumber, Table } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import SideCart from "../../components/SideCart/SideCart";
const columns = [
  {
    title: "Product",
    dataIndex: "name",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    render: (text, row) => (
      <InputNumber className="text-center" defaultValue={text} min="1" />
    ),
  },
  {
    title: "Subtotal",
    dataIndex: "subtotal",
  },
  {
    dataIndex: "",
    key: "x",
    render: () => (
      <Link className="text-xl">
        <CloseOutlined />
      </Link>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "The Last Sister (Columbia River Book 1)",
    quantity: 2,
    price: 59,
    subtotal: 54,
  },
  {
    key: "2",
    name: "The Last Sister (Columbia River Book 1)",
    quantity: 1,
    price: 69,
    subtotal: 69,
  },
  {
    key: "3",
    name: "The Last Sister (Columbia River Book 1)",
    quantity: 3,
    price: 79,
    subtotal: 79,
  },
];
const Cart = () => {
  return (
    <div className="cart py-20">
      <h3 className="text-4xl font-medium text-center mb-20">
        Your Cart: 6 items
      </h3>
      <div className="container">
        <div className="flex flex-wrap cart__wrap">
          <div className="col-9 col">
            <div>
              <Table
                pagination={false}
                columns={columns}
                dataSource={data}
                size="middle"
              />
            </div>
            ,
          </div>
          <div className="col-3 col">
            <SideCart />
            <div>
              <Link
                to="/"
                className="block w-full text-white bg-black p-6 text-center text-lg"
              >
                Proceed to checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
