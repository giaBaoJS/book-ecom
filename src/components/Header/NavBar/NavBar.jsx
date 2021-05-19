import React, { useState } from "react";
import { Menu } from "antd";
import { MailOutlined } from "@ant-design/icons";

const NavBar = () => {
  const [mail, setMail] = useState("mail");

  const handleClick = (e) => {
    setMail(e.key);
  };

  return (
    <div className="container">
      <Menu
        onClick={(e) => handleClick(e)}
        selectedKeys={mail}
        mode="horizontal"
      >
        <Menu.Item key="home" icon={<MailOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Books
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default NavBar;
