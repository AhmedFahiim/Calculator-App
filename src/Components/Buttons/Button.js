import React from "react";

// Normal Button
const NormalButton = ({ value, dispatch, name }) => {
  return (
    <button
      className={name}
      onClick={() => dispatch({ type: "Add-digit", value })}
    >
      {value}
    </button>
  );
};

// Operation Button
const OperationButton = ({ value, dispatch, name }) => {
  return (
    <button
      className={name}
      onClick={() => dispatch({ type: "Operation", value })}
    >
      {value}
    </button>
  );
};

// Delete Button
const DeleteButton = ({ value, dispatch, name }) => {
  return (
    <button className={name} onClick={() => dispatch({ type: "del", value })}>
      {value}
    </button>
  );
};

// Reset Button
const ResetButton = ({ value, dispatch, name }) => {
  return (
    <button className={name} onClick={() => dispatch({ type: "reset" })}>
      {value}
    </button>
  );
};
// Equel Button
const EquelButton = ({ value, dispatch, name }) => {
  return (
    <button className={name} onClick={() => dispatch({ type: "Equel" })}>
      {value}
    </button>
  );
};
export {
  NormalButton,
  OperationButton,
  DeleteButton,
  ResetButton,
  EquelButton,
};
