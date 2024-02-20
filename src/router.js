import React from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {ErrorPage} from "./pages/ErrorPage";
import {UsersPage} from "./pages/UsersPage";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {usersService} from "./services/usersService";



const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, errorElement:<ErrorPage/>, children:[
            {index:true, element:<Navigate to={'users'}/>},
            // {
            //     // path:'users', element:<UsersPage/>, loader: () => usersService.getAll(), children: [
            //     //     {
            //     //         path: ':id', element:<UserDetailsPage/>
            //     //     }
            //     //
            //     // ]
    // },
            {
                path: 'users', element: <UsersPage/>, loader: () => usersService.getAll()
            },
            {
                path: '', element:<UserDetailsPage/>, loader: ({params:{id}}) => usersService.getById(id)
            },
            // {
            //     path:'users', element:<UsersPage/>, loader: () => usersService.getAll(), children: [
            //         {
            //             path: ':id', element:<UserDetailsPage/>, loader: ({params:{id}}) => usersService.getById(id.toString())
            //         }
            //
            //     ]
            // },



        ]
    }

])

export {
    router
}