import axios from "axios";
import getToken from "config/api/getToken";
import publicApi from "config/api/publicApi";
import Button from "elements/button";
import Footer from "parts/Footer";
import LoadingElements from "parts/LoadingElements";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { ToastContainer } from "react-toastify";

export default function DetailKursusUser() {
  const [loading, setLoading] = useState(true);
  const [kursus, setKursus] = useState([]);

  const idCourses = useParams().id;
  const urlApi = publicApi();
  const token = getToken();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios
        .get(`${urlApi}/api/v1/courses/${idCourses}`, token)
        .catch((err) => {
          console.log(err);
        });

      setLoading(false);
      setKursus(response?.data);
    };
    fetchData();
    console.log(kursus);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idCourses]);

  return (
    <>
      <div className="container">
        {loading ? (
          <>
            <div
              className="container m-auto"
              style={{
                paddingLeft: "40%",
                paddingTop: "5%",
                paddingBottom: "10%",
              }}
            >
              <LoadingElements />
            </div>
          </>
        ) : (
          <>
            <div className="row ">
              <div className="col-md-6 mt-5">
                <div className="text-left ">
                  <h2 className="font-weight-bolder ">
                    {kursus?.data?.name_course}
                  </h2>
                  <p className="font-weight-light mt-3">
                    {kursus?.data?.description}
                  </p>
                </div>
              </div>
              <div className="col-md-6 mt-5 m-0 p-0">
                <div
                  className="text-center img "
                  style={{ width: "570px", height: "250px" }}
                >
                  <img
                    src={kursus?.data?.url_image}
                    width="100%"
                    height="100%"
                    alt=""
                  />
                </div>
                <div className="row  text-left">
                  <div className="col-md-1"></div>
                  <div className="col-md-3 text-left m-0 mt-3 p-0"></div>
                  <div className="col-md-2 mt-3 text-right m-0 p-0"></div>
                  <div className="col-md-6"></div>

                  <div className="col-md-12 text-center mt-2">
                    {/* {detailData?.info_user.is_register ? ( */}
                    <>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{
                            width: `${kursus?.data?.info_user?.progress}%`,
                          }}
                          aria-valuenow={kursus?.data?.info_user?.progress}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                      <div className="text-right mb-3 font-weight-bold">
                        <span>{kursus?.data?.info_user?.progress} %</span>
                      </div>
                    </>
                    {/* )} */}
                  </div>
                </div>
              </div>
            </div>
            <Button className="btn btn-primary">Tambah Modul</Button>

            <div className="row mt-4">
              <div className="col-md-6">
                <div
                  className="container py-3 px-4 rounded"
                  style={{ width: "100%", backgroundColor: "#DEE2E6" }}
                >
                  <div className="row">
                    <div className="col-auto">
                      {kursus?.data?.moduls === null ? (
                        <>
                          <p className="mt-3 font-weight-bold">
                            Belum ada modul
                          </p>
                        </>
                      ) : (
                        <>
                          <h3 className="font-weight-bolder">
                            {kursus?.name_modul}
                          </h3>
                          <ul>
                            {kursus?.data?.moduls
                              ?.slice(0)
                              .reverse()
                              .map((item) => {
                                return (
                                  <li>
                                    <Button type="link" href="#">
                                      {item.name_modul}
                                    </Button>
                                  </li>
                                );
                              })}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className=" "
                  style={{ fontSize: "40px", display: "inline" }}
                >
                  {" "}
                  <p style={{ fontSize: "20px" }}>
                    {" "}
                    <i className="fas fa-user-friends	px-3"></i>{" "}
                    {kursus?.user_taken_course} Orang mengambil kursus ini
                  </p>
                </div>
                <div>
                  <h5 className="font-weight-bolder">Rank Nilai</h5>
                  <ul>
                    {kursus?.rangking?.slice(0, 10).map((item) => {
                      return (
                        <li>
                          {item.name_user}{" "}
                          <div className="text-right">{item.skor}pts</div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="mt-5">
          <Footer></Footer>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
