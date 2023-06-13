import { useParams } from 'react-router-dom'

function SinglePokemonPage() {
    const { pokemon, pokemonType } = useParams();
    return (
        <div>
            type: {pokemonType}
            pokedata: {pokemon}
        </div>
    );
}

export default SinglePokemonPage;