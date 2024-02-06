import {useEffect, useState} from "react";
import {Post} from "../Post/Post";
// import axios from "axios";
// import {axiosService} from "../../../services/axiosService";
// import {urls} from "../../../constants/urls";
import {postService} from "../../../services/postService";
import {PostDetails} from "../PostDetails/PostDetails";
import css from './Posts.module.css'

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState(null)

    useEffect(() => {
        postService.getAll().then(({data})=> setPosts(data))
        }, []);

    const getCurrentPost = (post) => {
         setPostDetails(post)
    }

    return (
        <div className={css.Posts}>
            <div>
                {posts.map(post => <Post key={post.id} post={post} getCurrentPost={getCurrentPost}/>)}
            </div>
            <hr/>
            {
                /*{postDetails !== null && <PostDetails  postDetails={postDetails}/>}*/
                postDetails && <PostDetails  postDetails={postDetails}/>
            }
        </div>
    );
};

export {Posts};