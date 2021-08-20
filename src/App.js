import React, { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { PizzaForm } from "./components/PizzaForm";
import { PizzaOrders } from "./components/PizzaOrders";

const App = () => {
  const [pizzaData, setPizzaData] = useState([]);

  // useEffect(() => {

  // }, [pizzaData])

  return (
    <>
      <nav>
        <h1>Lambda Eats</h1>
        <Link to="/">Home</Link>
        <Link to="/pizza">Order Pizza?</Link>
      </nav>
      <Switch>
        <Route path="/pizza/:order">
          <PizzaOrders pizzaData={pizzaData} />
        </Route>
        <Route path="/pizza">
          <PizzaForm setPizzaData={setPizzaData} />
        </Route>
        <Route path="/" />
      </Switch>
    </>
  );
};
export default App;
