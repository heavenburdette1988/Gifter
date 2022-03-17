import React, { useContext, useEffect } from "react";
import { PostContext } from "../providers/PostProvider";
import Post from "./Post";

const PostList = () => {
  const { posts, getAllPosts } = useContext(PostContext);
  //state varible^^  we do this with info that will change like adding a post to post

  useEffect(() => {
    
    getAllPosts();
  }, []);

  return (
    
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          {posts.map((singlePostInLoop) => (
            <Post key={singlePostInLoop.id} postProp={singlePostInLoop} />
            // post={singlePostInLoop}  this is passing props}
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostList;