import React from "react";

export const PizzaOrders = (props) => {
  const { pizzaData } = props;
  return (
    <div>
      <h2>Thank you for ordering from Lambda Eats! {pizzaData.name}</h2>
      <p>You ordered a {pizzaData.size} pizza with </p>
      {!!pizzaData.toppings &&
        !!pizzaData.toppings.length &&
        pizzaData.toppings.map((topping) => <p>{topping}</p>)}
    </div>
  );
};
