import { useContext } from "react";
import { PokemonContext } from "./../../../store/ContextProvider";

export const useCaughtPokemon = () => {
  const { pokemon: caughtPokemonList } = useContext(PokemonContext);
  return caughtPokemonList.map((pokemon) => pokemon.sprites["front_default"]);
};
