import React from "react";
import { Routes, Route } from "react-router-dom";
import PostList from "./PostList";
import PostForm from "./PostForm";
import { PostProvider } from "../providers/PostProvider";

import PostDetails from "./PostDetails";
import UserPosts from "./UserPost";
import { UserProfileProvider } from "../providers/UserProfileProvider";


const ApplicationViews = () => {
  return (
  <PostProvider>
      <UserProfileProvider>
    <Routes>
      <Route path="/" element= {<PostList />} />

      <Route path="/posts/add" element={<PostForm />} />
      <Route path="/user/:id" element={<UserPosts/>} />

      {/* <Route path="/posts/:id" element={<PostDetails/>} />   */}
      {/* need to change to form detail */}
    </Routes>
    </UserProfileProvider>
    </PostProvider>
  );
};

export default ApplicationViews;