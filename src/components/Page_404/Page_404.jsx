import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

const Page_404 = () => {
  return (
    <div className="text-center py-60">
      <h3 className="text-9xl mb-8 font-bold">404</h3>
      <p className="text-2xl font-medium mb-4">
        Woops, looks like this page does not exist
      </p>
      <span className="block text-lg mb-4">
        You could either go back or go to homepage
      </span>
      <Button type="primary" size="large">
        <Link to="/">Go Back To Home</Link>
      </Button>
    </div>
  );
};

export default Page_404;
