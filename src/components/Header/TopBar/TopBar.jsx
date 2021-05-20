import {
  CloseOutlined,
  HeartOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, Button } from "antd";
import CartImg from "../../../assets/images/cart-img.jpg";
import "./TopBar.scss";
const TopBar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="border-b-2">
      <div className="container">
        <div className="topbar flex justify-between py-3">
          <div className="topbar__left flex items-center">
            <Link className="flex items-center mr-5">
              <QuestionCircleOutlined className=" text-lg mr-2 leading-none" />
              <span className="text-base leading-none">Can we help you?</span>
            </Link>
            <Link className="flex items-center">
              <PhoneOutlined className=" text-lg mr-2 leading-none" />
              <span className="text-base leading-none">+1 246-345-0695</span>
            </Link>
          </div>
          <div className="topbar__right flex items-center text-xl">
            <Link to="/" className="px-4">
              <HeartOutlined />
            </Link>
            <Link to="/" className="px-4">
              <UserOutlined />
            </Link>
            <Badge count={0} showZero offset={[7,10]} size="small">
              <ShoppingCartOutlined
                className="text-2xl pl-4"
                onClick={showDrawer}
              />
            </Badge>
            <Drawer
              title="Your Shopping Cart"
              placement="right"
              width={620}
              closable={true}
              onClose={onClose}
              visible={visible}
            >
              {[...Array(5)].map((item, index) => (
                <div className="px-8 py-8 border-b-2" key={index}>
                  <div className="flex justify-between">
                    <img src={CartImg} alt="cartimg" />
                    <div className="flex-grow px-4">
                      <Link className="mb-1 text-red-500">
                        CHRISTIAN LIVING
                      </Link>
                      <h3 className="font-semibold text-base mb-1">
                        <Link>The Last Sister (Columbia River Book 1)</Link>
                      </h3>
                      <p className="text-base text-gray-500 mb-1">
                        <Link>Luanne Rice</Link>
                      </p>
                      <p className="text-lg font-semibold">1 x $16.59</p>
                    </div>
                    <div>
                      <CloseOutlined className="text-lg cursor-pointer" />
                    </div>
                  </div>
                </div>
              ))}
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
