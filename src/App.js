import React, { useState } from 'react';
import PostList from './Components/PostList/PostList'
import CreatePostForm from './Components/CreatePostForm/CreayePostForm';
import NavBar from './Components/NavBar/NavBar';


function App() {

  const [entries, setEntries] = useState()

  function addNewEntry(entry){
    let tempEntries = [entry, ...entries]
    setEntries(tempEntries);
  }
  return (
    <div>
      <NavBar/>
      <CreatePostForm addNewEntryProperty={addNewEntry}/>
      <PostList/>
    </div>
  );
}

export default App;
