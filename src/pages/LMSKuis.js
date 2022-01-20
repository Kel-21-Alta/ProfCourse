import axios from "axios";
import getToken from "config/api/getToken";
import publicApi from "config/api/publicApi";
import Button from "elements/button";
import Sidebar from "parts/Sidebar";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function LMSKuis() {
  const [dataKuis, setDataKuis] = useState([]);
  const urlApi = publicApi();
  const config = getToken();
  const params = useParams().id;

  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Profcourse | Belajar";
    const fetchData = async () => {
      const response = await axios
        .get(`${urlApi}/api/v1/quizs/modul/${params}`, config)
        .catch((err) => {
          console.log(err);
        });
      setDataKuis(response.data.data);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);
  return (
    <>
      <>
        {console.log("Data kuiss", dataKuis)}
        {/* eslint-disable jsx-a11y/anchor-is-valid */}
        <div className="mt-0 wrapper-sidebar " id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column h-screen">
            <div id="content">
              <div className="container my-5">
                <form className="form-group">
                  <ol>
                    {dataKuis?.map((item) => {
                      return (
                        <>
                          <li>
                            <div className="">{item?.pertanyaan}</div>
                            <div>
                              <div>
                                {item?.pilihan?.map((answ, index) => {
                                  return (
                                    <>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name={`${item?.pertanyaan}`}
                                          id={`exampleRadios_xs${item?.pertanyaan}${answ}`}
                                          value={answ}
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor={`exampleRadios_xs${item?.pertanyaan}${answ}`}
                                        >
                                          {answ}
                                        </label>
                                      </div>
                                    </>
                                  );
                                })}
                              </div>
                            </div>
                          </li>
                        </>
                      );
                    })}
                  </ol>
                  <div className="text-center">
                    <button className="btn btn-primary " type="submit">
                      {" "}
                      Kirim Jawaban
                    </button>
                  </div>
                </form>
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
    </>
  );
}
