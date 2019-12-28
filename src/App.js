import React, { useState } from "react";
import "./App.css";
import Homepage from "../src/pages/homepage";
import Test from "../src/pages/test";
import { Route, Link, Switch, withRouter, Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Homepage />} />
        <Route exact path="/test" component={() => <Test />} />
      </Switch>
    </div>
  );
}

export default App;
