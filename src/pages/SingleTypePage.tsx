import {Link, useParams} from "react-router-dom";

function SingleTypePage() {
    const {pokemonType} = useParams()

    return (
        <>
            <div>Type page: {pokemonType}</div>
            <Link to={`/${pokemonType}/:pokemon1`}>Poke 1</Link>
            <Link to={`/${pokemonType}/:pokemon2`}> Poke 2</Link>
        </>
    );
}

export default SingleTypePage;