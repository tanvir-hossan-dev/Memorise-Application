import React from "react";
import { useSelector } from "react-redux";

const Post = () => {
  const selector = useSelector((item) => item.postReducers);
  console.log(selector);
  return <div>Post</div>;
};

export default Post;
