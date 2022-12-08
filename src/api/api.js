import axios from "axios";

export async function getPokemon(id) {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = res.data;
  return pokemon;
}
