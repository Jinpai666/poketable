import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function SingleTypePage() {
    const {pokemon, pokemonType} = useParams<{ pokemonType: string; pokemon?: string }>();

    useEffect(() => {
    }, []);
    return (
        <>
            <div>
                <div>Type page: {pokemonType}</div>
                <Link to={`/${pokemonType}/pokemon1`}>Poke 1</Link>
                <Link to={`/${pokemonType}/pokemon2`}> Poke 2</Link>
            </div>
            <div>
                <h2>pokemon details</h2>
                <p>{pokemon}</p>
            </div>
        </>
    );
}

export default SingleTypePage;
