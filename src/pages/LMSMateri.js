import Button from "elements/button";
import Sidebar from "parts/Sidebar";
import React from "react";

export default function LMSMateri() {
  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <div className="mt-0 wrapper-sidebar " id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column h-screen">
          <div id="content">
            <div className="container my-5">
              <div className="mb-3">
                <div className="row mb-5">
                  <div className="col-md-6 text-right">
                    <span className="fs-5 font-weight-bolder mr-5">
                      Materi 1
                    </span>
                  </div>
                  <div className="col-md-6">
                    <Button className="btn btn-primary">Materi 1</Button>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-6 text-right">
                    <span className="fs-5 font-weight-bolder mr-5">
                      Materi 2
                    </span>
                  </div>
                  <div className="col-md-6">
                    <Button className="btn btn-primary">Materi 2 </Button>
                  </div>
                </div>
              </div>
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
                    href={`/materi/1231`}
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
