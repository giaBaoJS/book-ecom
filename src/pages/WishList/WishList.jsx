import { CloseOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Table, Tooltip } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBookInWishList } from "../../actions/bookAction";
import { Modal } from "antd";
import { Link } from "react-router-dom";
import CartImg from "../../assets/images/cart-img.jpg";
const { confirm } = Modal;

const WishList = () => {
  const dispatch = useDispatch();
  const { booksInWishList } = useSelector((state) => state.bookReducer);
  const columns = [
    {
      title: "Book",
      dataIndex: "name",
      width: "40%",
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
              <Link
                to={`/book/${data.id}`}
                className="block text-lg font-medium"
              >
                {name}
              </Link>
              <Link
                to={`/author/${data.authorId}`}
                className="block text-base text-gray-600 hover:text-red-600"
              >
                {data.author}
              </Link>
            </div>
          </div>
        );
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      ellipsis: true,
      width: "40%",
      render: (text) => {
        return (
          <Tooltip placement="topLeft" title={text}>
            <span className="text-base">{text}</span>
          </Tooltip>
        );
      },
    },
    {
      dataIndex: "id",
      key: "x",
      width: "20%",
      align: "center",
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
      title: "Are you sure to remove this book from your wishlist?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        dispatch(deleteBookInWishList(id));
      },
      onCancel() {},
    });
  };
  let data = [];
  data = booksInWishList.map((data, index) => ({
    key: index,
    author: data.book.author.name,
    name: data.book.name,
    description: data.book.description,
    id: data.id,
  }));
  return (
    <div className="py-20">
      <div className="container">
        <h2 className="text-center text-3xl font-medium mb-20">My Wishlist</h2>
        <div>
          <div>
            <Table
              className="table-cart"
              pagination={{
                defaultPageSize: "5",
                pageSizeOptions: ["5", "10", "20"],
                showSizeChanger: true,
                position: ["bottomCenter"],
              }}
              columns={columns}
              bordered
              dataSource={data}
              size="large"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
