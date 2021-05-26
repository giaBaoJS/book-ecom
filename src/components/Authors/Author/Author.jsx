import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../assets/images/author-img.jpg";
const Author = ({author}) => {
  return (
    <div className="author text-center">
      <Link>
        <img className="rounded-full mb-4 m-auto" style={{width:"142px"}} src={Avatar} alt="author-avatar" />
        <h4 className="text-base font-medium">{author.name}</h4>
        <span className="text-gray-500">{author.bookCount} spanublished Books</span>
      </Link>
    </div>
  );
};

export default Author;
