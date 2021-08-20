import React, { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { PizzaForm } from "./components/PizzaForm";
import { PizzaOrders } from "./components/PizzaOrders";
import "./App.css";

const App = () => {
  const [pizzaData, setPizzaData] = useState([]);

  return (
    <div className="App">
      <header className="app-header">
        <h2>Lambda Eats</h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/pizza" id="order-pizza" data-cy="order-pizza">
            Pizza?
          </Link>
        </nav>
      </header>

      <Switch>
        <Route path="/pizza/:order">
          <PizzaOrders pizzaData={pizzaData} />
        </Route>
        <Route path="/pizza">
          <PizzaForm setPizzaData={setPizzaData} pizzaData={pizzaData} />
        </Route>
        <Route exact path="/" />
      </Switch>
    </div>
  );
};
export default App;
