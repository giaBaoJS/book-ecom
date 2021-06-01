import React from "react";
import { Form, Input, Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "./Checkout.scss";
import { placeOrder } from "../../actions/orderAction";
import { useHistory } from "react-router";
const Checkout = () => {
  const { subTotalInCart } = useSelector((state) => state.bookReducer);
  const { booksInCart } = useSelector((state) => state.bookReducer);
  const user = useSelector((state) => state.authReducer.user);
  const history = useHistory();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Success:", values);
    const value = { ...values, idUser: user.id, surcharge: 0, discount: 0 };
    dispatch(placeOrder(value));
    let secondsToGo = 5;
    const modal = Modal.success({
      title: "Thank you very much, Your order was successful",
      content: `Back to home after ${secondsToGo} second.`,
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      modal.update({
        content: `Back to home after ${secondsToGo} second.`,
      });
    }, 900);
    setTimeout(() => {
      clearInterval(timer);
      modal.destroy();
      history.push("/");
    }, secondsToGo * 1000);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="py-20 checkout">
      <h3 className="text-4xl font-medium text-center mb-20">Checkout</h3>
      <div className="container">
        <Form
          form={form}
          name="basic"
          layout="vertical"
          size="large"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div className="flex">
            <div className="w-8/12 col">
              <div className="bg-white border p-4">
                <h3 className="font-medium text-lg mb-5">Billing Detail</h3>
                <Form.Item
                  label="Address"
                  name="address"
                  className="checkout__form"
                  rules={[
                    {
                      required: true,
                      message: "Please input your address!",
                    },
                  ]}
                >
                  <Input placeholder="Your address..." />
                </Form.Item>
              </div>
            </div>
            <div className="w-4/12 col">
              <div className="cart-totals bg-white border border-black mb-7">
                <div className="cart-totals__top p-6 border-b-2 border-gray-300">
                  <h3 className="font-medium text-xl mb-6">Your Orders</h3>
                  {booksInCart.map((data, index) => (
                    <div key={index} className="flex justify-between mb-4">
                      <p className="text-base font-medium w-10/12">
                        {data.book.name} × {data.quantity}
                      </p>
                      <span className="block text-base w-2/12 text-right">
                        ${data.subTotal}
                      </span>
                    </div>
                  ))}
                </div>
                <div className=" p-6 border-b-2 border-gray-300">
                  <h3 className="font-medium text-xl mb-6">Shipping</h3>
                  <div className="flex justify-between mb-4">
                    <p className="text-base font-medium w-10/12">US</p>
                    <span className="block text-base w-2/12 text-right">
                      $10
                    </span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <p className="text-base font-medium w-10/12">Flat rate</p>
                    <span className="block text-base w-2/12 text-right">
                      $15
                    </span>
                  </div>
                </div>
                <div className="cart-totals__mid p-6 border-b-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium text-xl">Total</h3>
                    <span className="text-lg font-semibold">
                      ${subTotalInCart + 25}
                    </span>
                  </div>
                </div>
              </div>
              <Button
                className="checkout__button block w-full h-0 text-white bg-black py-8 text-center text-lg hover:text-white border-black hover:bg-black hover:border-black"
                type="primary"
                htmlType="submit"
              >
                Place Order
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Checkout;
