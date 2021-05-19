import React from "react";
import { Form, InputNumber, Button } from "antd";
import { Link } from "react-router-dom";
import { HeartFilled } from "@ant-design/icons";

const AddCard = () => {
  const [form] = Form.useForm();

  return (
    <div className="border border-gray-300">
      <div className="p-6 bg-gray-100	">
        <span className="text-2xl font-medium">$59.95</span>
      </div>
      <div className="p-5">
        <Form form={form} layout="vertical">
          <Form.Item>
            <InputNumber className="text-center" defaultValue={1} min="0" />
          </Form.Item>
          <Form.Item>
            <Button className="bg-gray-600 text-white text-base py-6 flex items-center justify-center">
              Add to Cart
            </Button>
          </Form.Item>
        </Form>
        <div>
          <Link className="flex items-center justify-center text-base heart">
            {" "}
            <HeartFilled className="mr-3" /> Add to wishlist
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
