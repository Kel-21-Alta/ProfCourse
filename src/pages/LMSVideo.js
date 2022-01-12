import Button from "elements/button";
import Sidebar from "parts/Sidebar";
import React, { useEffect } from "react";
import ReactPlayer from "react-player";

export default function LMSVideo() {
  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Profcourse | Belajar";
  });
  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <div className="" id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column h-screen">
          <div id="content">
            <div className="container my-5">
              <>
                <div className="container player-wrapper">
                  <ReactPlayer
                    url="https://firebasestorage.googleapis.com/v0/b/investa-image-upload.appspot.com/o/images%2FSDa.mp4?alt=media&token=c64b1948-d623-42a9-9473-d36b70bc5cba"
                    className="react-player"
                    playing
                    controls
                    width="70%"
                    height="70%"
                    config={{
                      file: { attributes: { controlsList: "nodownload" } },
                    }}
                    // Disable right click
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>
              </>
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
