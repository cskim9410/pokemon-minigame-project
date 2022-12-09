import styled from "styled-components";
import { Fragment, useState } from "react";

const Main = ({ activeModal }) => {
  const [move, setMove] = useState(false);
  return (
    <Fragment>
      <Div>
        {move ? (
          <MoveImage src={`${process.env.PUBLIC_URL}/images/charactor.png`} />
        ) : (
          <StaticImage src={`${process.env.PUBLIC_URL}/images/charactor.png`} />
        )}
        <Button
          onClick={() => {
            setMove(true);
            setTimeout(() => {
              setMove(false);
              activeModal();
            }, 2000);
          }}
        >
          탐색!
        </Button>
      </Div>
    </Fragment>
  );
};

export default Main;

const Div = styled.div`
  width: 800px;
  height: 500px;
  background-image: url(${process.env.PUBLIC_URL + "/images/background.png"});
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StaticImage = styled.img`
  position: relative;
  bottom: 150px;
  right: 200px;
  width: 30px;
  height: 30px;
`;

const MoveImage = styled.img`
  position: relative;
  bottom: 150px;
  right: 200px;
  width: 30px;
  height: 30px;
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

const Button = styled.button`
  background-color: red;
  width: 150px;
  height: 80px;
  color: white;
  font-size: 25px;
  box-sizing: border-box;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: pink;
  }
`;
