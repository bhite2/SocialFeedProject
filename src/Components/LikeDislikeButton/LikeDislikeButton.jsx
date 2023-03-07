import React, { useState } from 'react';
import './LikeDislike.css'

const LikeDislikeButton = (props) => {

    const [buttonLike, setButtonLike] = useState('inactive')
    const [buttonDislike, setButtonDislike] = useState('inactive')

    function handleLike() {
        if (buttonLike === 'inactive') {
            setButtonLike('active')
            setButtonDislike('inactive');
        }
        else{
            setButtonLike('inactive');
        }
    }
    function handleDislike() {
        if (buttonDislike === 'inactive') {
            setButtonDislike('active')
            setButtonLike('inactive');
        }
        else{
            setButtonDislike('inactive');
        }
    }
    
    return ( 
        <div>
            <div>
                <button className={buttonLike} onClick={handleLike}>Like</button>
            </div>
            <div>
                <button className={buttonDislike} onClick={handleDislike}>Dislike</button>
            </div>
            
        </div>

     );
}
 
export default LikeDislikeButton;


