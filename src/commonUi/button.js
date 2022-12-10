import styled from "styled-components";
export const CommonButton = styled.button`
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
`;

export const MainMenuButton = styled(CommonButton)`
  background-color: red;
  border-radius: 20px;
  color: white;
  font-size: 25px;
  width: 150px;
  height: 80px;
  &:hover {
    background-color: pink;
  }
`;
export const HeaderMenuButton = styled(CommonButton)`
  background-color: transparent;
  color: white;
  padding: 12px;
  &:hover {
    background-color: pink;
  }
`;

export const ListButton = styled(CommonButton)`
  padding: 12px;
  + button {
    margin-left: 24px;
  }
`;

export const BackButton = styled(CommonButton)``;
