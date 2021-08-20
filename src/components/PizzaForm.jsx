import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import * as yup from "yup";
import schema from "../validation/formSchema";
import "./PizzaForm.css";

const initialFormValue = {
  name: "",
  size: "small",
  cheese: false,
  pepperoni: false,
  onion: false,
  sausage: false,
  special: "",
};

const initialFormErrors = {
  name: "",
  size: "",
};

const initialDisabled = false;

export const PizzaForm = (props) => {
  const { setPizzaData, pizzaData } = props;
  const { url } = useRouteMatch();
  const history = useHistory();
  const [formValues, setFormValues] = useState(initialFormValue);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewPizza = (newPizza) => {
    axios
      .post(`https://reqres.in/api/orders`, newPizza)
      .then((res) => {
        setPizzaData([...pizzaData, res.data]);
      })
      .catch((err) => console.error(err));
    setFormValues(initialFormValue);
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    validate(name, valueToUse);
    setFormValues({ ...formValues, [name]: valueToUse });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPizza = {
      name: formValues.name,
      size: formValues.size,
      cheese: formValues.cheese,
      pepperoni: formValues.pepperoni,
      onion: formValues.onion,
      sausage: formValues.sausage,
      special: formValues.special,
    };
    postNewPizza(newPizza);
    history.push(`${url}/${formValues.name}`);
  };
  return (
    <div>
      <h1>Build Your Own Pizza</h1>
      <form id="pizza-form" onSubmit={handleSubmit}>
        <label>
          Name*
          <input
            id="name-input"
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Size*
          <select
            id="size-dropdown"
            name="size"
            value={formValues.size}
            onChange={handleChange}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="XL">Extra Large</option>
          </select>
        </label>
        <label>
          Toppings:
          <label>
            Cheese
            <input
              type="checkbox"
              name="cheese"
              checked={formValues.cheese}
              onChange={handleChange}
            />
          </label>
          <label>
            Pepperoni
            <input
              type="checkbox"
              name="pepperoni"
              checked={formValues.pepperoni}
              onChange={handleChange}
            />
          </label>
          <label>
            Onion
            <input
              type="checkbox"
              name="onion"
              checked={formValues.onion}
              onChange={handleChange}
            />
          </label>
          <label>
            Sausage
            <input
              type="checkbox"
              name="sausage"
              checked={formValues.sausage}
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
            value={formValues.special}
            onChange={handleChange}
          />
        </label>

        <button id="order-button" disabled={disabled}>
          Place Order
        </button>
        <p>* is a required field</p>
        <div className="error">{formErrors.name}</div>
        <div className="error">{formErrors.size}</div>
      </form>
    </div>
  );
};
