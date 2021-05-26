import React from "react";
import { useSelector } from "react-redux";

const SideCart = () => {
  return (
    <div className="cart-totals bg-white border border-black mb-7">
      <div className="cart-totals__top p-6 border-b-2 border-gray-300">
        <h3 className="font-medium text-xl mb-6">Cart Totals</h3>
        <div className="flex justify-between mb-4">
          <p className="text-sm font-medium">Subtotal</p>
          <span className="text-sm">$107.05</span>
        </div>
        <div className="flex justify-between mb-4">
          <p className="text-sm font-medium">US</p>
          <span className="text-sm">$12.21</span>
        </div>
        <div className="flex justify-between mb-4">
          <p className="text-sm font-medium">Shipping</p>
          <span className="text-sm">$15.00</span>
        </div>
      </div>
      <div className="cart-totals__mid p-6 border-b-1">
        <div className="flex justify-between">
          <h3 className="font-medium text-xl">Total</h3>
          <span className="text-lg font-semibold">$134.26</span>
        </div>
      </div>
    </div>
  );
};

export default SideCart;
