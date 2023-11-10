import React from "react";
import { StateTypes } from "../types/stateTypes";
import { FOODS } from "../constants/Food";
import styled from "styled-components";
const ThingTypeResult = ({ state }: StateTypes) => {
  const resultFood = FOODS.filter(
    (food) =>
      food.countryType == state.countryType &&
      food.ingredient === state.ingredient &&
      food.fried === state.fried
  );

  console.log(resultFood);
  return (
    <ResultWrapper>
      <ResultImg img={resultFood[0].src}></ResultImg>
      <FoodName>{resultFood[0].name}</FoodName>
    </ResultWrapper>
  );
};

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const ResultImg = styled.image<{ img: string }>`
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  width: 25rem;
  height: 25rem;
`;

const FoodName = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.head0};
`;
export default ThingTypeResult;
