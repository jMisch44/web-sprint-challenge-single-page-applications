import { validate } from "@babel/types";
import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

const initialFormValue = {
  name: "",
  size: "",
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  special: "",
};

// const validate = (name, value) => {
//     yup
// }

export const PizzaForm = (props) => {
  const [formValues, setFormValues] = useState(initialFormValue);

  // const handleChange = (event) => {
  //     const { name, value, checked, type } = event.target;
  //     const valueToUse = type === "checkbox" ? checked : value;
  //     validate (name, valueToUse);
  //     setFormValues({ ...formValues, [name]: value});
  // }
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form id="pizza-form" onSubmit={handleSubmit}>
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
