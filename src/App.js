import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

const App = () => {
  const [pizzaData, setPizzaData] = useState([]);

  return (
    <>
      <h1>Lambda Eats</h1>
      <Switch>
        <Route path="/pizza/form" />
        <Route path="/pizza" />
        <Route path="/" />
      </Switch>
    </>
  );
};
export default App;
