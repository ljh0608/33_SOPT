import React from "react";
import { StateTypes } from "../types/stateTypes";
import styled from "styled-components";
interface ThingType {
  state: StateTypes;
  setIngredient: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const ThingType2 = ({ state, setIngredient }: ThingType) => {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIngredient(e);
    console.log("작동!");
  };

  return (
    <ThingTypeWrapper>
      <InputButton
        value="meat"
        $active={state.ingredient === "meat"}
        onClick={handleButtonClick}
      >
        육류
      </InputButton>
      <InputButton
        value="seafood"
        $active={state.ingredient === "seafood"}
        onClick={handleButtonClick}
      >
        해산물
      </InputButton>
      <InputButton
        value="etc"
        $active={state.ingredient === "etc"}
        onClick={handleButtonClick}
      >
        그 외 간단한 것
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
export default ThingType2;
