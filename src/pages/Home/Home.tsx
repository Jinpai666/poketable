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
            <h1 className="homepage__welcome-title">Welcome to Poketable!</h1>
            <h2 className="homepage__text">Choose a generation to see:</h2>
            <ul className="homepage__list">
                {generations.map((generation, idx) => {
                    const romanNumeral = generation.name.replace('generation-', '').toUpperCase();
                    const generationName = generation.name.replace('-', ' ').replace('g', 'G').slice(0,10);
                    const formattedName = `${generationName} ${romanNumeral}`;

                    return (
                        <li className="homepage__list-item" key={idx}>
                            <Link className="homepage__list-item_link"  to={`/${idx+1}`}>
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
