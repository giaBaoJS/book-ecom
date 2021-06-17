import React, { useEffect } from "react";
import BookImg from "../../assets/images/book-img.jpg";
import { Collapse } from "antd";
import { Slider } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../actions/categoryAction";
import { getAllAuthor } from "../../actions/authorAction";
import { getBooksByFilter, getBooksTrending } from "../../actions/bookAction";
const { Panel } = Collapse;
const FillterCollapse = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categoryReducer);
  const { authors } = useSelector((state) => state.authorReducer);
  const { booksByTrending } = useSelector((state) => state.bookReducer);
  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getAllAuthor());
    dispatch(getBooksTrending());
  }, [dispatch]);

  const filterCategory = (value) => {
    const queryString = `?IdCategory=${value}`;
    dispatch(getBooksByFilter(queryString));
  };
  const filterAuthor = (value) => {
    const queryString = `?IdAuthor=${value}`;
    dispatch(getBooksByFilter(queryString));
  };

  function onAfterChange(value) {
    console.log("onAfterChange: ", value);
  }

  return (
    <Collapse
      className="filter-collapse"
      defaultActiveKey={["0", "1", "2", "3"]}
    >
      <Panel header="Categories" key={0}>
        <ul>
          <li className="py-1">
            <div
              className="cursor-pointer text-base hover:text-red-600 duration-500"
              onClick={() => filterCategory("")}
            >
              All
            </div>
          </li>
          {categories?.map((item, index) => (
            <li key={index} className="py-1">
              <div
                className="cursor-pointer capitalize  text-base hover:text-red-600 duration-500"
                onClick={() => filterCategory(item.id)}
              >
                {item.name.toLowerCase()}
              </div>
            </li>
          ))}
        </ul>
      </Panel>
      <Panel header="Authors" key={1}>
        <ul>
          <li className="py-1">
            <div
              className="cursor-pointer text-base hover:text-red-600 duration-500"
              onClick={() => filterAuthor("")}
            >
              All
            </div>
          </li>
          {authors?.map((item, index) => (
            <li key={index} className="py-1">
              <div
                className="cursor-pointer text-base hover:text-red-600 duration-500"
                onClick={() => filterAuthor(item.id)}
              >
                {item.name}
              </div>
            </li>
          ))}
        </ul>
      </Panel>
      <Panel header="Filter by price" key={2}>
        <div>
          <Slider
            className="py-8"
            range
            defaultValue={[20, 50]}
            onAfterChange={onAfterChange}
          />
        </div>
      </Panel>
      <Panel header="Featured Books" key={3}>
        {booksByTrending?.slice(0,4).map((book, index) => (
          <div className="flex mb-3" key={index}>
            <div className="w-1/4 px-2">
              <Link to={`/book/${book.id}`}>
                <img src={BookImg} alt="book-img" />
              </Link>
            </div>
            <div className="w-3/4 px-2">
              <Link to={`/book/${book.id}`} className="block text-base mb-2 font-medium">
                {book.name}
              </Link>
              <Link to={`/book/${book.author.id}`} className="block text-sm mb-2">
                {book.author.name}
              </Link>
              <span className="block">${book.price}</span>
            </div>
          </div>
        ))}
      </Panel>
    </Collapse>
  );
};

export default FillterCollapse;
