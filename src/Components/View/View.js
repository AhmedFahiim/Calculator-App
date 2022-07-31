import React from "react";
import "./View.scss";
const View = ({ current, prev, final }) => {
  return (
    <div className="view">
      <p className="prev opperand">{prev}</p>
      <h1 className="final">{final}</h1>
      <p className="current opperand">{current}</p>
    </div>
  );
};

export default View;
