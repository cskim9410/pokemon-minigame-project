import { useContext, useEffect, useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catch from "./components/Catch";
import Header from "./components/Header";
import { PokemonContext } from "./store/ContextProvider";
import { getPokemon } from "./api/api";
import Main from "./components/Main";
import PokemonList from "./components/PokemonList";
import styled from "styled-components";

function App() {
  const opportunity = 5;
  const [appearPokemon, SetAppearPokemon] = useState();
  const [active, setActive] = useState(false);
  const [tryCount, setTryCount] = useState(opportunity);
  const pokeCtx = useContext(PokemonContext);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      sessionStorage.setItem("pokemon", JSON.stringify(pokeCtx.pokemon));
    } else {
      isMounted.current = true;
    }
  }, [pokeCtx.pokemon]);

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
    const savedPokemon = JSON.parse(sessionStorage.getItem("pokemon"));
    if (savedPokemon !== null) {
      pokeCtx.initSetPok(savedPokemon);
    }
  }, []);

  const activeModal = () => {
    setActive(!active);
  };
  const run = async () => {
    const newPok = await getPokemon(Math.floor(Math.random() * 905) + 1);
    SetAppearPokemon(newPok);
    setTryCount(opportunity);
    setActive(false);
  };
  const catchHandler = () => {
    if (Math.random() > 0.7) {
      pokeCtx.addPok(appearPokemon);
      setTryCount(opportunity);
      setActive(false);
      run();
    } else {
      setTryCount(tryCount - 1);
    }
  };
  return (
    <Root>
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
        <Content>
          <Routes>
            <Route path="/" element={<Main activeModal={activeModal} />} />
            <Route path="/bag" element={<PokemonList />} />
          </Routes>
          {/* <ul>{pokeCtx.pokemon !== [] && <PokemonList />}</ul> */}
        </Content>
      </BrowserRouter>
    </Root>
  );
}

export default App;

const Root = styled.div`
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  margin: 0 auto;
`;
