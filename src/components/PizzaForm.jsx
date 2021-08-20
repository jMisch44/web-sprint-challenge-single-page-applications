import React from "react";

const initialFormValue = {
  name: "",
  size: "",
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  special: "",
};

export const PizzaForm = () => {
  return (
    <div>
      <form id="pizza-form">
        <label>
          Name
          <input id="name-input" type="text" />
        </label>
        <label>
          Size
          <select id="size-dropdown">
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>Extra Large</option>
          </select>
        </label>
        <label>
          Toppings
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
        </label>
        <label>
          Special Instructions
          <input id="special-text" type="text" />
        </label>

        <button id="order-button">Place Order</button>
      </form>
    </div>
  );
};
