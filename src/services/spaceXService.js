import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const spaceXService = {
    getAll: () => axiosService(urls.missions.base)
}

export {
    spaceXService
}