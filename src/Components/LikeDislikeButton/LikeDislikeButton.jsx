import React, { useState } from 'react';
import './LikeDislike.css'

const LikeDislikeButton = (props) => {

    const [buttonLike, setButtonLike] = useState('inactive')
    const [buttonDislike, setButtonDislike] = useState('inactive')

    function handleLike() {
        if (buttonLike === 'inactive') {
            setButtonLike('like-active')
            setButtonDislike('inactive');
        }
        else{
            setButtonLike('inactive');
        }
    }
    function handleDislike() {
        if (buttonDislike === 'inactive') {
            setButtonDislike('dislike-active')
            setButtonLike('inactive');
        }
        else{
            setButtonDislike('inactive');
        }
    }
    
    return ( 
        <div>
            <div class='likedislike'>
                <button className={buttonLike} onClick={handleLike}>Like</button>
            </div>
            <div class='likedislike'>
                <button className={buttonDislike} onClick={handleDislike}>Dislike</button>
            </div>
            
        </div>

     );
}
 
export default LikeDislikeButton;


