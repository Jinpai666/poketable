import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import getPokemonTypes from "../services/getTypes";

type SingleType = {
    name: string;
    url: string;
};

function Home() {
    const [types, setTypes] = useState<SingleType[]>([]);

    useEffect(() => {
        getPokemonTypes().then((result) =>
            setTypes(result?.data.results as SingleType[])
        );
    }, []);

    return (
        <div>
            <h1>Choose pokemon type:</h1>
            <ul>
                {types.map((type) => (
                    <li>
                        <Link key={type.name} to={`/${type.name}`}>
                            {type.name}
                        </Link>
                    </li>
                ))}
            </ul>

            <button onClick={() => console.log("types", types)}>test</button>
        </div>
    );
}

export default Home;
