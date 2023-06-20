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
        pokemon === redirectTarget
        ? navigate(`/${generation}`)
        : navigate(`/${generation}/${redirectTarget}`);
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
        <div className="generationPage">
            {loading ? (
                <LoadingIndicator/>
            ) : (
                <div>
                    <div className="generationNumber">Generation {generation}</div>
                    <table className="table">
                        <thead className="table__head">
                        <tr>
                            <th className="table__cell table__cell_head">Name</th>
                            <th className="table__cell table__cell_head">ID</th>
                            <th className="table__cell table__cell_head">Image</th>
                            <th className="table__cell table__cell_head">Types</th>
                        </tr>
                        </thead>
                        <tbody>
                        {pokemons.map((singlePokemon) => (
                            <Fragment key={singlePokemon.id}>
                                <tr
                                    className={pokemon === singlePokemon.name ? "table__row_selected" : "table__row"}
                                    onClick={() => handleOnClick(singlePokemon.name)}>
                                    <td className="table__cell">
                                        {singlePokemon.name.charAt(0).toUpperCase() +
                                            singlePokemon.name
                                                .slice(1)
                                                .replace("-m", " Male")
                                                .replace("-f", " Female")}
                                    </td>
                                    <td className="table__cell">{singlePokemon.id}</td>
                                    <td className="table__cell">
                                        <img src={singlePokemon.image} alt="pokemon image"/>
                                    </td>
                                    <td className="table__cell">{singlePokemon.types}</td>
                                </tr>
                                {pokemon === singlePokemon.name && (
                                    <tr>
                                        <td colSpan={4}>
                                            <div className="table__details">
                                                <img
                                                    className="table__image"
                                                    src={singlePokemon.artwork}
                                                    alt="pokemon image"
                                                />
                                                <div className="table__stats">
                                                    <p className="table__detail">
                                                        HP:{" "}
                                                        <span className="table__detail-number">
                                {singlePokemon.hp}
                              </span>
                                                    </p>
                                                    <p className="table__detail">
                                                        Attack:{" "}
                                                        <span className="table__detail-number">
                                {singlePokemon.attack}
                              </span>
                                                    </p>
                                                    <p className="table__detail">
                                                        Defense:{" "}
                                                        <span className="table__detail-number">
                                {singlePokemon.defense}
                              </span>
                                                    </p>
                                                    <p className="table__detail">
                                                        Special Attack:{" "}
                                                        <span className="table__detail-number">
                                {singlePokemon.specialAttack}
                              </span>
                                                    </p>
                                                    <p className="table__detail">
                                                        Special Defense:{" "}
                                                        <span className="table__detail-number">
                                {singlePokemon.specialDefense}
                              </span>
                                                    </p>
                                                    <p className="table__detail">
                                                        Speed:{" "}
                                                        <span className="table__detail-number">
                                {singlePokemon.speed}
                              </span>
                                                    </p>
                                                </div>
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
        </div>
    );
}

export default SingleGenerationPage;
