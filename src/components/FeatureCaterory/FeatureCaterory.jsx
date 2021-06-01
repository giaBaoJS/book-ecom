import React, { useEffect } from "react";
import { CoffeeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import TitleHome from "../../shared/TitleHome/TitleHome";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../actions/categoryAction";
const color = [
  "bg-red-200",
  "bg-yellow-200",
  "bg-pink-200",
  "bg-blue-200",
  "bg-green-200",
];
const FeatureCaterory = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categoryReducer);
  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="py-24">
        <TitleHome name="Featured Caterories" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-5 md:gap-5 lg:gap-7">
          {categories.slice(0, 5).map((cate, index) => (
            <div key={index}>
              <div className={`p-10 ${color[index % 5]} rounded-lg`}>
                <CoffeeOutlined className="text-5xl mb-4" />
                <h4 className="text-lg  font-medium mb-1">{cate.name}</h4>
                <Link className="text-base" to="/">
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCaterory;
