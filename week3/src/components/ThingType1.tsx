import React, { useState } from "react";
import styled from "styled-components";
import { StateTypes } from "../types/stateTypes";
interface ThingType {
  state: StateTypes;
  setCountry: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ThingType1 = ({ state, setCountry }: ThingType) => {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCountry(e);
  };
  return (
    <ThingTypeWrapper>
      <InputButton
        value="korean"
        $active={state.countryType === "korean"}
        onClick={handleButtonClick}
      >
        한식
      </InputButton>
      <InputButton
        value="japanese"
        $active={state.countryType === "japanese"}
        onClick={handleButtonClick}
      >
        일식
      </InputButton>
      <InputButton
        value="chinese"
        $active={state.countryType === "chinese"}
        onClick={handleButtonClick}
      >
        중식
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
export default ThingType1;
