import {apiService} from "./apiService";
import {urls} from "../constants";

const characterService = {
    getAll: () => apiService.get((urls.character.base))
}

export {
    characterService
}