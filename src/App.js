import React, { useState } from "react";
import "./App.css";
import Homepage from "../src/pages/homepage";
import Productpage from "./pages/productpage";
import { Route, Link, Switch, withRouter, Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Homepage />} />
        <Route exact path="/product" component={() => <Productpage />} />
      </Switch>
    </div>
  );
}

export default App;
