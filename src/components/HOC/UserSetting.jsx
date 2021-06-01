import {
  DashboardOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  IdcardOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import Avatar from "../../assets/images/author-img.jpg";
import { logout } from "../../actions/authAction";

const UserSetting = (props) => {
  const user = useSelector((state) => state.authReducer.user);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    props.setVisible(false);
    dispatch(logout());
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="py-10 m-auto max-w-sm">
      <Modal
        title="Log out"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex items-center text-base">
          <ExclamationCircleOutlined className="mr-4 text-yellow-500" />
          <h3>Are you want to log out?</h3>
        </div>
      </Modal>
      <div className="pb-5 mb-5 border-b">
        <img
          className="m-auto object-cover rounded-full w-full md:w-6/12 mb-5 border-4 block border-gray-500"
          src={Avatar}
          alt="avatar"
        />
        <h3 className="text-xl font-medium text-center">{user?.fullName}</h3>
      </div>
      <div>
        <ul>
          <li className="mb-4 text-lg">
            <Link to={`/profile/wishlist`} className="flex items-center">
              <HeartOutlined className="mr-3 text-red-500 " />
              My wishList
            </Link>
          </li>
          <li className="mb-4 text-lg">
            <Link className="flex items-center">
              <DashboardOutlined className="mr-3 text-green-700" />
              History
            </Link>
          </li>
          <li className="mb-4 text-lg">
            <Link to="/profile" className="flex items-center">
              <IdcardOutlined className="mr-3 text-blue-500" />
              My Profile
            </Link>
          </li>
          <li className="mb-4 text-lg">
            <div className="flex items-center cursor-pointer hover:text-red" onClick={showModal}>
              <PoweroffOutlined className="mr-3 text-gray-400" />
              Log out
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserSetting;
