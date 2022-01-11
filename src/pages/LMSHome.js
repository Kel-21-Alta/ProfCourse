import React from "react";
import Button from "elements/button";
import LMSMateri from "./LMSMateri";
import Sidebar from "parts/Sidebar";
import LMSStarter from "./LMSStarter";
import { useRouteMatch } from "react-router-dom";

export default function LMSHome(props) {
  let { path, url } = useRouteMatch();
  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <div className="mt-0 wrapper-sidebar " id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container my-5">
              <LMSStarter></LMSStarter>
            </div>
          </div>

          <div>
            <div className="container my-5">
              <div className="row">
                <div className="col-md-6">
                  <Button className="btn btn-secondary">Kembali</Button>
                </div>
                <div className="col-md-6 text-right">
                  <Button
                    className="btn btn-primary"
                    type="link"
                    href={`${url}/materi/1231`}
                  >
                    Lanjutkan
                  </Button>
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
        </div>
      </div>
    </>
  );
}
