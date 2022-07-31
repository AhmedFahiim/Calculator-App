import React from "react";
import "./Head.scss";
const Head = ({ themeChanger }) => {
  return (
    <div className="head">
      <span className="calc">Calculator</span>
      <div className="themeBox">
        <span className="ball" onClick={() => themeChanger()}></span>
        <div className="numbers">
          <span className="number">1</span>
          <span className="number">2</span>
          <span className="number">3</span>
        </div>
      </div>
    </div>
  );
};

export default Head;
