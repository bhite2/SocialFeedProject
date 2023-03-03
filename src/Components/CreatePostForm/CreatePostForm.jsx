import React, { useState } from "react";

const CreatePostForm = (props) => {

    const[name, setName] = useState('')
    const[post, setPost] = useState('')

function handleSubmit(event) {
    event.preventDefault();
    let newEntry = {
        name: name,
        post: post
    };
    console.log(newEntry);
    props.addNewEntryProperty(newEntry)
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type = 'text' value ={name} onChange={(event) => setName(event.target.value)}></input>
            </div>
            <div>
                <label>Post</label>
                <input type='textarea' value={post} onChange={(event) => setPost(event.target.value)}></input>
            </div>
            <div>
                <button type='submit'>Post</button>
            </div>

        </form>
     );
}
 
export default CreatePostForm;