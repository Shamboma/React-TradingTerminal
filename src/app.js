import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/landing";
import Stocks from "./pages/stocks";
import Home from "./pages/home";
import Options from "./pages/options";
import { withAuthenticationRequired } from "@auth0/auth0-react";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Landing} />
        <Route path={"/home"} component={withAuthenticationRequired(Home)} />
        <Route
          path={"/stocks"}
          component={withAuthenticationRequired(Stocks)}
        />
        <Route
          path={"/options"}
          component={withAuthenticationRequired(Options)}
        />
      </Switch>
    </Router>
  );
}

export default App;
