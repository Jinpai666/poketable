import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import getPokemonGenerations from "../../services/getPokemonGenerations";
import "./home.scss"

type GenerationData = {
    name: string;
}

function Home() {
    const [generations, setGenerations] = useState<GenerationData[]>([]);

    useEffect(() => {
        getPokemonGenerations().then((result) =>
            setGenerations(result?.data.results as GenerationData[])
        );
    }, []);

    return (
        <div className="homepage">
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
