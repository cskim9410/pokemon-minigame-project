import { Fragment } from "react";
import styled from "styled-components";

const Backdrop = (props) => {
  return <BackdropDiv onClick={props.onToggle} />;
};

const Catch = ({ name, img, onToggle, catchHandler, tryCount, run }) => {
  return (
    <Fragment>
      <Backdrop onToggle={onToggle} />
      <Div>
        <Name>{name}</Name>
        <Ptag>{tryCount}</Ptag>
        <PokemonImage src={img} />
        <button type="button" onClick={() => catchHandler()}>
          <Image src={`${process.env.PUBLIC_URL}/images/button.png`} />
        </button>
        <RunBtn onClick={run} />
      </Div>
    </Fragment>
  );
};

export default Catch;

const BackdropDiv = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.55);
  width: 100%;
  height: 100%;
  z-index: 20;
  top: 0;
  left: 0;
`;

const Div = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/images/catch.png"});
  position: fixed;
  top: 20vh;
  left: 30%;
  z-index: 30;
  width: 614px;
  height: 550px;
  & > img {
    animation: pokemon infinite 3s alternate;
  }
  @keyframes pokemon {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  & button {
    top: 430px;
    position: absolute;
    z-index: 50;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    left: 100px;
  }
`;

const Image = styled.img`
  width: 70px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const PokemonImage = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 30px;
  left: 380px;
`;

const Ptag = styled.p`
  position: absolute;
  font-size: 50px;
  font-weight: bold;
  top: 380px;
  left: 250px;
`;

const Name = styled.p`
  position: absolute;
  font-size: 20px;
  font-weight: bold;
  top: 11px;
  right: 435px;
`;

const RunBtn = styled.div`
  left: 386px;
  top: 425px;
  width: 140px;
  position: absolute;
  height: 65px;
  cursor: pointer;
`;
