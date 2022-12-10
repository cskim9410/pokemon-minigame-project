import { useContext, Fragment, useState, useEffect } from "react";
import { PokemonContext } from "./../store/ContextProvider";
import styled from "styled-components";
import { ListButton } from "../commonUi/button";

const PokemonList = () => {
  const pokeCtx = useContext(PokemonContext);
  const [list, setList] = useState([]);
  const pokeArr = pokeCtx.pokemon.map((pokemon) => {
    return (
      <List key={Math.random()}>
        <div>
          <img src={pokemon.sprites["front_default"]} alt="pokemonimage" />
          <p>{pokemon.name}</p>
        </div>
        <div>
          <ListButton onClick={() => pokeCtx.removePok(pokemon.id)}>
            놓아주기
          </ListButton>
          <ListButton
            onClick={() => {
              console.log(pokemon.stats);
            }}
          >
            상세보기
          </ListButton>
        </div>
      </List>
    );
  });
  console.log(pokeArr);
  useEffect(() => {
    setList(pokeArr);
  }, [pokeCtx.pokemon]);

  return <Ul>{list}</Ul>;
};

export default PokemonList;

const List = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;

const Ul = styled.ul`
  margin: 70px auto 0 auto;
  max-width: 1024px;
`;
