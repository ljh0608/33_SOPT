import React from "react";
import styled from "styled-components";

type CheckTypeProps = {
  type: "Thing" | "Random";
};

const CheckType = ({ type }: CheckTypeProps) => {
  return (
    <CheckTypeWrapper>
      {type == "Thing" ? "취향대로 추천" : "랜덤 추천"}
    </CheckTypeWrapper>
  );
};

const CheckTypeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50rem;
  height: 30rem;
  color: white;
  background-color: ${({ theme }) => theme.colors.mainGreen};
  border-radius: 20px;
  font-size: ${({ theme }) => theme.fontSize.head0};
`;
export default CheckType;
