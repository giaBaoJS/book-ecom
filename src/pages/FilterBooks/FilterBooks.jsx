import React, { useEffect, useState } from "react";
import "./FilterBooks.scss";
import { Select } from "antd";
import { Pagination } from "antd";
import Book from "../../components/Book/Book";
import { useDispatch, useSelector } from "react-redux";
import { getBooksByFilter } from "../../actions/bookAction";
import FillterCollapse from "../../components/FilterCollapse/FillterCollapse";
const { Option } = Select;

const FilterBooks = () => {
  const dispatch = useDispatch();
  const { bookbyFilter } = useSelector((state) => state.bookReducer);
  const { booksInCart } = useSelector((state) => state.bookReducer);
  const { booksInWishList } = useSelector((state) => state.bookReducer);
  const { count } = useSelector((state) => state.bookReducer);
  const [pageIndex, setPageIndex] = useState(1);
  const pageSize = 12;
  useEffect(() => {
    dispatch(getBooksByFilter(`?Skip=${pageIndex}&Offset=${pageSize}`));
    // dispatch(getBooksByFilter(""));
  }, [dispatch, pageIndex]);
  function handleChange(value) {
    const queryString = `?OrderBy=${value}&Skip=${pageIndex}&Offset=${pageSize}`;
    dispatch(getBooksByFilter(queryString));
  }
  const onChange = (e) => {
    setPageIndex(e);
  };
  return (
    <div className="filter-books py-24">
      <div className="container">
        <div className="flex flex-wrap wrap-books">
          <div className="col-3 col">
            <FillterCollapse />
          </div>
          <div className="col-9 col">
            <div className="filter__top flex flex-col-reverse md:flex-row   items-center justify-between mb-8">
              <p className="text-lg">
                Showing all{" "}
                <span className="font-medium">{bookbyFilter?.length}</span>{" "}
                result
              </p>
              <div>
                <Select
                  className="mb-4 md:mb-0 filter__select"
                  style={{ width: 200 }}
                  onChange={handleChange}
                  placeholder="Sort by"
                >
                  <Option value="0">Price (High - Low)</Option>
                  <Option value="1">Price (Low - High)</Option>
                  <Option value="2">Newest</Option>
                  <Option value="3">Most Favorite</Option>
                </Select>
              </div>
            </div>
            <div className="filter___mid">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
                {bookbyFilter?.map((item, index) => (
                  <Book
                    key={index}
                    book={item}
                    isInWishList={booksInWishList.find(
                      (i) => i.book.id === item.id
                    )}
                    isInCart={booksInCart.find((i) => i.book.id === item.id)}
                  />
                ))}
              </div>
              <Pagination
                className="text-center"
                defaultCurrent={pageIndex}
                defaultPageSize={pageSize}
                onChange={onChange}
                total={count}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBooks;
