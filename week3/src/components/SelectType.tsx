import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

type SelectTypeProps = {
  setType: Dispatch<SetStateAction<"Thing" | "Random" | "Default">>;
};

const SelectType = ({ setType }: SelectTypeProps) => {
  return (
    <SelectTypeWrapper>
      <SelectTypeHeader>추천 방식을 선택해주세요!</SelectTypeHeader>
      <ButtonWrapper>
        <ThingBtn onClick={() => setType("Thing")}>취향대로 추천</ThingBtn>
        <RandomBtn onClick={() => setType("Random")}>랜덤 추천</RandomBtn>
      </ButtonWrapper>
    </SelectTypeWrapper>
  );
};

const SelectTypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80rem;

  margin-top: 3rem;
  border: 5px solid ${({ theme }) => theme.colors.subBlue};
`;
const SelectTypeHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80rem;
  height: 5rem;
  font-size: ${({ theme }) => theme.fontSize.head3};
  color: white;
  background-color: ${({ theme }) => theme.colors.subBlue};
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 2rem;
  margin: 3rem 0;
`;

const TypeSelectBtn = styled.button`
  width: 30rem;
  height: 30rem;
  color: white;
  background-color: ${({ theme }) => theme.colors.mainGreen};
  border-radius: 20px;
  font-size: ${({ theme }) => theme.fontSize.head1};
  &:hover {
    background-color: ${({ theme }) => theme.colors.subGreen};
  }
`;

const ThingBtn = styled(TypeSelectBtn)``;
const RandomBtn = styled(TypeSelectBtn)``;
export default SelectType;
