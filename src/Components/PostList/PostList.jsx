import LikeDislikeButton from '../LikeDislikeButton/LikeDislikeButton';
import './PostList.css'

const PostList = (props) => {
    return ( 
        <body>
          {props.parentEntries.map((entry) => {
            return (
                <div className='post'>
                    <div>
                    {entry.name}
                    </div>
                    <div>
                    {entry.post}
                    </div>
                    <LikeDislikeButton/>
                    <hr></hr>
                </div>
             )
          })}
        </body>
    );
}
 
export default PostList;