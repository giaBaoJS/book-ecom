import React, { useEffect, useState } from "react";
import { Form, Input, Button, DatePicker } from "antd";

import "./Profile.scss";
import Avatar from "../../assets/images/author-img.jpg";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { updateUser } from "../../actions/authAction";
const dateFormat = "YYYY/MM/DD";

const Profile = () => {
  const user = useSelector((state) => state.authReducer.user);
  const [isEdit, setEdit] = useState(true);
  const [form] = Form.useForm();

  useEffect(() => {
    if (user)
      form.setFieldsValue({
        fullname: user.fullName,
        email: user.email,
        birthDay: moment(user.birthDay, "YYYY-MM-DD"),
        phonenumber: user.phoneNumber,
      });
  }, [form, user]);

  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Success:", values);
    setEdit(true);
    const value = {
      ...values,
      birthDay: values["birthDay"].format("YYYY-MM-DD"),
    };
    dispatch(updateUser(user.id, value));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleEdit = () => {
    setEdit(!isEdit);
  };
  return (
    <div className="profile py-20">
      <div className="container">
        <div className="py-20 max-w-4xl m-auto bg-white rounded-xl px-10">
          <div className="mb-10 relative">
            <img
              className="object-cover m-auto rounded-full w-60"
              src={Avatar}
              alt="avatar"
            />
            <div className="absolute top-0 right-0">
              {isEdit ? (
                <Button
                  className="text-right bg-red-500 text-white hover:text-red-500 hover:bg-white hover:border-red-500"
                  size="large"
                  onClick={() => handleEdit()}
                >
                  Edit
                </Button>
              ) : null}
            </div>
          </div>
          <div>
            <Form
              form={form}
              name="basic"
              layout="vertical"
              size="large"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Fullname"
                name="fullname"
                rules={[
                  {
                    required: true,
                    message: "Please input your fullname!",
                  },
                ]}
              >
                <Input disabled={isEdit} placeholder="Your fullname..." />
              </Form.Item>
              <Form.Item label="DatePicker" name="birthDay">
                <DatePicker disabled={isEdit} format={dateFormat} />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Email is not a valid email!",
                    type: "email",
                  },
                ]}
              >
                <Input disabled={isEdit} placeholder="Your email..." />
              </Form.Item>
              <Form.Item
                label="Phone number"
                name="phonenumber"
                rules={[
                  {
                    required: true,
                    message: "Number is not and Valid",
                    type: "string",
                  },
                ]}
              >
                <Input disabled={isEdit} placeholder="Your phone number..." />
              </Form.Item>
              {isEdit ? null : (
                <>
                  <Button className="mr-5" type="primary" htmlType="submit">
                    Update
                  </Button>
                  <Button onClick={() => handleEdit()}>Cancel</Button>
                </>
              )}
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
