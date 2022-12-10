import { Link } from "react-router-dom";
import styled from "styled-components";
import { HeaderMenuButton } from "../commonUi/button";

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo
          src={`${process.env.PUBLIC_URL}/images/mainlogo.png`}
          alt="logo"
        />
      </Link>
      <Link to="/bag">
        <HeaderMenuButton>잡은포켓몬</HeaderMenuButton>
      </Link>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  top: 0;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  box-sizing: border-box;
`;

const Logo = styled.img`
  scale: 0.4;
`;
