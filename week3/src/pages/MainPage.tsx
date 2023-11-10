import { useState, useReducer } from "react";
import Header from "../components/Header";
import Funnel from "../components/Funnel";
import styled from "styled-components";

import SelectType from "../components/SelectType";
import ThingType1 from "../components/ThingType1";
import ThingType2 from "../components/ThingType2";
import ThingType3 from "../components/ThingType3";
import ThingTypeResult from "../components/ThingTypeResult";
import Counter from "../components/Counter";
import RandomResult from "../components/RandomResult";
import CheckType from "../components/CheckType";

const MainPage = () => {
  const [page, setPage] = useState(0);
  const [type, setType] = useState<"Thing" | "Random" | "Default">("Default");

  const initialState = {
    countryType: "",
    ingredient: "",
    fried: "",
  };

  const reducer = (state, action) => {
    console.log(action.value);
    switch (action.type) {
      case "setCountry": {
        return {
          ...state,
          countryType: action.value,
        };
      }
      case "setIngredient": {
        return {
          ...state,
          ingredient: action.value,
        };
      }
      case "setFried": {
        return {
          ...state,
          fried: action.value,
        };
      }
      case "reset": {
        return { ...initialState };
      }
    }
    throw Error("Unknown action:" + action.type);
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(page);
  console.log(typeof state);
  const setCountry = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target.value);
    dispatch({ type: "setCountry", value: e.target.value });
  };
  const setIngredient = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({ type: "setIngredient", value: e.currentTarget.value });
  };
  const setFried = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({ type: "setFried", value: e.currentTarget.value });
  };
  const setReset = () => {
    dispatch({ type: "reset" });
  };
  return (
    <MainPageWrapper>
      <Header
        page={page}
        setType={setType}
        setPage={setPage}
        setReset={setReset}
      ></Header>

      {type === "Default" && <SelectType setType={setType}></SelectType>}

      {type === "Thing" && (
        <Funnel
          page={page}
          type={type}
          setPage={setPage}
          state={state}
          setReset={setReset}
        >
          <CheckType type={type}></CheckType>
          <ThingType1 state={state} setCountry={setCountry}></ThingType1>
          <ThingType2 state={state} setIngredient={setIngredient}></ThingType2>
          <ThingType3 state={state} setFried={setFried}></ThingType3>
          <ThingTypeResult state={state}></ThingTypeResult>
          {/* <Counter></Counter>
        <RandomResult></RandomResult> */}
        </Funnel>
      )}
      {type === "Random" && (
        <Funnel
          page={page}
          type={type}
          setPage={setPage}
          setReset={setReset}
          state={state}
        >
          <CheckType type={type}></CheckType>
          <RandomResult></RandomResult>
        </Funnel>
      )}
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MainPage;
