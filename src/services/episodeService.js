import {apiService} from "./apiService";
import {urls} from "../constants";

const episodeService = {
    getAll: () => apiService.get(urls.episode.base)

    }

    export {
    episodeService
    }