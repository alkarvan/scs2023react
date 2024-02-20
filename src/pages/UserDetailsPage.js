import {UsersDetails} from "../components/UsersContainer/UsersDetails";
import {useLoaderData} from "react-router-dom";
// import {useState} from "react";
// import {useLoaderData, useLocation, useParams} from "react-router-dom";
// import {useEffect, useState} from "react";
// import {usersService} from "../services/usersService";

const UserDetailsPage = () => {
    // const [userDetails, setUserDetails] = useState(null);
    // const {id} = useParams();

    // const {state} = useLocation();

    // const {data} = useLoaderData();
    const {data} = useLoaderData();
     // console.log(data)

    return (
        <div>
           <UsersDetails userDetails={data}/>
        </div>
    );
};

export {UserDetailsPage};