import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import getSingleGeneration from "../services/getSingleGeneration";
import { DataFromApi } from "../types/DataFromApiType";

function SingleGenerationPage() {
    const [pokemons, setPokemons] = useState<DataFromApi[]>([]);
    const { generation, pokemon } = useParams<{ generation: string; pokemon?: string }>();

    useMemo(() => {
        getSingleGeneration(generation);
    }, [generation]);

    // useEffect(() => {
    //     setPokemons(getSingleGeneration());
    // }, []);

    return (
        <>
            <div>
                <div>Generation {generation}</div>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>URL</th>
                    </tr>
                    </thead>
                    <tbody>
                    {pokemons.map((singlePokemon) => (
                        <tr key={singlePokemon.name}>
                            <td>
                                <Link to={`/${generation}/${singlePokemon.name}`}>{singlePokemon.name}</Link>
                            </td>
                            <td>{singlePokemon.url}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div>
                <h2>pokemon details</h2>
                <p>{pokemon}</p>
            </div>
        </>
    );
}

export default SingleGenerationPage;
