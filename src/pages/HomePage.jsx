import React from "react";
import ListAuthors from "../components/Authors/ListAuthors";
import Banner from "../components/Banner/Banner";
import Book from "../components/Book/Book";
import FeatureCaterory from "../components/FeatureCaterory/FeatureCaterory";
import TitleHome from "../shared/TitleHome/TitleHome";
const HomePage = () => {
  return (
    <div>
      <Banner />
      <FeatureCaterory />
      <div className="py-24" style={{ backgroundColor: "#fff6f6" }}>
        <div className="container">
          <TitleHome name="Trending Book" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-5 md:gap-5 lg:gap-7">
            {[...Array(10)].map((item, index) => (
              <Book key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="authors py-12">
        <div className="container">
          <TitleHome name="Favourite Authors" />
          <ListAuthors/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
