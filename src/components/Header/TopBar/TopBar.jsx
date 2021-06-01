import {
  PhoneOutlined,
  QuestionCircleOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Drawer } from "antd";
import "./TopBar.scss";
import { useDispatch, useSelector } from "react-redux";
import UseHoc from "../../HOC/UseHoc";
import CartTopBar from "../../HOC/CartTopBar";
import UserSetting from "../../HOC/UserSetting";
import { getBookInCart, getBookInWishList } from "../../../actions/bookAction";

const TopBar = () => {
  const [visible, setVisible] = useState(false);
  const [isClickCart, setIsClickCart] = useState(true);
  const user = useSelector((state) => state.authReducer.user);
  const { booksInCart } = useSelector((state) => state.bookReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("user") && user) {
      dispatch(getBookInCart(user.id));
      dispatch(getBookInWishList(user.id));
    }
  }, [dispatch,user]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const Component = UseHoc(isClickCart ? CartTopBar : UserSetting);
  return (
    <div className="border-b-2">
      <div className="container">
        <div className="topbar flex justify-between py-3">
          <div className="topbar__left flex items-center">
            <Link to="/" className="flex items-center mr-5">
              <QuestionCircleOutlined className=" text-lg mr-2 leading-none" />
              <span className="text-base leading-none">Can we help you?</span>
            </Link>
            <Link to="/" className="flex items-center">
              <PhoneOutlined className=" text-lg mr-2 leading-none" />
              <span className="text-base leading-none">+1 246-345-0695</span>
            </Link>
          </div>
          <div className="topbar__right flex items-center text-xl">
            {/* <Link to="/profile/wishlist" className="px-4">
              <HeartOutlined />
            </Link> */}
            {user ? (
              <div>
                <UserOutlined
                  className="text-red-500 px-4"
                  onClick={() => {
                    showDrawer();
                    setIsClickCart(false);
                  }}
                />
              </div>
            ) : (
              <Link to="/account" className="px-4">
                <UserOutlined />
              </Link>
            )}

            <Badge
              count={booksInCart.length ? booksInCart.length : 0}
              showZero
              offset={[7, 10]}
              size="small"
            >
              <ShoppingCartOutlined
                className="text-2xl pl-4"
                onClick={() => {
                  showDrawer();
                  setIsClickCart(true);
                }}
              />
            </Badge>
            <Drawer
              title={isClickCart ? "Your Shopping Cart" : "Account"}
              placement="right"
              width={isClickCart ? 620 : 450}
              closable={true}
              onClose={onClose}
              visible={visible}
            >
              <Component setVisible={setVisible} />
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
