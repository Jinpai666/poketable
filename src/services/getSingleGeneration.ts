import axios from "axios";

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

const getSingleGeneration = async (generation?: string) => {
    try {
        const promises = [];
        const pokemons = [];
        let data = [];
        const response = await axios.get(
            `https://pokeapi.co/api/v2/generation/${generation}`
        );
        data = response.data.pokemon_species;

        for (const item of data) {
            promises.push(
                axios
                    .get<PokemonData>(item.url.replace("pokemon-species", "pokemon"))
                    .then((res) => res)
            );
        }
        Promise.all(promises).then((results) => {
            const pokemons = results.map((result) => ({
                name: result.data.name,
                id: result.data.id,
                image: result.data.sprites["front_default"],
                type: result.data.types.map((type) => type.type.name).join(", "),
            }));
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export default getSingleGeneration;
