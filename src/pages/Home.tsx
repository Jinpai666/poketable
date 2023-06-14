import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import getPokemonGenerations from "../services/getPokemonGenerations";
import { DataFromApi } from "../types/DataFromApiType"


function Home() {
    const [generations, setGenerations] = useState<DataFromApi[]>([]);

    useEffect(() => {
        getPokemonGenerations().then((result) =>
            setGenerations(result?.data.results as DataFromApi[])
        );
    }, []);

    return (
        <div>
            <h1>Choose pokemon type:</h1>
            <ul>
                {generations.map((generation, idx) => {
                    const romanNumeral = generation.name.replace('generation-', '').toUpperCase();
                    const generationName = generation.name.replace('-', ' ').replace('g', 'G').slice(0,10);
                    const formattedName = `${generationName} ${romanNumeral}`;

                    return (
                        <li key={idx}>
                            <Link to={`/${idx+1}`}>
                                {formattedName}
                            </Link>
                        </li>
                    );
                })}
            </ul>

        </div>
    );
}

export default Home;
