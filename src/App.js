import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Catch from "./components/Catch";
import Header from "./components/Header";
function App() {
  const [appearPokemon, SetAppearPokemon] = useState();
  const [active, setActive] = useState(false);
  const [catched, setCatched] = useState([]);

  const catchHandler = () => {
    setCatched((state) => {
      return [...state, appearPokemon];
    });
    setActive(false);
    run();
  };

  async function getPokemon(id) {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = res.data;
    SetAppearPokemon(pokemon);
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
      <button onClick={clickHandler}>잡기</button>
      <button onClick={run}>도망가기</button>
      {active && (
        <Catch
          name={appearPokemon.name}
          img={appearPokemon.sprites.other["official-artwork"].front_default}
          onToggle={clickHandler}
          catchHandler={catchHandler}
        />
      )}
      {catched !== [] &&
        catched.map((pokemon) => <img src={pokemon.sprites.front_default} />)}
    </Fragment>
  );
}

export default App;
