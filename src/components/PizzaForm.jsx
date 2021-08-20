import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import * as yup from "yup";
import schema from "../validation/formSchema";

const initialFormValue = {
  name: "",
  size: "",
  cheese: false,
  pepperoni: false,
  onion: false,
  sausage: false,
  special: "",
};

const initialFormErrors = {
  name: "",
  size: "",
  special: "",
};

const validate = (name, value) => {
  yup
    .reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: "" }))
    .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
};

export const PizzaForm = (props) => {
  const [formValues, setFormValues] = useState(initialFormValue);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
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
          <input
            id="name-input"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Size
          <select
            id="size-dropdown"
            name="size"
            value={values.size}
            onChange={handleChange}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="XL">Extra Large</option>
          </select>
        </label>
        <label>
          Toppings
          <label>
            Cheese
            <input
              type="checkbox"
              name="cheese"
              checked={values.cheese}
              onChange={handleChange}
            />
          </label>
          <label>
            Pepperoni
            <input
              type="checkbox"
              name="pepperoni"
              checked={values.pepperoni}
              onChange={handleChange}
            />
          </label>
          <label>
            Onion
            <input
              type="checkbox"
              name="onion"
              checked={values.onion}
              onChange={handleChange}
            />
          </label>
          <label>
            Sausage
            <input
              type="checkbox"
              name="sausage"
              checked={values.sausage}
              onChange={handleChange}
            />
          </label>
        </label>
        <label>
          Special Instructions
          <input
            id="special-text"
            type="text"
            name="special"
            value={values.special}
            onChange={handleChange}
          />
        </label>

        <button id="order-button">Place Order</button>
      </form>
    </div>
  );
};
