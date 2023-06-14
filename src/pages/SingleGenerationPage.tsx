import {Fragment} from 'react'
import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import getSingleGeneration from "../services/getSingleGeneration";
import { Pokemon } from "../types/pokemonType";

function SingleGenerationPage() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const { generation, pokemon } = useParams<{ generation: string; pokemon?: string }>();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getSingleGeneration(generation);
            setPokemons(data);
        };
        fetchData();
    }, [generation]);

    return (
        <>
            <div>
                <button onClick={() => console.log(pokemons)}>test</button>
                <div>Generation {generation}</div>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Types</th>
                    </tr>
                    </thead>
                    <tbody>
                    {pokemons.map((singlePokemon) => (
                            <Fragment key={singlePokemon.id} >
                                <tr >
                                    <td>
                                        <Link to={`/${generation}/${singlePokemon.name}`}>
                                            {singlePokemon.name}
                                        </Link>
                                    </td>
                                    <td>{singlePokemon.id}</td>
                                    <td>
                                        <img src={singlePokemon.image} alt="pokemon image" />
                                    </td>
                                    <td>{singlePokemon.types}</td>
                                </tr>
                                {pokemon === singlePokemon.name && <tr>
                                    <td>
                                        <table>
                                            <thead>
                                            <tr>
                                                <th>detail1</th>
                                                <th>detail2</th>
                                                <th>detail3</th>
                                                <th>detail4</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>a</td>
                                                <td>b</td>
                                                <td>c</td>
                                                <td>d</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>

                                </tr>}
                            </Fragment>


                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default SingleGenerationPage;
