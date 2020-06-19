import React from "react";
import { Post } from "./Post";

export const Posts = ({ posts }) => {
  if (!posts.length) {
    return <p>No posts yet</p>;
  }
  return posts.map((post) => <Post post={post} key={post} />);
};
