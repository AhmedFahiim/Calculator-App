import React, { useState, useEffect, useReducer } from "react";
import { Head, View, Buttons } from "./Components";
import "./app.scss";

const stateObject = { current: "", prev: "", operation: "" };

const reduceFun = (state, { type, value }) => {
  switch (type) {
    case "Add-digit": {
      if (state.current === "" && value == 0) {
        return state;
      } else if (state.current.includes(".") && value == ".") {
        return state;
      } else return { ...state, current: state.current + value };
    }
    case "Operation": {
      if (state.prev.length == 0 && state.current.length == 0)
        return { ...state };
      if (state.prev === "") {
        return {
          operation: value,
          prev: `${state.current} ${value}`,
          current: "",
        };
      }
      if (state.prev.length != 0 && state.current.length != 0) {
        return {
          prev: `${Calculator(state)} ${value}`,
          operation: value,
          current: "",
        };
      }
      if (state.prev.length != 0 && state.current.length == 0) {
        return {
          ...state,
          operation: value,
          prev: state.prev.slice(0, -1) + value,
        };
      }
    }
    case "Equel": {
      return {
        final: Calculator(state),
        current: "",
        prev: "",
        operation: "",
      };
    }
    case "reset": {
      return stateObject;
    }
    case "del": {
      return { ...state, current: state.current.slice(0, -1) };
    }

    default:
      return state;
  }
};

function Calculator({ current, prev, operation }) {
  let result = 0;
  let currentEle = parseInt(current);
  let prevEle = parseInt(prev);

  if (operation === "+") {
    result = currentEle + prevEle;
  } else if (operation === "-") {
    result = currentEle - prevEle;
  } else if (operation === "X") {
    result = currentEle * prevEle;
  } else if (operation === "/") {
    result = currentEle / prevEle;
  }
  return result.toString();
}

function App() {
  const themes = ["first", "second", "third"];
  const [activeTheme, setActiveTheme] = useState(0);
  const [state, dispatch] = useReducer(reduceFun, stateObject);

  useEffect(() => {
    document.body.classList.add(themes[activeTheme]);
  }, [activeTheme]);

  const themeChanger = () => {
    activeTheme == themes.length - 1
      ? setActiveTheme(0)
      : setActiveTheme((prev) => prev + 1);
  };

  return (
    <div className="App">
      <Head themeChanger={themeChanger} />
      <View prev={state.prev} current={state.current} final={state.final} />
      <Buttons dispatch={dispatch} />
    </div>
  );
}

export default App;
