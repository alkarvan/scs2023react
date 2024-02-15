const baseURL = 'https://jsonplaceholder.typicode.com'

const users = '/users'
const posts = '/posts'
const comments = '/comments'


const urls = {
    users: {
        base: users,
        getById: (id) => `${users}/${id}`
    },
    posts:{
        base: posts
    },
    comments:{
        base: comments
    },
    // posts:{
    //     base: posts,
    //     getPostById: (postId) => `${posts}/${postId}`
    // },
};

export {
    baseURL,
    urls
};