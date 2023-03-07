import LikeDislikeButton from '../LikeDislikeButton/LikeDislikeButton';

const PostList = (props) => {
    return ( 
        <body>
          {props.parentEntries.map((entry) => {
            return (
                <div>
                    <div>
                    {entry.name}
                    </div>
                    <div>
                    {entry.post}
                    </div>
                    <LikeDislikeButton/>
                </div>
             )
          })}
        </body>
    );
}
 
export default PostList;