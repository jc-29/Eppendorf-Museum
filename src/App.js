import React, { useState } from "react";
import "./App.css";
import Homepage from "../src/pages/homepage";
import Productpage from "./pages/history";
import Locationpage from "./pages/location";
import Historypage from "./pages/history";
import Currentpage from "./pages/current";
import Designpage from "./pages/design";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/" component={() => <Homepage />} />
          <Route exact path="/product" component={() => <Productpage />} />
          <Route
            exact
            path="/product/location"
            component={() => <Locationpage />}
          />
          <Route
            exact
            path="/product/history"
            component={() => <Historypage />}
          />
          <Route
            exact
            path="/product/design"
            component={() => <Designpage />}
          />
          <Route
            exact
            path="/product/current"
            component={() => <Currentpage />}
          />
        </Switch>
      </div>
    </>
  );
}

export default App;
