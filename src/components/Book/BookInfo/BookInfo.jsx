import { DingtalkOutlined, PayCircleFilled } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

const BookInfo = () => {
  return (
    <div className="book-detail__content px-0 md:px-6">
      <h3 className="text-3xl font-medium mb-3">Empire of Silver</h3>
      <p className="mb-4">
        <span className="font-medium">By (author) </span>{" "}
        <Link to="">Conn Iggulden</Link>
      </p>
      <div className="text-base mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Excepteur sint occaecat. *The multi-million copy
        bestseller* Soon to be a major film A Number One New York Times
        Bestseller ‘Painfully beautiful’ New York Times ‘Unforgettable . . . as
        engrossing as it is moving’ Daily Mail ‘A rare achievement’ The Times ‘I
        can’t even express how much I love this book!’ Reese Witherspoon
      </div>
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
