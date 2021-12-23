import React from "react";
import "assets/scss/style.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import LupaPasswordPage from "pages/LupaPasswordPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/masuk" component={LoginPage} />
        <Route exact path="/lupa-password" component={LupaPasswordPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
