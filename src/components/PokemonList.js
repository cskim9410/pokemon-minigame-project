import { useContext, Fragment, useState, useEffect } from "react";
import { PokemonContext } from "./../store/ContextProvider";
import styled from "styled-components";
import { BackButton, ListButton } from "../commonUi/button";
import { Link } from "react-router-dom";

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
  useEffect(() => {
    setList(pokeArr);
  }, [pokeCtx.pokemon]);

  return (
    <Container>
      <Header>
        <Link to="/">
          <BackButton>뒤로가기</BackButton>
        </Link>
      </Header>
      <ul>{list}</ul>
    </Container>
  );
};

export default PokemonList;

const List = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  background-color: lightgray;
`;

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;
