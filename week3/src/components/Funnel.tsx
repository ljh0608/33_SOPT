import {
  useEffect,
  useState,
  Children,
  Dispatch,
  ReactNode,
  SetStateAction,
} from "react";
import MainText from "./MainText";
import { MainTexts } from "../constants/MainTextConstants";
import styled from "styled-components";
import { StateTypes } from "../types/stateTypes";

type FunnelProp = {
  page: number;
  type: "Thing" | "Random";
  setPage: Dispatch<SetStateAction<number>>;
  state: StateTypes;
  setReset: () => void;
  children: ReactNode;
};
const Funnel = ({
  page,
  type,
  setPage,
  state,
  setReset,
  children,
}: FunnelProp) => {
  const [activeBtn, setActiveBtn] = useState(false);

  const childrenArray = Children.toArray(children);

  const getText = () => {
    if (type === "Thing") {
      switch (page) {
        case 0:
          return MainTexts.FirstText;
        case 1:
          return MainTexts.ThingText1;
        case 2:
          return MainTexts.ThingText2;
        case 3:
          return MainTexts.ThingText3;
        case 4:
          return MainTexts.LastText;
        default:
          return "error";
      }
    } else {
      switch (page) {
        case 1:
          return MainTexts.LastText;
      }
    }
  };
  const handelBtnState = () => {
    if (page === 0) {
      setActiveBtn(true);
      console.log("20");
    } else if (page === 1 && state.countryType !== "") {
      setActiveBtn(true);
    } else if (page === 1 && state.countryType === "") {
      setActiveBtn(false);
    } else if (page === 2 && state.ingredient !== "") {
      setActiveBtn(true);
    } else if (page === 2 && state.ingredient === "") {
      setActiveBtn(false);
    } else if (page === 3 && state.fried !== "") {
      setActiveBtn(true);
    } else if (page === 3 && state.fried === "") {
      setActiveBtn(false);
    } else {
      setActiveBtn(false);
      console.log("error");
    }
  };

  const handleNextBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (activeBtn) {
      setPage((prev) => prev + 1);
    } else {
      e.preventDefault();
    }
  };

  const handelResetBtn = () => {
    if (type === "Random") {
      setPage(0);
    } else {
      setPage(1);
    }
    setReset();
  };
  useEffect(() => {
    handelBtnState();
  }, [page, state.countryType, state.ingredient, state.fried]);

  return (
    <FunnelWrapper>
      <MainText> {getText()}</MainText>
      {page < 4 && type !== "Random" && (
        <CountTextWrapper>{page} / 3</CountTextWrapper>
      )}

      {childrenArray[page]}

      <ButtonWrapper>
        {page >= 1 && page < 4 && type !== "Random" && (
          <BackBtn onClick={() => setPage((prev) => prev - 1)}> 이전</BackBtn>
        )}
        {page < 4 && !(type === "Random" && page === 1) && (
          <NextBtn $activeBtn={activeBtn} onClick={(e) => handleNextBtn(e)}>
            {page < 1 ? "start" : "다음"}
          </NextBtn>
        )}
        {(page == 4 || (page === 1 && type === "Random")) && (
          <ResetBtn onClick={handelResetBtn}>다시하기</ResetBtn>
        )}
      </ButtonWrapper>
    </FunnelWrapper>
  );
};

const FunnelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 5rem;
  gap: 5rem;
  width: 120rem;
  height: 70rem;
  border: 5px solid ${({ theme }) => theme.colors.subBlue};
  border-radius: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 20rem;
  justify-content: center;
  gap: 1rem;
`;

const BackBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 8rem;
  height: 3rem;
  font-size: ${({ theme }) => theme.fontSize.body2};
  background-color: ${({ theme }) => theme.colors.mainGreen};
  color: white;

  transition: all 0.2s;
  box-shadow: 0px 5px 0px 0px #1e8185;
  border-radius: 5px;
  &:hover {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  &:hover {
    box-shadow: 0px 0px 0px 0px #007144;
  }
`;

const NextBtn = styled.button<{ $activeBtn: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 3rem;
  font-size: ${({ theme }) => theme.fontSize.body2};
  background-color: ${({ $activeBtn, theme }) =>
    $activeBtn ? theme.colors.mainBlue : theme.colors.backgroundGrey};
  color: white;
  transition: all 0.2s;
  box-shadow: 0px 5px 0px 0px #1e8185;
  border-radius: 5px;
  &:hover {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  &:hover {
    box-shadow: 0px 0px 0px 0px #007144;
  }
`;

const ResetBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 3rem;
  background-color: blue;
  cursor: pointer;
  color: white;

  transition: all 0.2s;
  box-shadow: 0px 5px 0px 0px #1e8185;
  border-radius: 5px;
  &:hover {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  &:hover {
    box-shadow: 0px 0px 0px 0px #007144;
  }
`;

const CountTextWrapper = styled.p`
  font-size: ${({ theme }) => theme.fontSize.body2};
`;
export default Funnel;
