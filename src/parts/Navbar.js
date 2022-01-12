import React from "react";
import Button from "elements/button";
import Logo from "assets/images/logo/logo.svg";
import Cookies from "js-cookie";
import { useHistory, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function Navbar(props) {
  const history = useHistory();
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? "active" : "";
  };
  const logout = () => {
    Cookies.remove("token");
    toast.success("Logout sukses");
    setTimeout(() => {
      history.push("/masuk");
    }, 2500);
  };
  let params = useLocation();
  return (
    <header
      className={
        params.pathname === "/belajar" ||
        params.pathname === "/belajar/materi/:id" ||
        params.pathname === "/belajar/video/:id" ||
        params.pathname === "/belajar/kuis/:id"
          ? "mb-0"
          : "spacing-sm"
      }
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <img src={Logo} alt="" srcset="" />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className={`nav-item ${getNavLinkClass("/")}`}>
                <Button className="nav-link" type="link" href="/">
                  Beranda
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass("/kursus")}`}>
                <Button className="nav-link active" type="link" href="/kursus">
                  Kursus
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass("/spesialisasi")}`}>
                <Button className="nav-link" type="link" href="/spesialisasi">
                  Spesialisasi
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass("/tentang-kami")}`}>
                <Button className="nav-link" type="link" href="/tentang-kami">
                  Tentang Kami
                </Button>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2 px-3"
                style={{
                  background: "#E5E5E5",
                  outlineColor: "#E5E5E5",
                  borderRadius: "15px",
                }}
                type="search"
                placeholder="Cari kursus"
                aria-label="Search"
              />
              <Button className="btn rounded-circle style-search" type="submit">
                <i className="fas fa-search"></i>
              </Button>
            </form>
            <ul className="navbar nav ml-auto">
              <li className="nav-item">
                <div className="dropdown">
                  <button
                    isPrimary
                    className="btn btn-primary rounded-account"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-user"></i>
                  </button>
                  <div
                    className="dropdown-menu dropdowns-style"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <div
                      className="dropdown-item"
                      style={{ cursor: "context-menu" }}
                      href="#"
                    >
                      <div className="row">
                        <div className="col-auto">
                          <img
                            className="rounded-circle"
                            height={80}
                            width={80}
                            src="https://picsum.photos/200/300"
                            alt=""
                          />
                        </div>
                      </div>
                      <br />
                      Halo username
                    </div>
                    <Button
                      className="nav-link dropdown-item"
                      type="link"
                      href="/kursus-saya"
                    >
                      Kursus Saya
                    </Button>
                    <Button
                      className="nav-link dropdown-item"
                      type="link"
                      href="/akun-saya"
                    >
                      Akun Saya
                    </Button>
                    <Button
                      className="dropdown-item btn btn-danger"
                      style={{ backgroundColor: "red", color: "white" }}
                      onClick={logout}
                    >
                      Keluar
                    </Button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <ToastContainer />
    </header>
  );
}
