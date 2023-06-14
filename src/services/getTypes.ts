import axios from "axios";

const getPokemonTypes = async () => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/type");
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default getPokemonTypes;