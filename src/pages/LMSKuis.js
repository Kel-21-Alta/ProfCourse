import axios from "axios";
import getToken from "config/api/getToken";
import publicApi from "config/api/publicApi";
import Button from "elements/button";
import LoadingElements from "parts/LoadingElements";
import Sidebar from "parts/Sidebar";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { setQuizAction } from "redux/actions/quizAction";

export default function LMSKuis() {
  const [dataKuis, setDataKuis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingSend, setLoadingSend] = useState(false);

  let [jawabanState, setJawabanState] = useState([]);
  const urlApi = publicApi();
  const config = getToken();
  const params = useParams().id;
  const dispatch = useDispatch();

  const onChange = (quisId, jawaban, index) => (e) => {
    if (typeof jawabanState[index] === "undefined") {
      setJawabanState([
        ...jawabanState,
        {
          quiz_id: quisId,
          jawaban: jawaban,
        },
      ]);
    } else {
      jawabanState.splice(index, 1, {
        quiz_id: quisId,
        jawaban: jawaban,
      });
    }
  };
  let apiSendData = {
    jawaban: jawabanState,
  };

  let token = getToken();
  let history = useHistory();
  const publicApis = publicApi();
  let sendData = async () => {
    setLoadingSend(true);
    const response = await axios
      .post(`${publicApis}/api/v1/quizs/modul/${params}`, apiSendData, token)
      .catch((err) => {});
    if (response.status > 400) {
      console.log("err");
    } else {
      setLoadingSend(false);
      setTimeout(() => {
        dispatch(setQuizAction(response.data.data));
        history.push(`/belajar/kuis/nilai/${params}`);
      });
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Profcourse | Belajar";
    const fetchData = async () => {
      setLoading(true);
      const response = await axios
        .get(`${urlApi}/api/v1/quizs/modul/${params}`, config)
        .catch((err) => {
          console.log(err);
        });
      setDataKuis(response.data.data);
      setLoading(false);
    };
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);
  return (
    <>
      <>
        {/* eslint-disable jsx-a11y/anchor-is-valid */}
        <div className="mt-0 wrapper-sidebar " id="wrapper">
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
                    <form className="form-group">
                      <ol>
                        {dataKuis?.map((item, index) => {
                          return (
                            <>
                              <li>
                                <div className="">{item?.pertanyaan}</div>
                                <div>
                                  <div>
                                    {item?.pilihan?.map((answ) => {
                                      return (
                                        <>
                                          <div className="form-check">
                                            <input
                                              className="form-check-input"
                                              type="radio"
                                              name={`${item?.id}`}
                                              id={`exampleRadios_xs${item?.pertanyaan}${answ}`}
                                              value={answ}
                                              onChange={onChange(
                                                item?.id,
                                                answ,
                                                index
                                              )}
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
                    </form>
                    <div className="text-center">
                      <Button
                        className="btn btn-primary "
                        onClick={sendData}
                        isLoading={loadingSend ? true : false}
                      >
                        Kirim Jawaban
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* {console.log("arrayJawaban ", arrayJawaban)} */}
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
        {/* {console.log(selected)} */}
      </>
    </>
  );
}
