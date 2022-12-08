import { useContext, Fragment, useState, useEffect } from "react";
import { PokemonContext } from "./../store/ContextProvider";
import PokemonList from "./PokemonList";

const Main = ({ appearPokemon, run, clickHandler, tryCount }) => {
  const pokeCtx = useContext(PokemonContext);

  useEffect(() => {
    if (tryCount === 0) {
      run();
      clickHandler();
    }
  }, [tryCount]);

  return (
    <Fragment>
      <div>
        <img src={appearPokemon && appearPokemon.sprites.front_default} />
      </div>
      <p>name: {appearPokemon && appearPokemon.name}</p>
      <p>보유중: {pokeCtx.pokemon.length}</p>
      <button onClick={clickHandler}>잡기</button>
      <button onClick={run}>도망가기</button>

      <ul>
        {pokeCtx.pokemon !== [] &&
          pokeCtx.pokemon.map((pokemon) => <PokemonList pokemon={pokemon} />)}
      </ul>
    </Fragment>
  );
};

export default Main;
