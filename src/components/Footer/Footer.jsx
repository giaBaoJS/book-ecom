import React from "react";
import { Link } from "react-router-dom";
import CreditImg from "../../assets/images/credit-cards.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container pt-20">
          <div className="footer__top text-center mb-20">
            <h2 className="text-3xl font-medium mb-2">Join Our Newsletter</h2>
            <p className="text-lg">
              Signup to be the first to hear about exclusive deals, special
              offers and upcoming collections
            </p>
          </div>
          <div className="footer__mid pb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
              <div>
                <h4 className="mb-5 text-lg font-medium">Explore</h4>
                <ul>
                  <li className="py-2">
                    <Link to="/">About us</Link>
                  </li>
                  <li className="py-2">
                    <Link to="/">Sitemap</Link>
                  </li>
                  <li className="py-2">
                    <Link to="/">Bookmarks</Link>
                  </li>
                  <li className="py-2">
                    <Link to="/">Sign in/Join</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-5 text-lg font-medium">Customer Service</h4>
                <ul>
                  <li className="py-2">
                    <Link to="/">Help Center</Link>
                  </li>
                  <li className="py-2">
                    <Link to="/">Returns</Link>
                  </li>
                  <li className="py-2">
                    <Link to="/">Product Recalls</Link>
                  </li>
                  <li className="py-2">
                    <Link to="/">Accessibility</Link>
                  </li>
                  <li className="py-2">
                    <Link to="/">Contact Us</Link>
                  </li>
                  <li className="py-2">
                    <Link to="/">Store Pickup</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-5 text-lg font-medium">Policy</h4>
                <ul>
                  <li className="py-2">
                    <Link to="/">Return Policy</Link>
                  </li>
                  <li className="py-2">
                    <Link to="/">Terms Of Use</Link>
                  </li>
                  <li className="py-2">
                    <Link to="/">Security</Link>
                  </li>
                  <li className="py-2">
                    <Link to="/">Privacy</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-5 text-lg font-medium">Categories</h4>
                <ul>
                  <li className="py-2">
                    <Link to="/">Action</Link>
                  </li>
                  <li className="py-2">
                    <Link to="/">Comedy</Link>
                  </li>
                  <li className="py-2">
                    <Link to="/">Drama</Link>
                  </li>
                  <li className="py-2">
                    <Link to="/">Horror</Link>
                  </li>
                  <li className="py-2">
                    <Link to="/">Kids</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            <div className="flex flex-col md:flex-row text-center md:text-left justify-between py-8">
              <p className="text-base mb-4 md:mb-0">
                ©2020 Book Ecom. All rights reserved
              </p>
              <div>
                <img src={CreditImg} alt="credit-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
