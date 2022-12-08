import { useContext } from "react";
import { PokemonContext } from "./../store/ContextProvider";
import styled from "styled-components";

const PokemonList = ({ pokemon }) => {
  const pokeCtx = useContext(PokemonContext);
  return (
    <List key={Math.random()}>
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
    </List>
  );
};

export default PokemonList;

const List = styled.li`
  border-bottom: 1px solid black;
`;
