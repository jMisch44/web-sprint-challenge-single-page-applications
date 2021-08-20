import React from "react";

export const PizzaOrders = (props) => {
  const { pizzaData } = props;
  return (
    <div>
      <h2>Congrats! Pizza is on it's way!!</h2>
      {pizzaData.map((pizza) => {
        return <p>{pizza.name}</p>;
      })}
    </div>
  );
};
