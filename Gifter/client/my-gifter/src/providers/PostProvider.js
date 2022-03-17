import React, { useState } from "react";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);

  const getAllPosts = () => {
    return fetch("https://localhost:44369/api/post")
      .then((res) => res.json())
      .then(setPosts);
  };

  const addPost = (post) => {
    return fetch("https://localhost:44369/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post)
   
    }).then(getAllPosts);
  
  };
  const searchPost = (query) => {
    return fetch(`https://localhost:44369/api/Post/search?q=${query}`)
    .then((res) => res.json())
    .then(setPosts);
  };

  const GetPostByIdWithComments = (id) => {
    return fetch(`https://localhost:44369/api/Post/${id},GetPostByIdWithComments
    `).then((res) => res.json());
};

// https://localhost:44369/api/Post/1,GetPostByIdWithComments

  
  return (
    <PostContext.Provider value={{ posts, getAllPosts, addPost, searchPost, GetPostByIdWithComments }}>
      {props.children}
    </PostContext.Provider>
  );
};