const Post = ({post}) => {
    const {userId, id, title,body} = post;
    return (
        <div>
            <h1>POST details by postID of comments:</h1>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {Post};