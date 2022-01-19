import React from "react";
import "sbadmin.css";
import "assets/scss/style.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import Navbar from "parts/Navbar";
import LMSMateri from "pages/LMSMateri";
import LMSVideo from "pages/LMSVideo";
import LMSKuis from "pages/LMSKuis";
import AkunSaya from "pages/AkunSaya";
import UbahPassword from "pages/UbahPassword";
import UbahData from "pages/UbahData";
import DetailSpesialisasi from "pages/DetailSpesialisasi";
import SearchPage from "pages/SearchPage";

function App() {
  const DefaultContainer = (props) => (
    <>
      <Navbar {...props} />
      <PrivateRoute exact path="/" component={HomePage} />
      <PrivateRoute exact path="/cari/:judul" component={SearchPage} />
      <PrivateRoute exact path="/kursus" component={KursusPage} />
      <PrivateRoute exact path="/spesialisasi" component={SpesialisasiPage} />
      <PrivateRoute exact path="/tentang-kami" component={TentangKamiPage} />
      <PrivateRoute exact path="/kursus-saya" component={KursusSayaPage} />
      <PrivateRoute
        exact
        path="/request-kursus-baru"
        component={RequestKursusBaru}
      />
      <PrivateRoute exact path="/buat-kursus-baru" component={BuatKursusBaru} />
      <PrivateRoute exact path="/detail-kursus/:id" component={DetailKursus} />
      <PrivateRoute
        exact
        path="/detail-spesialisasi/:id"
        component={DetailSpesialisasi}
      />

      <PrivateRoute exact path="/belajar/:id" component={LMSHome} />
      <PrivateRoute exact path="/belajar/materi/:id" component={LMSMateri} />
      <PrivateRoute exact path="/belajar/video/:id" component={LMSVideo} />
      <PrivateRoute exact path="/belajar/kuis/:id" component={LMSKuis} />
      <PrivateRoute exact path="/akun-saya" component={AkunSaya} />
      <PrivateRoute exact path="/akun-saya/ubah-data" component={UbahData} />
      <PrivateRoute
        exact
        path="/akun-saya/ubah-password"
        component={UbahPassword}
      />
    </>
  );
  return (
    <>
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
          <Route component={DefaultContainer}></Route>
        </Switch>
      </Router>
    </>
  );
  // return (
  //   <Router>
  //     <Switch>

  //     </Switch>
  //   </Router>

  // )
}

export default App;
