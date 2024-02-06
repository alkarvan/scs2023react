import {useEffect, useState} from "react";
import {Mission} from "../Mission/Mission";
import css from './Missions.module.css'
import {spaceXService} from "../../../services/spaceXService";

const Missions = () => {
    const [missions, setMissions] = useState([])

    useEffect(() => {
        spaceXService.getAll().then(({data})=> setMissions(data))
        }, []);


    return (
        <div className={css.Missions}>
                {
                    missions.map(mission => <Mission key={mission.flight_number} mission={mission}/>)
                    // missions.filter((mission,launch_year) => {
                    //     if (launch_year !== '2020') {
                    //         return <Mission key={mission.flight_number} mission={mission}/>
                    //     }
                    // })
                }


             <hr/>
        </div>
    );
};

export {Missions};