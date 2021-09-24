import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/landing";
import Stocks from "./pages/stocks";
import Home from "./pages/home";
import Options from "./pages/options";

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
