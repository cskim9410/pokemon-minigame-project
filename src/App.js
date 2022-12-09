import { Fragment, useContext, useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Catch from "./components/Catch";
import Header from "./components/Header";
import { PokemonContext } from "./store/ContextProvider";
import { getPokemon } from "./api/api";
import Main from "./components/Main";
import PokemonList from "./components/PokemonList";

function App() {
  const [appearPokemon, SetAppearPokemon] = useState();
  const [active, setActive] = useState(false);
  const [tryCount, setTryCount] = useState(2);
  const pokeCtx = useContext(PokemonContext);

  useEffect(() => {
    if (tryCount === 0) {
      run();
      activeModal();
    }
  }, [tryCount]);

  useEffect(() => {
    (async () => {
      const newPok = await getPokemon(Math.floor(Math.random() * 905) + 1);
      SetAppearPokemon(newPok);
    })();
  }, []);

  const activeModal = () => {
    setActive(!active);
  };
  const run = async () => {
    const newPok = await getPokemon(Math.floor(Math.random() * 905) + 1);
    SetAppearPokemon(newPok);
    setTryCount(2);
  };
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
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {active && (
        <Catch
          name={appearPokemon.name}
          img={appearPokemon.sprites.other["official-artwork"].front_default}
          onToggle={activeModal}
          catchHandler={catchHandler}
          tryCount={tryCount}
          run={run}
        />
      )}
      <Header />
      <Routes>
        <Route path="/" element={<Main activeModal={activeModal} />} />
      </Routes>
      <ul>
        {pokeCtx.pokemon !== [] &&
          pokeCtx.pokemon.map((pokemon) => <PokemonList pokemon={pokemon} />)}
      </ul>
    </BrowserRouter>
  );
}

export default App;
