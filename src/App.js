import React, { useState } from 'react';
import PostList from './Components/PostList/PostList';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import NavBar from './Components/NavBar/NavBar';
import './App.css';


function App() {

  const [entries, setEntries] = useState([])

  function addNewEntry(entry){
    let tempEntries = [...entries, entry]
    setEntries(tempEntries);
  }
  return (
    <div>
      <div>
      <NavBar/>
      </div>
      <div>
        <div className='border-box'>
          <CreatePostForm addNewEntryProperty={addNewEntry}/>
        </div>
        <div className='border-box'>
          <PostList parentEntries={entries}/>
        </div>
      </div>

    </div>

  );
}

export default App;
