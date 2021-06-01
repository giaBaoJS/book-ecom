import React from "react";
import "./FilterBooks.scss";
import { Collapse } from "antd";
import { Link } from "react-router-dom";
import { Select } from "antd";
import { Pagination } from "antd";
import { Slider } from "antd";
import Book from "../../components/Book/Book";
import BookImg from "../../assets/images/book-img.jpg";
const { Option } = Select;
const { Panel } = Collapse;

const test = ["Categories", "Author"];
const FilterBooks = () => {
  return (
    <div className="filter-books py-24">
      <div className="container">
        <div className="flex flex-wrap wrap-books">
          <div className="col-3 col">
            <Collapse defaultActiveKey={["0", "1", "2", "3"]}>
              {test.map((item, index) => (
                <Panel header={item} key={index}>
                  <ul>
                    {[...Array(10)].map((item, index) => (
                      <li>
                        <Link to="/">Arts & Photography</Link>
                      </li>
                    ))}
                  </ul>
                </Panel>
              ))}
              <Panel header="Filter by price" key={2}>
                <div>
                  <Slider range defaultValue={[20, 50]} />
                </div>
              </Panel>
              <Panel header="Featured Books" key={3}>
                {[...Array(4)].map((item, index) => (
                  <div className="flex mb-3">
                    <div className="w-1/4 px-2">
                      <Link to="/">
                        <img src={BookImg} alt="book-img" />
                      </Link>
                    </div>
                    <div className="w-3/4 px-2">
                      <Link to="/" className="block text-base mb-2">
                        Blindside (Michael Bennett Book 12)
                      </Link>
                      <span className="block">$15.99</span>
                    </div>
                  </div>
                ))}
              </Panel>
            </Collapse>
            ,
          </div>
          <div className="col-9 col">
            <div className="filter__top flex flex-col-reverse md:flex-row   items-center justify-between mb-8">
              <p className="text-lg">
                Showing all <span className="font-medium">20</span> result
              </p>
              <div>
                <Select
                  className="mb-4 md:mb-0"
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Sorting"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  <Option value="1">Not Identified</Option>
                  <Option value="2">Closed</Option>
                  <Option value="3">Communicated</Option>
                  <Option value="4">Identified</Option>
                  <Option value="5">Resolved</Option>
                  <Option value="6">Cancelled</Option>
                </Select>
              </div>
            </div>
            <div className="filter___mid">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
                {[...Array(12)].map((item, index) => (
                  <Book key={index} />
                ))}
              </div>
              <Pagination
                className="text-center"
                defaultCurrent={6}
                total={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBooks;
