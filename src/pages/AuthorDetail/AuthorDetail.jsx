import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getAuthorById } from "../../actions/authorAction";
import { getBooksByFilter } from "../../actions/bookAction";
import AuthorAvatar from "../../assets/images/author-img.jpg";
import RelatedBooks from "../../shared/RelatedBooks/RelatedBooks";
import "./AuthorDetail.scss";
const AuthorDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { authorDetail } = useSelector((state) => state.authorReducer);
  const queryString = `?IdAuthor=${id}`;
  useEffect(() => {
    dispatch(getAuthorById(id));
    dispatch(getBooksByFilter(queryString));
  }, [dispatch, id, queryString]);
  return (
    <div className="py-24 author-detail">
      <div className="container">
        <div className="p-10 shadow-xl author-box rounded-lg mb-20">
          <div className="flex">
            <div className="w-1/4 px-4">
              <img
                className="object-cover w-full"
                src={AuthorAvatar}
                alt="avatar"
              />
            </div>
            <div className="w-3/4 px-4">
              <h4 className="text-sm font-medium text-gray-400 mb-1">
                THE AUTHOR
              </h4>
              <h3 className="text-2xl font-semibold text-red-400 mb-2">
                {authorDetail.name}
              </h3>
              <h3 className="text-base mb-4">
                {" "}
                Birthday: {authorDetail.birthDay}
              </h3>
              <p className="text-base">Story: {authorDetail.story}</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-center text-3xl">
            Book of{" "}
            <span className="font-semibold text-red-400">
              {authorDetail.name}
            </span>
          </h2>
          <div>
            <RelatedBooks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorDetail;
