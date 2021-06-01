import React from "react";
import { Form, InputNumber, Button } from "antd";
import { Link } from "react-router-dom";
import { HeartFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { addBookInCart } from "../../actions/bookAction";

const AddCard = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { bookDetail } = useSelector((state) => state.bookReducer);
  const user = useSelector((state) => state.authReducer.user);

  const onFinish = (values) => {
    const wrapData = {
      idBook: bookDetail?.id,
      idUser: user?.id,
      quantity: values.quantity,
    };
    dispatch(addBookInCart(wrapData));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="border border-gray-300">
      <div className="p-6 bg-gray-100	">
        <span className="text-2xl font-medium">${bookDetail.price}</span>
      </div>
      <div className="p-5">
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            quantity: 1,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item name="quantity">
            <InputNumber className="text-center" min="0" />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              className="bg-gray-600 text-white text-base py-6 flex items-center justify-center"
            >
              Add to Cart
            </Button>
          </Form.Item>
        </Form>
        <div>
          <Link className="flex items-center justify-center text-base heart">
            <HeartFilled className="mr-3" /> Add to wishlist
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
