import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {commentsService} from "../../services/commentsService";

import {Post} from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState({})
    const {state:{postId}} = useLocation();
    // console.log(posts)
    // console.log(commentsService.getPostById(postId).then(({data})=>setPosts(data)))

    useEffect(()=> {
        commentsService.getPostById(postId).then(({data})=>setPosts(data))
    },[postId])

    return (
        <div>
            {/*{posts.map(post => <Post key={post.id} post={post}/>)}*/}
            <Post key={posts.id} post={posts}/>
        </div>
    );
};

export {Posts};