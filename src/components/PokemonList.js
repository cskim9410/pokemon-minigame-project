import classes from "./PokemonList.module.css";
import { useContext } from "react";
import { PokemonContext } from "./../store/ContextProvider";

const PokemonList = ({ pokemon, letgo }) => {
  const pokeCtx = useContext(PokemonContext);
  return (
    <li key={Math.random()} className={classes.list}>
      <img src={pokemon.sprites.front_default} />
      <span>name: {pokemon.name}</span>
      <button onClick={() => pokeCtx.removePok(pokemon.id)}>놓아주기</button>
      <button
        onClick={() => {
          console.log(pokemon.stats);
        }}
      >
        상세보기
      </button>
    </li>
  );
};

export default PokemonList;
