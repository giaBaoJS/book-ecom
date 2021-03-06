import { DingtalkOutlined, PayCircleFilled } from "@ant-design/icons";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const BookInfo = () => {
  const { bookDetail } = useSelector((state) => state.bookReducer);
  return (
    <div className="book-detail__content px-0 md:px-6">
      <h3 className="text-3xl font-medium mb-3">{bookDetail.name}</h3>
      <p className="mb-4">
        <span className="font-medium">By (author) </span>{" "}
        <Link to="">{bookDetail.author.name}</Link>
      </p>
      <div className="text-base mb-5 book-info">{bookDetail.description.slice(0, 300)} ...</div>
      <div className="flex flex-wrap items-center">
        <div className="flex items-center w-full md:w-2/4 mb-3 md:mb-0">
          <DingtalkOutlined className="text-3xl mr-4 text-red-500" />
          <div>
            <p className="text-lg font-medium">Free Delivery</p>
            <span className="text-lg">Orders over $100</span>
          </div>
        </div>
        <div className="flex items-center w-full md:w-2/4">
          <PayCircleFilled className="text-3xl mr-4 text-red-500" />
          <div>
            <p className="text-lg font-medium">Secure Payment</p>
            <span className="text-lg">100% Secure Payment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
