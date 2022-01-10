import React from "react";
import "assets/scss/style.scss";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import LupaPasswordPage from "pages/LupaPasswordPage";
import KursusPage from "pages/KursusPage";
import SpesialisasiPage from "pages/SpesialisasiPage";
import TentangKamiPage from "pages/TentangKamiPage";
import KursusSayaPage from "pages/KursusSayaPage";
import RequestKursusBaru from "pages/RequestKursusBaru";
import BuatKursusBaru from "pages/BuatKursusBaru";
import DetailKursus from "pages/DetailKursus";
import PrivateRoute from "route/PrivateRoute";
import PublicRoute from "route/PublicRoute";
import LMSHome from "pages/LMSHome";

function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute
          restricted={true}
          exact
          path="/masuk"
          component={LoginPage}
        />
        <PublicRoute
          restricted={true}
          exact
          path="/lupa-password"
          component={LupaPasswordPage}
        />
        <PrivateRoute exact path="/" component={HomePage} />
        <PrivateRoute exact path="/kursus" component={KursusPage} />
        <PrivateRoute exact path="/spesialisasi" component={SpesialisasiPage} />
        <PrivateRoute exact path="/tentang-kami" component={TentangKamiPage} />
        <PrivateRoute exact path="/kursus-saya" component={KursusSayaPage} />
        <PrivateRoute
          exact
          path="/request-kursus-baru"
          component={RequestKursusBaru}
        />
        <PrivateRoute
          exact
          path="/buat-kursus-baru"
          component={BuatKursusBaru}
        />
        <PrivateRoute
          exact
          path="/detail-kursus/:id"
          component={DetailKursus}
        />
        <PrivateRoute exact path="/learn" component={LMSHome} />
      </Switch>
    </Router>
  );
}

export default App;
