import axios from "axios";

const getPokemonGenerations = async () => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/generation");
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default getPokemonGenerations;