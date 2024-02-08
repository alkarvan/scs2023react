import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const userService = {
    getAll: () => apiService.get(urls.users),
    create: (data) => apiService.post(urls.users, data)
}

const postService = {
    getAll: () => apiService.get(urls.posts),
    create: (data) => apiService.post(urls.posts, data)
}

export {
    userService,
    postService
}