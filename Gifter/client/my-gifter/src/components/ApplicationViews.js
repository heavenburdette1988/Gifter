import React, { useContext} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PostList from "./posts/PostList";
import PostForm from "./posts/PostForm";
import { PostProvider } from "../providers/PostProvider";

// import PostDetails from "./posts/PostDetails";
import UserPosts from "./users/UserPost";
import { UserProfileProvider } from "../providers/UserProfileProvider";
import { Login } from "./Auth/Login";
import { UserProfileContext } from "../providers/UserProfileProvider";
// import { Register } from "./Auth/Register";


const ApplicationViews = () => {
  
  const {isLoggedIn } = useContext(UserProfileContext);

    if (isLoggedIn){
    
  return (


    
  <PostProvider>
     
    <Routes>
      <Route path="/" element= {<PostList />} />

      <Route path="/posts/add" element={<PostForm />} />
      <Route path="/user/:id" element={<UserPosts/>} />
    {/* <Route path ="register" element={<Register/>}/> */}
      {/* <Route path="/posts/:id" element={<PostDetails/>} />   */}
      {/* need to change to form detail */}
      <Route
        path="*"
        element={<Navigate to="/" />} />
    </Routes>
  
    </PostProvider>
    
  );
    }
    else{
        return(
            <UserProfileProvider>
            <Routes>        
            <Route path ="login" element={<Login/>}/>   
            <Route
        path="*"
        element={<Navigate to="login" />}
    />
            </Routes>
            </UserProfileProvider>
        )
    }
};

export default ApplicationViews;