import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <h1>
          <Image
            src={`${process.env.PUBLIC_URL}/images/mainlogo.png`}
            alt="logo"
          />
        </h1>
      </Link>
      <button>잡은포켓몬</button>
    </StyledHeader>
  );
};

export default Header;

const Image = styled.img`
  width: 200px;
  height: 80px;
`;

const StyledHeader = styled.div`
  width: 800px;
  height: 100px;
  top: 0;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  box-sizing: border-box;
`;
