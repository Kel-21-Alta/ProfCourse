import Button from "elements/button";
import Footer from "parts/Footer";
import React, { useEffect, useState } from "react";
import axios from "axios";
import getToken from "config/api/getToken";
import publicApi from "config/api/publicApi";
import { toast, ToastContainer } from "react-toastify";
import LoadingElements from "parts/LoadingElements";
import EditRequest from "parts/EditRequest";

export default function RequestKursusBaru(props) {
  const [kategori, setKategori] = useState("");
  const [topik, setTopik] = useState("");
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [data, setData] = useState([]);

  const onChange = (e) => {
    const value = e.target.value;
    setKategori(value);
    console.log(value);
  };
  const onChange2 = (e) => {
    const value = e.target.value;
    setTopik(value);
    console.log(topik);
  };

  const urlApi = publicApi();
  const config = getToken();

  let dataSend = {
    category_request_id: `${kategori}`,
    topik: `${topik}`,
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const markDone = async () => {
    setLoading2(true);
    const response = await axios
      .post(`${urlApi}/api/v1/requestusers`, dataSend, config)
      .catch((err) => {
        setLoading2(false);
        toast.error("Gagal Request Kursus");
      });
    if (response.status === 200) {
      toast.success("Sukses Request Kursus");
      window.location.reload();
    }
    setLoading2(false);
  };
  let deleteRequest = (id) => {
    const deleteReq = async () => {
      setLoading3(true);
      const response = await axios
        .delete(`${urlApi}/api/v1/requestusers/${id}`, config)
        .catch((err) => {
          setLoading3(false);
          toast.error("Gagal Hapus Request");
        });
      if (response.status === 200) {
        setLoading3(false);
        toast.success("Sukses Hapus Request");
        window.location.reload();
      }
    };
    deleteReq();
  };

  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Profcourse | Request Kursus";
    const fetchData = async () => {
      setLoading(true);
      const response = await axios
        .get(`${urlApi}/api/v1/requestusers?sort=desc`, config)
        .catch((err) => {});
      setData(response?.data?.data);
      setLoading(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlApi]);

  return (
    <>
      <div className="container">
        <div className="text-center ">
          <h2 className="font-weight-bolder">Request Kursus Baru</h2>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form action="#" className="signin-form">
              <div className="form-group mb-3">
                <div>
                  <label htmlFor="exampleFormControlSelect1">
                    Bidang Kursus
                  </label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    onChange={onChange}
                  >
                    <option value="">Pilih Bidang</option>
                    <option value="6e02f8e4-d3e7-467a-a375-53e6a33321ed">
                      Kursus Online
                    </option>
                    <option value="92453c42-6326-4a32-997d-60c3d335a80c">
                      Konseling
                    </option>
                    <option value="1a62fe51-beb0-460a-bde8-2c9f06a9ba53">
                      Training
                    </option>
                  </select>
                </div>
              </div>
              <div className="form-group mb-3">
                <label className="font-weight-normal" htmlFor="topikKursus">
                  Topik Kursus
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Topik kursus anda..."
                  onChange={onChange2}
                  required
                />
              </div>
            </form>
            <div className="text-right">
              <Button
                className="btn btn-primary"
                hasShadow
                onClick={markDone}
                isLoading={loading2 ? true : false}
              >
                Ajukan Kursus
              </Button>
            </div>
          </div>
        </div>
        <div className="text-center mb-5">
          <h2 className="font-weight-bolder">List Request Kursus</h2>
        </div>

        <table class="table text-center">
          {loading ? (
            <>
              <>
                <div
                  className="container m-auto"
                  style={{ paddingLeft: "40%", paddingTop: "10%" }}
                >
                  <LoadingElements />
                </div>
              </>
            </>
          ) : (
            <>
              <thead>
                <tr>
                  <th scope="col">Nomor</th>
                  <th scope="col">Bidang Kursus</th>
                  <th scope="col">Topik Kursus</th>
                  <th scope="col">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => {
                  return (
                    <>
                      <div>
                        {/* Modal Hapus*/}
                        <div
                          className="modal fade"
                          id={`hapus${index}`}
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
                                  Hapus {item?.category}
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
                              <div className="modal-body">
                                Apakah anda yakin untuk menghapus request course
                                ini?
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
                                  className="btn btn-danger"
                                  onClick={() => {
                                    deleteRequest(item?.request_id);
                                  }}
                                  isLoading={loading3 ? true : false}
                                >
                                  Ya
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <EditRequest
                          key={index}
                          id={index}
                          bidang={item?.category_id}
                          body={item?.body}
                          request_id={item?.request_id}
                        />
                      </div>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{item?.category}</td>
                        <td>{item?.body}</td>
                        <td className="">
                          <button
                            className="btn btn-primary mx-2"
                            type="link"
                            isPrimary
                            data-toggle="modal"
                            data-target={`#exampleModalPer${index}`}
                          >
                            Perbarui
                          </button>
                          <button
                            className="btn btn-danger"
                            type="link"
                            isDanger
                            data-toggle="modal"
                            data-target={`#hapus${index}`}
                          >
                            Hapus
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </>
          )}
        </table>
      </div>
      <ToastContainer></ToastContainer>
      <div className="mt-5">
        <Footer></Footer>
      </div>
    </>
  );
}
