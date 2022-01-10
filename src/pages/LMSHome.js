import React from "react";
import Navbar from "parts/Navbar";
import Button from "elements/button";
import LMSMateri from "./LMSMateri";

export default function LMSHome(props) {
  return (
    <>
      <Navbar {...props} isLearn></Navbar>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}

      <div className="mt-0" id="wrapper">
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion h-screen"
          id="accordionSidebar"
        >
          <div
            className="my-4 align-items-center justify-content-center text-primary-blue-tua"
            type="link"
            href="/"
          >
            <div className="mx-3">
              <div className="row font-weight-bolder">
                <div className="col-md-6 mb-2">
                  <div className="d-inline-block ">Progress</div>
                </div>
                <div className="col-md-6">
                  <div className="text-right">25%</div>
                </div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </div>
          <hr className="sidebar-divider my-0" />
          <hr className="sidebar-divider" />
          <div className="sidebar-heading">Judul Courses</div>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              type="link"
              data-toggle="collapse"
              data-target="#modul1"
              aria-expanded="true"
              aria-controls="modul1"
            >
              <i className="fas fa-fw fa-book" />
              <span>Modul 1</span>
            </a>
            <div
              id="modul1"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Materi:</h6>
                <Button
                  type="link"
                  className="collapse-item"
                  href="buttons.html"
                >
                  Materi 1
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Materi 2
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Video Pembelajaran
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Kuis
                </Button>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              type="link"
              data-toggle="collapse"
              data-target="#modul2"
              aria-expanded="true"
              aria-controls="modul2"
            >
              <i className="fas fa-fw fa-book" />
              <span>Modul 1</span>
            </a>
            <div
              id="modul2"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Materi:</h6>
                <Button
                  type="link"
                  className="collapse-item"
                  href="buttons.html"
                >
                  Materi 1
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Materi 2
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Video Pembelajaran
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Kuis
                </Button>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              type="link"
              data-toggle="collapse"
              data-target="#modul2"
              aria-expanded="true"
              aria-controls="modul2"
            >
              <i className="fas fa-fw fa-book" />
              <span>Modul 1</span>
            </a>
            <div
              id="modul2"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Materi:</h6>
                <Button
                  type="link"
                  className="collapse-item"
                  href="buttons.html"
                >
                  Materi 1
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Materi 2
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Video Pembelajaran
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Kuis
                </Button>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              type="link"
              data-toggle="collapse"
              data-target="#modul2"
              aria-expanded="true"
              aria-controls="modul2"
            >
              <i className="fas fa-fw fa-book" />
              <span>Modul 1</span>
            </a>
            <div
              id="modul2"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Materi:</h6>
                <Button
                  type="link"
                  className="collapse-item"
                  href="buttons.html"
                >
                  Materi 1
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Materi 2
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Video Pembelajaran
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Kuis
                </Button>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              type="link"
              data-toggle="collapse"
              data-target="#modul2"
              aria-expanded="true"
              aria-controls="modul2"
            >
              <i className="fas fa-fw fa-book" />
              <span>Modul 1</span>
            </a>
            <div
              id="modul2"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Materi:</h6>
                <Button
                  type="link"
                  className="collapse-item"
                  href="buttons.html"
                >
                  Materi 1
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Materi 2
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Video Pembelajaran
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Kuis
                </Button>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              type="link"
              data-toggle="collapse"
              data-target="#modul2"
              aria-expanded="true"
              aria-controls="modul2"
            >
              <i className="fas fa-fw fa-book" />
              <span>Modul 1</span>
            </a>
            <div
              id="modul2"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Materi:</h6>
                <Button
                  type="link"
                  className="collapse-item"
                  href="buttons.html"
                >
                  Materi 1
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Materi 2
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Video Pembelajaran
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Kuis
                </Button>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              type="link"
              data-toggle="collapse"
              data-target="#modul2"
              aria-expanded="true"
              aria-controls="modul2"
            >
              <i className="fas fa-fw fa-book" />
              <span>Modul 1</span>
            </a>
            <div
              id="modul2"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Materi:</h6>
                <Button
                  type="link"
                  className="collapse-item"
                  href="buttons.html"
                >
                  Materi 1
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Materi 2
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Video Pembelajaran
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Kuis
                </Button>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              type="link"
              data-toggle="collapse"
              data-target="#modul2"
              aria-expanded="true"
              aria-controls="modul2"
            >
              <i className="fas fa-fw fa-book" />
              <span>Modul 1</span>
            </a>
            <div
              id="modul2"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Materi:</h6>
                <Button
                  type="link"
                  className="collapse-item"
                  href="buttons.html"
                >
                  Materi 1
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Materi 2
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Video Pembelajaran
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Kuis
                </Button>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              type="link"
              data-toggle="collapse"
              data-target="#modul2"
              aria-expanded="true"
              aria-controls="modul2"
            >
              <i className="fas fa-fw fa-book" />
              <span>Modul 1</span>
            </a>
            <div
              id="modul2"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Materi:</h6>
                <Button
                  type="link"
                  className="collapse-item"
                  href="buttons.html"
                >
                  Materi 1
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Materi 2
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Video Pembelajaran
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Kuis
                </Button>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              type="link"
              data-toggle="collapse"
              data-target="#modul2"
              aria-expanded="true"
              aria-controls="modul2"
            >
              <i className="fas fa-fw fa-book" />
              <span>Modul 1</span>
            </a>
            <div
              id="modul2"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Materi:</h6>
                <Button
                  type="link"
                  className="collapse-item"
                  href="buttons.html"
                >
                  Materi 1
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Materi 2
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Video Pembelajaran
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Kuis
                </Button>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              type="link"
              data-toggle="collapse"
              data-target="#modul2"
              aria-expanded="true"
              aria-controls="modul2"
            >
              <i className="fas fa-fw fa-book" />
              <span>Modul 1</span>
            </a>
            <div
              id="modul2"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Materi:</h6>
                <Button
                  type="link"
                  className="collapse-item"
                  href="buttons.html"
                >
                  Materi 1
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Materi 2
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Video Pembelajaran
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Kuis
                </Button>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              type="link"
              data-toggle="collapse"
              data-target="#modul2"
              aria-expanded="true"
              aria-controls="modul2"
            >
              <i className="fas fa-fw fa-book" />
              <span>Modul 1</span>
            </a>
            <div
              id="modul2"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Materi:</h6>
                <Button
                  type="link"
                  className="collapse-item"
                  href="buttons.html"
                >
                  Materi 1
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Materi 2
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Video Pembelajaran
                </Button>
                <Button type="link" className="collapse-item" href="cards.html">
                  Kuis
                </Button>
              </div>
            </div>
          </li>
        </ul>
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            <div className="container my-5">
              <LMSMateri></LMSMateri>
            </div>
          </div>
          {/* End of Main Content */}

          <div>
            <div className="container my-5">
              <div className="row">
                <div className="col-md-6">
                  <Button className="btn btn-secondary">Kembali</Button>
                </div>
                <div className="col-md-6 text-right">
                  <Button className="btn btn-primary">Lanjutkan</Button>
                </div>
              </div>
            </div>
          </div>
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright © Profcourse 2022</span>
              </div>
            </div>
          </footer>
          {/* End of Footer */}
        </div>
      </div>
    </>
  );
}
