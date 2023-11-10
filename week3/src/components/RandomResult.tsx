import { useState, useEffect } from "react";
import Counter from "./Counter";
import styled from "styled-components";
import getRandomFood from "../utils/RandomSelect";
import { FOODS } from "../constants/Food";
const RandomResult = () => {
  const [time, setTime] = useState(3);

  const randomFood = getRandomFood(FOODS);
  useEffect(() => {
    time > 0 && setTimeout(() => setTime(time - 1), 1000);
  }, [time]);
  return (
    <RandomWrapper>
      {time ? (
        <Counter time={time}></Counter>
      ) : (
        <RandomContainer>
          <ResultImg img={randomFood.src}></ResultImg>
          <FoodName>{randomFood.name}</FoodName>
        </RandomContainer>
      )}
    </RandomWrapper>
  );
};

const RandomWrapper = styled.div`
  width: 40rem;
  height: 25rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const RandomContainer = styled.div`
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
export default RandomResult;
