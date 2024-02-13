import {apiService} from "./apiService";
import {urls} from "../constants/urls";


const commentsService = {
    getAll: () => apiService.get(urls.comments.base),
    getPostById: (PostId) => apiService.get(urls.posts.getPostById(PostId))
}

export {
    commentsService
}