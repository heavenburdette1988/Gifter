import React from "react";
import "./App.css";
import { PostProvider } from "./providers/PostProvider";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import SearchBar2 from "./components/SearchBar2";



function App() {
  return (
    <div className="App">
      <PostProvider>
        <PostForm/>
        <SearchBar2/>
        <PostList />
      </PostProvider>
    </div>
  );
}
export default App;
