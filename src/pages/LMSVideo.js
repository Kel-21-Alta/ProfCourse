import axios from "axios";
import getToken from "config/api/getToken";
import publicApi from "config/api/publicApi";
import Button from "elements/button";
import Sidebar from "parts/Sidebar";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

export default function LMSVideo() {
  const [dataMateri, setDataMateri] = useState([]);
  const [loading, setLoading] = useState(false);
  const urlApi = publicApi();
  const params = useParams().id;
  const config = getToken();
  const fetchData = async () => {
    setLoading(true);
    const response = await axios
      .get(`${urlApi}/api/v1/materi/${params}`, config)
      .catch((err) => {
        console.log(err);
      });
    setDataMateri(response?.data?.data);
  };
  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Profcourse | Belajar";
    fetchData();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);
  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <div className="" id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column h-screen">
          <div id="content">
            <div className="container my-5">
              {loading ? (
                "Loading"
              ) : (
                <>
                  <div className="container player-wrapper">
                    <ReactPlayer
                      url={dataMateri?.url_materi}
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
              )}
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
