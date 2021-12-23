import React from "react";
import Button from "elements/button";
import Logo from "assets/images/logo/logo.svg";

export default function Navbar(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? "active" : "";
  };
  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                className="form-control mr-sm-2"
                style={{ background: "#E5E5E5", outlineColor: "#E5E5E5" }}
                type="search"
                placeholder="Cari kursus"
                aria-label="Search"
              />
              <Button className="btn rounded-circle" type="submit">
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
                    <Button className="dropdown-item" href="#">
                      Kursus Saya
                    </Button>
                    <Button className="dropdown-item" href="#">
                      Akun Saya
                    </Button>
                    <Button
                      className="dropdown-item btn btn-danger"
                      style={{ backgroundColor: "red", color: "white" }}
                    >
                      Keluar
                    </Button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        {/*
        <nav className="navbar navbar-expand-lg navbar-light">
          <img src={Logo} alt="" srcset="" />
          <div className="collapse navbar-collapse">
            <ul className="navbar nav mr-auto">
              <li className={`nav-item active`}>
                <a className="nav-link" type="link" href="/">
                  Beranda
                </a>
              </li>
              <li className={`nav-item`}>
                <a className="nav-link active" type="link" href="/browse-by">
                  Kursus
                </a>
              </li>
              <li className={`nav-item`}>
                <a className="nav-link" type="link" href="/browse-by">
                  Spesialisasi
                </a>
              </li>
              <li className={`nav-item`}>
                <a className="nav-link" type="link" href="/browse-by">
                  Tentang Kami
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                style={{ background: "#E5E5E5", outlineColor: "#E5E5E5" }}
                type="search"
                placeholder="Cari kursus"
                aria-label="Search"
              />
              <Button className="btn rounded-circle" type="submit">
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
                    <Button className="dropdown-item" href="#">
                      Kursus Saya
                    </Button>
                    <Button className="dropdown-item" href="#">
                      Akun Saya
                    </Button>
                    <Button
                      className="dropdown-item btn btn-danger"
                      style={{ backgroundColor: "red", color: "white" }}
                    >
                      Keluar
                    </Button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav> */}
      </div>
    </header>
  );
}
