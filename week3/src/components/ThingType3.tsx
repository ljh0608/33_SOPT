import React from "react";
import { StateTypes } from "../types/stateTypes";
import styled from "styled-components";
interface ThingType {
  state: StateTypes;
  setFried: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const ThingType3 = ({ state, setFried }: ThingType) => {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setFried(e);
  };

  return (
    <ThingTypeWrapper>
      <InputButton
        value="fried"
        $active={state.fried === "fried"}
        onClick={handleButtonClick}
      >
        튀긴 음식
      </InputButton>
      <InputButton
        value="nonFried"
        $active={state.fried === "nonFried"}
        onClick={handleButtonClick}
      >
        튀기지 않은 음식
      </InputButton>
    </ThingTypeWrapper>
  );
};

const ThingTypeWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
const InputButton = styled.button<{ $active: boolean }>`
  color: ${({ $active, theme }) =>
    $active ? theme.colors.mainWhite : theme.colors.btnGreen};
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.btnGreen : theme.colors.mainWhite};

  border: 3px solid ${({ theme }) => theme.colors.btnGreen}; /* Green */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25rem;
  height: 25rem;

  transition-duration: 0.4s;
  font-size: ${({ theme }) => theme.fontSize.head1};

  &:hover {
    color: #12fb0c;
  }
`;
export default ThingType3;
