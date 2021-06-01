import React from "react";
import "./Cart.scss";
import { InputNumber, Table } from "antd";
import { CloseOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import SideCart from "../../components/SideCart/SideCart";
import { useDispatch, useSelector } from "react-redux";
import { deleteBookInCart } from "../../actions/bookAction";
import CartImg from "../../assets/images/cart-img.jpg";
import { Modal } from "antd";
const { confirm } = Modal;

const Cart = () => {
  const { booksInCart } = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  const columns = [
    {
      title: "Book",
      dataIndex: "name",
      width: 600,
      render: (name, data) => {
        return (
          <div className="flex p-5 items-center">
            <div className="mr-5 w-1/4">
              <img
                className="object-cover w-full"
                src={CartImg}
                alt="cartimg"
              />
            </div>
            <div className="w-3/4">
              <Link to={`/book/${data.bookId}`} className="block text-lg font-medium">{name}</Link>
              <Link to={`/author/${data.authorId}`} className="block text-base text-gray-600 hover:text-red-600">
                {data.author}
              </Link>
            </div>
          </div>
        );
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (text) => <span className="text-base font-medium">{text}</span>,
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
      render: (text) => <span className="text-base font-medium">{text}</span>,
    },
    {
      dataIndex: "id",
      key: "x",
      render: (id) => (
        <div className="text-xl">
          <CloseOutlined
            className="hover:text-red-600"
            onClick={() => showDeleteConfirm(id)}
          />
        </div>
      ),
    },
  ];
  const showDeleteConfirm = (id) => {
    confirm({
      title: "Are you sure delete this book?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        dispatch(deleteBookInCart(id));
      },
      onCancel() {},
    });
  };
  let data = [];
  data = booksInCart.map((data, index) => ({
    key: index,
    bookId:data.book.id,
    authorId:data.book.author.id,
    author: data.book.author.name,
    name: data.book.name,
    price: `$${data.book.price}`,
    quantity: data.quantity,
    subtotal: `$${data.subTotal}`,
    id: data.id,
  }));
  return (
    <div className="cart py-20">
      <h3 className="text-4xl font-medium text-center mb-20">
        Your Cart: {booksInCart.length} items
      </h3>
      <div className="container"> 
        <div className="flex flex-wrap cart__wrap">
          <div className="col-9 col">
            <div>
              <Table
                className="table-cart"
                pagination={false}
                columns={columns}
                dataSource={data}
                size="large"
                scroll={{ y: 650 }}
              />
            </div>
            <div className="flex mt-12 justify-between">
              <Link
                to="/"
                className="block py-4 px-6 border border-gray-500 bg-black text-white text-base hover:text-white"
              >
                Back to home
              </Link>
              <Link
                to="/book/filter"
                className="block py-4 px-6 border border-gray-500 bg-white text-base"
              >
                Keep shoping
              </Link>
            </div>
          </div>
          <div className="col-3 col">
            <SideCart />
            <div>
              <Link
                to="/"
                className="block w-full text-white bg-black p-6 text-center text-lg hover:text-white"
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
