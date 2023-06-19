import { Dispatch, SetStateAction } from "react";
import axios, { AxiosResponse } from "axios";
import { Pokemon } from "../types/pokemonType"

type PokemonData = {
    name: string;
    id: number;
    sprites: {
        front_default: string;
    };
    types: {
        type: {
            name: string;
        };
    }[];
};

const getSingleGeneration = async (
    setLoading: Dispatch<SetStateAction<boolean>>,
    generation?: string
): Promise<Pokemon[]> => {
    try {
        const promises: Promise<PokemonData>[] = [];
        const response = await axios.get(`https://pokeapi.co/api/v2/generation/${generation}`);
        const data = response.data.pokemon_species;

        for (const item of data) {
            promises.push(
                axios
                    .get<PokemonData>(item.url.replace("pokemon-species", "pokemon"))
                    .then((res: AxiosResponse<PokemonData>) => res.data)
            );
        }

        const results = await Promise.all(promises);
        const pokemons: Pokemon[] = results.map((result) => ({
            name: result.name,
            id: result.id,
            image: result.sprites.front_default,
            types: result.types.map((type) => type.type.name).join(", "),
        }));
        pokemons.sort((a, b) => a.id - b.id);
        setLoading(false)
        return pokemons;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};

export default getSingleGeneration;