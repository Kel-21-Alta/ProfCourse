// import Button from "elements/button";
import Sidebar from "parts/Sidebar";
import React from "react";
import { useSelector } from "react-redux";

export default function LMSScore() {
  const dataComments = useSelector((state) => state?.dataQuizScore?.data);

  return (
    <>
      <div className="mt-0 wrapper-sidebar " id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column h-screen">
          <div id="content">
            <div className="container my-5">
              <>
                <div className="container text-center">
                  <div className="mt-5">
                    <h2>Skor Kuis : </h2>
                    <h1>{dataComments?.skor}</h1>
                  </div>
                </div>
              </>
            </div>
          </div>

          {/* {console.log("arrayJawaban ", arrayJawaban)} */}
          {/* <div>
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
          </div> */}
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
