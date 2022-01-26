import axios from "axios";
import getToken from "config/api/getToken";
import publicApi from "config/api/publicApi";
import Button from "elements/button";
import Footer from "parts/Footer";
import ListMateri from "parts/ListMateri";
import LoadingElements from "parts/LoadingElements";
import ModalUpdateModul from "parts/ModalUpdateModul";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { toast, ToastContainer } from "react-toastify";

export default function DetailKursusUser() {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);
  const [kursus, setKursus] = useState([]);

  const [data, setData] = useState({
    namaModul: "",
  });
  const params = useParams().id;
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
    console.log(data);
  };
  const dataSend = {
    course_id: `${params}`,
    title: `${data.namaModul}`,
    order: 1,
  };
  const token = getToken();
  const publicApis = publicApi();
  const tambahModulApi = async () => {
    setLoading2(true);
    const response = await axios
      .post(`${publicApis}/api/v1/moduls`, dataSend, token)
      .catch((err) => {});
    if (response.status > 400) {
      setLoading2(false);
      toast.error("Gagal update data");
    } else {
      toast.success("Sukses update data");
      setLoading2(false);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };
  const deleteModulApi = async (id) => {
    setLoading2(true);
    const response = await axios
      .delete(`${publicApis}/api/v1/moduls/${id}`, token)
      .catch((err) => {
        setLoading2(false);
        toast.error("Gagal update data");
      });
    if (response.status > 400) {
      setLoading2(false);
      toast.error("Gagal update data");
    } else {
      toast.success("Sukses update data");
      setLoading2(false);
      window.location.reload();
    }
  };

  const idCourses = useParams().id;
  const urlApi = publicApi();
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
        {/* MODAL START */}
        <>
          <div>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Tambah Modul
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="container mb-3 mt-3">
                    <label htmlFor="#namaModul">Nama Modul</label>
                    <input
                      id="namaModul"
                      name="namaModul"
                      type="text"
                      className="form-control"
                      placeholder="Nama modul anda..."
                      onChange={onChange}
                      required
                    />
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Tidak
                    </button>
                    <Button
                      type="button"
                      className="btn btn-danger"
                      onClick={tambahModulApi}
                      isLoading={loading2 ? true : false}
                    >
                      Ya
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>

        {/* MODAL END */}
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
                          // eslint-disable-next-line jsx-a11y/aria-proptypes
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
            <button
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Tambah Modul
            </button>

            <div className="row mt-4">
              <div className="col-md-6">
                {!kursus?.data?.moduls === null ? (
                  <>
                    <div
                      className="container py-3 px-4 rounded"
                      style={{ width: "100%", backgroundColor: "#DEE2E6" }}
                    >
                      <div className="row">
                        <div className="col-auto">
                          <p className="mt-3 font-weight-bold">
                            Belum ada modul
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {kursus?.data?.moduls
                      ?.slice(0)
                      .reverse()
                      .map((item, index) => {
                        return (
                          <>
                            {/* modal */}
                            {/* Start Delete */}
                            <div>
                              <div
                                className="modal fade"
                                id={`deleteModal${index}`}
                                tabIndex={-1}
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                              >
                                <div className="modal-dialog modal-dialog-centered">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5
                                        className="modal-title"
                                        id="exampleModalLabel"
                                      >
                                        Hapus Modul
                                      </h5>
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        <span aria-hidden="true">×</span>
                                      </button>
                                    </div>
                                    <div className="container mb-3 mt-3">
                                      Apakah anda yakin ingin menghapus modul
                                      ini? Menghapus modul ini akan menghapus
                                      materi, video dan kuis
                                    </div>

                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-dismiss="modal"
                                      >
                                        Tidak
                                      </button>
                                      <Button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => {
                                          deleteModulApi(item?.modul_id);
                                        }}
                                        isLoading={loading2 ? true : false}
                                      >
                                        Ya
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* End Delete */}
                            {/* Start Update */}
                            <ModalUpdateModul
                              key={index}
                              index={index}
                              name_modul={item.name_modul}
                              onChange={onChange}
                              modulId={item?.modul_id}
                              loading2={loading2}
                              params={params}
                            />
                            {/* End Update */}
                            {/* modal end */}
                            <div
                              className="container py-3 px-4 rounded mt-3"
                              style={{
                                width: "100%",
                                backgroundColor: "#DEE2E6",
                              }}
                            >
                              <div className="row">
                                <div className="col-md-7">
                                  <h5 className="font-weight-bolder">
                                    Modul {index + 1} : {item.name_modul}
                                  </h5>
                                </div>
                                <div className="col-md-5 text-right">
                                  <button
                                    className="btn btn-secondary mr-2"
                                    type="link"
                                    data-toggle="modal"
                                    data-target={`#ubahModal${index}`}
                                  >
                                    Ubah
                                  </button>
                                  <button
                                    className="btn btn-danger"
                                    type="link"
                                    data-toggle="modal"
                                    data-target={`#deleteModal${index}`}
                                  >
                                    Hapus
                                  </button>
                                </div>
                              </div>
                              <ListMateri></ListMateri>
                              <div className="text-right mt-3">
                                <button
                                  className="btn btn-primary"
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                >
                                  Tambah Materi
                                </button>
                              </div>
                            </div>
                          </>
                        );
                      })}
                  </>
                )}
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
