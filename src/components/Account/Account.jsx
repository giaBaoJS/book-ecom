import React, { useState } from "react";
import { Form, Input, Button, Checkbox, DatePicker } from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, register } from "../../actions/authAction";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
const dateFormat = "YYYY/MM/DD";

const Account = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLogin, setLogin] = useState(true);
  const [form] = Form.useForm();

  const layout = {
    labelCol: {
      span: 0,
    },
    wrapperCol: {
      span: "full",
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 0,
    },
  };
  const onFinish = (values) => {
    if (isLogin) {
      dispatch(login(values));
      history.push("/");
    } else {
      const value = {
        ...values,
        birthDay: values["birthDay"].format("YYYY-MM-DD"),
      };
      dispatch(register(value));
      form.resetFields();

      setLogin(true);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const changeStatus = () => {
    form.resetFields();
    setLogin(!isLogin);
  };
  return (
    <div className="container py-10">
      <div className="max-w-2xl m-auto p-5 border border-gray-300 shadow-lg">
        {isLogin ? (
          <>
            <h3 className="text-3xl font-medium mb-5">Login</h3>
            <Form
              {...layout}
              form={form}
              name="basic"
              layout="vertical"
              initialValues={{
                remember: true,
              }}
              size="large"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Password"
                />
              </Form.Item>

              <div className="flex justify-between items-center">
                <Form.Item {...tailLayout} valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <div
                  className="cursor-pointer hover:text-blue-500"
                  onClick={changeStatus}
                >
                  Don't Have Account?
                </div>
              </div>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </>
        ) : (
          <>
            <h3 className="text-3xl font-medium mb-5">Register Account</h3>
            <Form
              {...layout}
              name="basic"
              layout="vertical"
              size="large"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input placeholder="Enter username..." />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password placeholder="Enter password..." />
              </Form.Item>
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
                <Input placeholder="Your fullname..." />
              </Form.Item>
              <Form.Item label="DatePicker" name="birthDay">
                <DatePicker format={dateFormat} />
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
                <Input placeholder="Your email..." />
              </Form.Item>
              <Form.Item
                label="Phonenumber"
                name="phonenumber"
                rules={[
                  {
                    required: true,
                    message: "Number is not and Valid",
                    type: "string",
                  },
                ]}
              >
                <Input placeholder="Your phone number..." />
              </Form.Item>

              <div
                className="cursor-pointer mb-5 hover:text-blue-500"
                onClick={changeStatus}
              >
                Already Have Account?
              </div>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
              </Form.Item>
            </Form>
          </>
        )}
      </div>
    </div>
  );
};

export default Account;
