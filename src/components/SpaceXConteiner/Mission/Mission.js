const Mission = ({mission}) => {
    const {mission_name, launch_year, links} = mission;


    return (
        <div>
            <div>mission_name:{mission_name}</div>
            <div>launch_year:{launch_year}</div>
            <img src={links.mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export {Mission};
