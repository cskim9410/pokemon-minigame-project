import axios from "axios";
import { Fragment, useContext, useEffect, useState } from "react";
import Catch from "./components/Catch";
import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import { PokemonContext } from "./store/ContextProvider";

function App() {
  const [appearPokemon, SetAppearPokemon] = useState();
  const [active, setActive] = useState(false);
  const [tryCount, setTryCount] = useState(2);
  const [loading, setLoading] = useState(true);
  const pokeCtx = useContext(PokemonContext);

  const catchHandler = () => {
    if (Math.random() > 0.7) {
      pokeCtx.addPok(appearPokemon);
      setTryCount(2);
      setActive(false);
      run();
    } else {
      setTryCount(tryCount - 1);
    }
  };

  useEffect(() => {
    if (tryCount === 0) {
      run();
      setActive(false);
      setTryCount(2);
    }
  }, [tryCount]);

  async function getPokemon(id) {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = res.data;
    SetAppearPokemon(pokemon);
    setLoading(false);
    console.log(pokemon);
  }

  useEffect(() => {
    (async () => {
      await getPokemon(Math.floor(Math.random() * 905) + 1);
    })();
  }, []);

  const clickHandler = () => {
    setActive(!active);
  };
  const run = async () => {
    await getPokemon(Math.floor(Math.random() * 905) + 1);
  };
  return (
    <Fragment>
      <Header />
      <div>
        <img src={appearPokemon && appearPokemon.sprites.front_default} />
      </div>
      <p>name: {appearPokemon && appearPokemon.name}</p>
      <p>보유중: {pokeCtx.pokemon.length}</p>
      <button onClick={clickHandler}>잡기</button>
      <button onClick={run}>도망가기</button>
      {active && (
        <Catch
          name={appearPokemon.name}
          img={appearPokemon.sprites.other["official-artwork"].front_default}
          onToggle={clickHandler}
          catchHandler={catchHandler}
          tryCount={tryCount}
        />
      )}
      <ul>
        {pokeCtx.pokemon !== [] &&
          pokeCtx.pokemon.map((pokemon) => <PokemonList pokemon={pokemon} />)}
      </ul>
      {/* {catched !== [] &&
        catched.map((pokemon) => <img src={pokemon.sprites.front_default} />)} */}
    </Fragment>
  );
}

export default App;
