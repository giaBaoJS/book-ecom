import { RightOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

const TitleHome = ({ name }) => {
  return (
    <div className="flex items-start flex-col md:flex-row md:items-center justify-between mb-10 px-5 lg:px-0">
      <h3 className=" text-xl md:text-3xl font-medium mb-4 md:mb-0 ">{name}</h3>
      <Link className="text-lg flex items-center" to="/book/filter">
        <span className="mr-4">View All</span>
        <RightOutlined className="mt-1" />
      </Link>
    </div>
  );
};

export default TitleHome;
