import React from "react";

export const FetchedPosts = ({ posts }) => {
  if (!posts.length) {
    return <button className="btn btn-primary">Upload new posts</button>;
  }
};
