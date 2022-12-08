import { Fragment } from "react";
import styled from "styled-components";

const Backdrop = (props) => {
  return <BackdropDiv onClick={props.onToggle} />;
};

const Modal = ({ img, tryCount, catchHandler }) => {
  return (
    <ModalDiv>
      남은횟수 : {tryCount}
      <img src={img} />
      <div>
        <button onClick={() => catchHandler()}>몬스터볼</button>
      </div>
    </ModalDiv>
  );
};

const Catch = ({ name, img, onToggle, catchHandler, tryCount }) => {
  return (
    <Fragment>
      <Backdrop onToggle={onToggle} />
      <Modal img={img} catchHandler={catchHandler} tryCount={tryCount} />
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

const ModalDiv = styled.div`
  position: fixed;
  top: 20vh;
  left: 30%;
  z-index: 30;

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
    position: absolute;
    z-index: 50;
  }
`;
