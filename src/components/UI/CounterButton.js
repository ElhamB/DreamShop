import React from "react";

const CounterButton = () => {
  return (
    <div className="btn-quantity">
      <button className="btn-add">+</button>
      <input type="number" min="1" max="12" />
      <button className="btn-decrease">-</button>
    </div>
  );
};

export default CounterButton;
