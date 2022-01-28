import axios from "axios";
import getToken from "config/api/getToken";
import publicApi from "config/api/publicApi";
import Button from "elements/button";
import React from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ModalUbahMateri from "./ModalUbahMateri";

export default function ListMateri(props) {
  const [dataMateri, setDataMateri] = useState([]);
  const [loading2, setLoading2] = useState(false);
  const urlApi = publicApi();
  const token = getToken();

  const deleteModulApi = async (id) => {
    setLoading2(true);
    const response = await axios
      .delete(`${urlApi}/api/v1/materi/${id}`, token)
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

  // Ubah Materi

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get(`${urlApi}/api/v1/moduls/${props.id}`, token)
        .catch((err) => {
          console.log(err);
        });
      setDataMateri(response?.data?.data);
    };
    fetchData();
    console.log(dataMateri);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props?.id]);
  return (
    <>
      {dataMateri?.materi === null ? (
        <>
          <>
            <div
              className="row rounded mt-2"
              style={{
                backgroundColor: "white",
              }}
            >
              <div className="col-md-6 mt-3">
                <ul>
                  <li>Materi Belum ada</li>
                </ul>
              </div>
            </div>
          </>
        </>
      ) : (
        <>
          {dataMateri?.materi?.map((item, index) => {
            return (
              <>
                {/* Modal Hapus */}
                <div>
                  <div
                    className="modal fade"
                    id={`deleteModals${index}`}
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Hapus Materi
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
                          Apakah anda yakin ingin menghapus materi ini?
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
                              deleteModulApi(item?.id);
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

                <ModalUbahMateri
                  key={index}
                  index={index}
                  id={item.id}
                  title={item?.title}
                  type={item?.type}
                  url={item?.url_materi}
                  id_modul={props.id}
                ></ModalUbahMateri>

                {/* end Modal */}
                <div
                  className="row rounded mt-2"
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  <div className="col-md-6 mt-3">
                    <ul>
                      <li>
                        Materi {index + 1} : {item?.title}
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 text-right">
                    <button
                      className="btn mr-2"
                      type="link"
                      data-toggle="modal"
                      data-target={`#ubahMateri${index}`}
                    >
                      Ubah
                    </button>
                    <button
                      className="btn "
                      data-toggle="modal"
                      data-target={`#deleteModals${index}`}
                      type="button"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </>
      )}
    </>
  );
}
