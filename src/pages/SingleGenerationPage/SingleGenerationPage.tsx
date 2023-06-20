import {Fragment} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import {useEffect, useState, useMemo} from "react";
import getSingleGeneration from "../../services/getSingleGeneration";
import {Pokemon} from "../../types/pokemonType";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import "./singleGenerationPage.scss";

function SingleGenerationPage() {
    let navigate = useNavigate();
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(true);

    const {generation, pokemon} =
        useParams<{ generation: string; pokemon?: string }>();

    const handleOnClick = (redirectTarget: string) => {
        navigate(`/${generation}/${redirectTarget}`);
    };
    useEffect(() => {
        const fetchData = async (
            setLoading: React.Dispatch<React.SetStateAction<boolean>>
        ) => {
            const data = await getSingleGeneration(setLoading, generation);
            setPokemons(data);
        };
        fetchData(setLoading);
    }, [generation]);

    return (
        <>
            {loading ? (
                <LoadingIndicator/>
            ) : (
                <div>
                    <div>Generation {generation}</div>
                    <table className="table">
                        <thead>
                        <tr>
                            <th className="table__cell">Name</th>
                            <th className="table__cell">ID</th>
                            <th className="table__cell">Image</th>
                            <th className="table__cell">Types</th>
                        </tr>
                        </thead>
                        <tbody>
                        {pokemons.map((singlePokemon) => (
                            <Fragment key={singlePokemon.id}>
                                <tr onClick={() => handleOnClick(singlePokemon.name)}>
                                    <td className="table__cell">{singlePokemon.name}</td>
                                    <td className="table__cell">{singlePokemon.id}</td>
                                    <td className="table__cell">
                                        <img src={singlePokemon.image} alt="pokemon image"/>
                                    </td>
                                    <td className="table__cell">{singlePokemon.types}</td>
                                </tr>
                                {pokemon === singlePokemon.name && (
                                    <tr>
                                        <td colSpan={4}>
                                            <div>
                                                <img
                                                    src={singlePokemon.artwork}
                                                    alt="pokemon image"
                                                />
                                                <p>HP {singlePokemon.hp}</p>
                                                <p>Attack {singlePokemon.attack}</p>
                                                <p>Defense {singlePokemon.defense}</p>
                                                <p>Special Attack {singlePokemon.specialAttack}</p>
                                                <p>Special Defense {singlePokemon.specialDefense}</p>
                                                <p>Speed {singlePokemon.speed}</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </Fragment>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
}

export default SingleGenerationPage;
