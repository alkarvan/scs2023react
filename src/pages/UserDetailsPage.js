import {UsersDetails} from "../components/UsersContainer/UsersDetails";
import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {usersService} from "../services/usersService";

const UserDetailsPage = () => {
    const [userDetails, setUserDetails] = useState(null);
    const {id} = useParams();

    const {state} = useLocation();

    useEffect(()=>{
        if (state?.user) {
            setUserDetails(state.user)
        } else {
            usersService.getById(id).then(({data})=>setUserDetails(data))
        }

    },[id, state])
    return (
        <div>
            {userDetails&&<UsersDetails userDetails={userDetails}/>}
        </div>
    );
};

export {UserDetailsPage};