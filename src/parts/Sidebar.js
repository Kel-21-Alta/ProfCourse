import Button from "elements/button";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Sidebar() {
  const detailData = useSelector((state) => state.dataDetailCourses.data.data);
  const idCourses = useParams().id;

  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}

      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion h-screen wrapper-sidebar"
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
        <div className="sidebar-heading">{detailData?.name_course}</div>
        {detailData?.moduls?.map((item) => {
          return (
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
                <span>{item?.name_modul}</span>
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
                    href="/belajar/materi/1"
                  >
                    Materi 1
                  </Button>
                  <Button
                    type="link"
                    className="collapse-item"
                    href="/belajar/materi/1"
                  >
                    Materi 2
                  </Button>
                  <Button
                    type="link"
                    className="collapse-item"
                    href="/belajar/video/1"
                  >
                    Video Pembelajaran
                  </Button>
                  <Button
                    type="link"
                    className="collapse-item"
                    href="/belajar/kuis/1"
                  >
                    Kuis
                  </Button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
