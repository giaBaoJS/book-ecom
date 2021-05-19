import React from "react";
import {
  CoffeeOutlined,
  DeploymentUnitOutlined,
  FireOutlined,
  HeartOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import TitleHome from "../../shared/TitleHome/TitleHome";

const FeatureCaterory = () => {
  return (
    <div className="container">
      <div className="py-24">
        <TitleHome name="Featured Caterories"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-5 md:gap-5 lg:gap-7">
          <div>
            <div className="p-10 bg-red-200 rounded-lg	">
              <CoffeeOutlined className="text-5xl mb-4" />
              <h4 className="text-lg  font-medium mb-1">
                Arts and Photography
              </h4>
              <Link className="text-base" to="/">
                Shop Now
              </Link>
            </div>
          </div>
          <div>
            <div className="p-10 bg-yellow-200 rounded-lg	">
              <PictureOutlined className="text-5xl mb-4 " />
              <h4 className="text-lg  font-medium mb-1">Food and Drink</h4>
              <Link className="text-base" to="/">
                Shop Now
              </Link>
            </div>
          </div>
          <div>
            <div className="p-10 bg-pink-200 rounded-lg	">
              <HeartOutlined className="text-5xl mb-4" />
              <h4 className="text-lg  font-medium mb-1">Romance</h4>
              <Link className="text-base" to="/">
                Shop Now
              </Link>
            </div>
          </div>
          <div>
            <div className="p-10 bg-blue-200 rounded-lg	">
              <FireOutlined className="text-5xl mb-4" />
              <h4 className="text-lg  font-medium mb-1">Health</h4>
              <Link className="text-base" to="/">
                Shop Now
              </Link>
            </div>
          </div>
          <div>
            <div className="p-10 bg-green-200 rounded-lg	">
              <DeploymentUnitOutlined className="text-5xl mb-4" />
              <h4 className="text-lg  font-medium mb-1">Biography</h4>
              <Link className="text-base" to="/">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCaterory;
