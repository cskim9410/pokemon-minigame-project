import { useContext, Fragment, useState, useEffect } from "react";
import { PokemonContext } from "./../store/ContextProvider";
import styled from "styled-components";

const PokemonList = () => {
  const pokeCtx = useContext(PokemonContext);
  const [list, setList] = useState([]);
  const pokeArr = pokeCtx.pokemon.map((pokemon) => {
    return (
      <List key={Math.random()}>
        <img src={pokemon.sprites["front_default"]} />
        <span>name: {pokemon.name}</span>
        <button onClick={() => pokeCtx.removePok(pokemon.id)}>놓아주기</button>
        <button
          onClick={() => {
            console.log(pokemon.stats);
          }}
        >
          상세보기
        </button>
      </List>
    );
  });
  console.log(pokeArr);
  useEffect(() => {
    setList(pokeArr);
  }, [pokeCtx.pokemon]);

  return <Fragment>{list}</Fragment>;
};

export default PokemonList;

const List = styled.li`
  border-bottom: 1px solid black;
`;
