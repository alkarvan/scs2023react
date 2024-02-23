import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayouts} from "./layouts";
import {EpisodesPage} from "./pages";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayouts/>, children: [
            {
                index: true, element: <Navigate to={'episode'}/>
            },
            {
                path: 'episode', element: <EpisodesPage/>
            }
        ]
    }
])

export {
    router
}
