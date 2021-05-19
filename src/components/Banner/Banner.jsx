import React from "react";
import Slider from "react-slick";
import "./Banner.scss";
import BgDemo from "../../assets/images/banner-demo.png";
const Banner = () => {
  let settings = {
    dots: true,
    infinite: true,
    arrows: false,
    responsive:[],
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="banner px-5 md:px-0">
      <div className="container">
        <Slider {...settings}>
          <div className="banner__content flex-wrap items-center mb-5 ">
            <div className="flex-auto mb-7 md:mb-0">
              <p className="uppercase text-lg md:text-xl banner__title font-bold mb-2 md:mb-4">
                The bookworm editors
              </p>
              <h2>
                <span className="inline md:block text-4xl lg:text-6xl">Featured Books of the </span>
                <span className="inline md:block text-4xl lg:text-6xl font-bold">May</span>
              </h2>
            </div>
            <div className="flex-auto">
              <img className="max-w-full object-cover" src={BgDemo} alt="bgdemo" />
            </div>
          </div>

          <div className="banner__content flex-wrap items-center mb-5 ">
            <div className="flex-auto mb-7 md:mb-0">
              <p className="uppercase text-lg md:text-xl banner__title font-bold mb-2 md:mb-4">
                The bookworm editors
              </p>
              <h2>
                <span className="inline md:block text-4xl lg:text-6xl">Featured Books of the </span>
                <span className="inline md:block text-4xl lg:text-6xl font-bold">May</span>
              </h2>
            </div>
            <div className="flex-auto">
              <img className="max-w-full object-cover" src={BgDemo} alt="bgdemo" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
