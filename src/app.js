import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/pages/dashboard";
import Landing from "./components/pages/landing";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <Landing />
        </Route>
        <Route path={"/dashboard"}>
          <Dashboard userName={"Guest"} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
