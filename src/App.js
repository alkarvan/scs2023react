import {Character} from "./components/Character";

const App = () => {
    const characters = [
        {
            id:'66',
            name:'Coach Feratu (Balik Alistane)',
            status:'Dead',
            species:'Mythological Creature',
            gender:'Male',
            image:'https://rickandmortyapi.com/api/character/avatar/66.jpeg'
        },
        {
            id:'124',
            name:'Father Bob',
            status:'Alive',
            species:'Human',
            gender:'Male',
            image:'https://rickandmortyapi.com/api/character/avatar/124.jpeg'
        },
        {
            id:'196',
            name:'Krombopulos Michael',
            status:'Dead',
            species:'Alien',
            gender:'Male',
            image:'https://rickandmortyapi.com/api/character/avatar/196.jpeg'
        },
        {
            id:'309',
            name:'Scrotian',
            status:'Alive',
            species:'Animal',
            gender:'Male',
            image:'https://rickandmortyapi.com/api/character/avatar/309.jpeg'
        },
        {
            id:'616',
            name:'Phantom of the Opera Fan',
            status:'Alive',
            species:'Alien',
            gender:'Male',
            image:'https://rickandmortyapi.com/api/character/avatar/616.jpeg'
        },
        {
            id:'708',
            name:'Squid Costume Summer',
            status:'Dead',
            species:'Robot',
            gender:'Female',
            image:'https://rickandmortyapi.com/api/character/avatar/708.jpeg'
        }
    ]

    return (
        <div>
            {characters.map(character=><Character
                id={character.id}
                name={character.name}
                status={character.status}
                species={character.species}
                gender={character.gender}
                image={character.image}
            />)}
        </div>
    );
};

export {App};