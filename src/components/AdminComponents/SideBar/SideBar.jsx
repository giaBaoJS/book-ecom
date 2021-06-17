import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import React, { useEffect, useState } from "react";
import {
  DashboardOutlined,
  UserOutlined,
  BookOutlined,
  TagsOutlined,
  ShoppingOutlined,
  FormOutlined,
} from "@ant-design/icons";
import logo from "../../../assets/images/tmalogo.png";
import "./index.scss";
import { useHistory, useLocation } from "react-router";
import { handleRoute } from "../../../actions/config";

const SideBar = ({ isOpen }) => {
  const history = useHistory();
  const location = useLocation();
  const [keySelect, setKeySelect] = useState(handleRoute(location.pathname));
  useEffect(() => {
    setKeySelect(handleRoute(location.pathname));
  }, [location.pathname]);

  return (
    <Sider trigger={null} collapsible collapsed={isOpen} collapsedWidth="60">
      <div
        className={`logo mx-auto ${
          isOpen ? "w-10" : "w-20"
        } py-5 transition-all`}
      >
        <img src={logo} alt="logo" />
      </div>
      <Menu theme="dark" mode="inline" selectedKeys={[keySelect]}>
        <Menu.Item
          onClick={() => history.push("/admin/dashboard")}
          key="1"
          icon={<DashboardOutlined />}
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          onClick={() => history.push("/admin/author")}
          key="2"
          icon={<FormOutlined />}
        >
          Author Manager
        </Menu.Item>
        <Menu.Item
          onClick={() => history.push("/admin/category")}
          key="3"
          icon={<TagsOutlined />}
        >
          Category Manager
        </Menu.Item>
        <Menu.Item
          onClick={() => history.push("/admin/book")}
          key="4"
          icon={<BookOutlined />}
        >
          Book Manager
        </Menu.Item>
        <Menu.Item
          onClick={() => history.push("/admin/user")}
          key="5"
          icon={<UserOutlined />}
        >
          User Manager
        </Menu.Item>
        <Menu.Item
          onClick={() => history.push("/admin/order")}
          key="6"
          icon={<ShoppingOutlined />}
        >
          Order Manager
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
