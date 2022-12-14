import styled from "styled-components";
import { Fragment, useState } from "react";
import { MainMenuButton } from "../commonUi/button";
import { useCaughtPokemon } from "./../data-access/pokemon/hooks/useCaughtPokemon";

const Main = ({ activeModal }) => {
  const [move, setMove] = useState(false);
  const imgUrlArr = useCaughtPokemon();
  return (
    <Container>
      {move ? (
        <Fragment>
          {imgUrlArr.map((imgUrl) => {
            return <MoveImage src={imgUrl} />;
          })}
          <MoveImage src={`${process.env.PUBLIC_URL}/images/charactor.png`} />
        </Fragment>
      ) : (
        <Fragment>
          {imgUrlArr.map((imgUrl) => {
            return <StaticImage src={imgUrl} />;
          })}
          <StaticImage src={`${process.env.PUBLIC_URL}/images/charactor.png`} />
        </Fragment>
      )}
      <MainMenuButton
        onClick={() => {
          setMove(true);
          setTimeout(() => {
            setMove(false);
            activeModal();
          }, 2000);
        }}
      >
        탐색!
      </MainMenuButton>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${process.env.PUBLIC_URL + "/images/background.png"});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StaticImage = styled.img`
  position: relative;
  bottom: 150px;
  right: 200px;
  width: 40px;
  height: 40px;
`;

const MoveImage = styled.img`
  position: relative;
  bottom: 150px;
  right: 200px;
  width: 40px;
  height: 40px;
  animation: human 2s alternate;
  @keyframes human {
    0% {
      bottom: 150px;
      right: 200px;
    }
    25% {
      right: -300px;
      bottom: 150px;
    }
    50% {
      right: -300px;
      bottom: -150px;
    }
    75% {
      right: 200px;
      bottom: -150px;
    }
    100% {
      bottom: 150px;
      right: 200px;
    }
  }
`;
