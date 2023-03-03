import React, { useState } from 'react';
import Post from './Components/Post/Post';
import PostList from './Components/PostList/PostList'
import CreatePostForm from './Components/CreatePostForm/CreayePostForm';
import NavBar from './Components/NavBar/NavBar';


function App() {
  return (
    <div>
      <NavBar/>
      <CreatePostForm/>
      <Post/>
      <PostList/>
    </div>
  );
}

export default App;
