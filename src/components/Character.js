const Character = ({id,name,status,species,gender,image}) => {
    return (
        <div>
            <h1>{id}</h1>
            <h2>{name}</h2>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <img
                src={image}
                alt={name}
            />
        </div>
    );
};

export {Character};
