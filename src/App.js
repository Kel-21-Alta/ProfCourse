import React from "react";
import "assets/scss/style.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import LupaPasswordPage from "pages/LupaPasswordPage";
import KursusPage from "pages/KursusPage";
import SpesialisasiPage from "pages/SpesialisasiPage";
import TentangKamiPage from "pages/TentangKamiPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/masuk" component={LoginPage} />
        <Route exact path="/lupa-password" component={LupaPasswordPage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/kursus" component={KursusPage} />
        <Route exact path="/spesialisasi" component={SpesialisasiPage} />
        <Route exact path="/tentang-kami" component={TentangKamiPage} />
      </Switch>
    </Router>
  );
}

export default App;
