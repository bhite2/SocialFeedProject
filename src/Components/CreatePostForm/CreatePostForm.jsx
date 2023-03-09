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
            <div className="form-group">
                <label>Name</label>
                <input type = 'text' className='form-control' value ={name} onChange={(event) => setName(event.target.value)}></input>
            </div>
            <div className="form-group">
                <label>Post</label>
                <input type='textarea' className='form-control' rows='5' value={post} onChange={(event) => setPost(event.target.value)}></input>
            </div>
            <div style={{display: 'flex', justifyContent: 'right', margin: '1em'}}>
                <button type="submit">Create</button>
            </div>

        </form>
     );
}
 
export default CreatePostForm;