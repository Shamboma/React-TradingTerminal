import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/pages/landing";
import Stocks from "./components/pages/stocks";
import Home from "./components/pages/home";
import Options from "./components/pages/options";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <Landing />
        </Route>
        <Route path={"/home"}>
          <Home />
        </Route>
        <Route path={"/stocks"}>
          <Stocks />
        </Route>
        <Route path={"/options"}>
          <Options />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
