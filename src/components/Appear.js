import { useContext, Fragment, useState, useEffect } from "react";
import { PokemonContext } from "../store/ContextProvider";
import PokemonList from "./PokemonList";

const Appear = ({ appearPokemon, run, clickHandler, tryCount }) => {
  const pokeCtx = useContext(PokemonContext);

  return (
    <Fragment>
      <div>
        <img src={appearPokemon && appearPokemon.sprites["front_default"]} />
      </div>
      <p>name: {appearPokemon && appearPokemon.name}</p>
      <p>보유중: {pokeCtx.pokemon.length}</p>
      <button onClick={clickHandler}>잡기</button>
      <button onClick={run}>도망가기</button>
    </Fragment>
  );
};

export default Appear;
