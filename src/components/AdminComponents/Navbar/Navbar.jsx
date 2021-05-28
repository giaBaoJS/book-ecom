import {
  BellOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import Layout, { Header } from "antd/lib/layout/layout";
import React from "react";

const Navbar = ({ isOpen, setIsOpen }) => {
  return (
    <Header
      className="site-layout-background flex flex-row justify-between items-center px-5 border-b border-gray-400 "
      style={{ height: "10%" }}
    >
      {isOpen ? (
        <MenuUnfoldOutlined
          className="trigger text-2xl"
          onClick={() => setIsOpen(false)}
        />
      ) : (
        <MenuFoldOutlined
          className="trigger text-2xl"
          onClick={() => setIsOpen(true)}
        />
      )}
      <Layout className="flex flex-row justify-end items-center bg-white">
        <Badge dot offset={[0, 6]} className="text-lg mr-5">
          <BellOutlined />
        </Badge>
        <Avatar
          size="large"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      </Layout>
    </Header>
  );
};

export default Navbar;
