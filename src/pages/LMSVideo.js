import axios from "axios";
import getToken from "config/api/getToken";
import publicApi from "config/api/publicApi";
import Button from "elements/button";
import LoadingElements from "parts/LoadingElements";
import Sidebar from "parts/Sidebar";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function LMSVideo() {
  const [dataMateri, setDataMateri] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);
  const [done, setDone] = useState(false);
  const detailData = useSelector((state) => state.dataDetailCourses.data.data);

  const urlApi = publicApi();
  const params = useParams().id;
  const config = getToken();

  let dataSend = {
    course_id: `${detailData.course_id}`,
    materi_id: `${params}`,
    is_complate: true,
    current_time: "times",
  };
  const markDone = async () => {
    setLoading2(true);
    await axios.put(`${urlApi}/api/v1/materi/progress`, dataSend, config);
    setDone(true);
    setLoading2(false);
    window.location.reload();
  };

  useEffect(() => {
    setDone(false);
    window.scroll(0, 0);
    document.title = "Profcourse | Belajar";
    const fetchData = async () => {
      setLoading(true);
      const response = await axios
        .get(`${urlApi}/api/v1/materi/${params}`, config)
        .catch((err) => {
          console.log(err);
        });
      setDataMateri(response?.data?.data);
      setLoading(false);
    };
    fetchData();
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
                <>
                  <div
                    className="container m-auto"
                    style={{ paddingLeft: "40%", paddingTop: "10%" }}
                  >
                    <LoadingElements />
                  </div>
                </>
              ) : (
                <>
                  <div className="container player-wrapper">
                    <ReactPlayer
                      url={dataMateri?.url_materi}
                      className="react-player"
                      playing
                      width="70%"
                      height="70%"
                      controls
                      config={{
                        file: { attributes: { controlsList: "nodownload" } },
                      }}
                      // Disable right click
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </div>
                  <div className="text-center">
                    <Button
                      className="btn btn-info btn-block"
                      onClick={markDone}
                      isLoading={loading2 ? true : false}
                      isDisabled={done ? true : false}
                    >
                      {done ? "Selesai" : "Tandai Selesai"}
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>

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
