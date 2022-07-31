import React from "react";
import {
  NormalButton,
  OperationButton,
  DeleteButton,
  ResetButton,
  EquelButton,
} from "./Button";
import "./Buttons.scss";
const Buttons = ({ dispatch }) => {
  return (
    <div className="buttons">
      <NormalButton value={7} dispatch={dispatch} />
      <NormalButton value={8} dispatch={dispatch} />
      <NormalButton value={9} dispatch={dispatch} />
      <DeleteButton name="del" value={"Del"} dispatch={dispatch} />
      <NormalButton value={4} dispatch={dispatch} />
      <NormalButton value={5} dispatch={dispatch} />
      <NormalButton value={6} dispatch={dispatch} />
      <OperationButton value={"+"} dispatch={dispatch} />
      <NormalButton value={1} dispatch={dispatch} />
      <NormalButton value={2} dispatch={dispatch} />
      <NormalButton value={3} dispatch={dispatch} />
      <OperationButton value={"-"} dispatch={dispatch} />
      <NormalButton value={"."} dispatch={dispatch} />
      <NormalButton value={0} dispatch={dispatch} />
      <OperationButton value={"/"} dispatch={dispatch} />
      <OperationButton value={"X"} dispatch={dispatch} />
      <ResetButton name="reset" value={"Reset"} dispatch={dispatch} />
      <EquelButton name="equel" value={"="} dispatch={dispatch} />
    </div>
  );
};

export default Buttons;
