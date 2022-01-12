import Button from "elements/button";
import Footer from "parts/Footer";
import React, { useEffect } from "react";

export default function RequestKursusBaru(props) {
  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Profcourse | Request Kursus";
  });
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
                  >
                    <option>Kursus Online</option>
                    <option>Konseling</option>
                    <option>Training</option>
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
                  required
                />
              </div>
              <div className="form-group text-right">
                <Button className="btn" isPrimary hasShadow>
                  Ajukan Kursus
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center mb-5">
          <h2 className="font-weight-bolder">List Request Kursus</h2>
        </div>
        {/* MODAL */}
        <div>
          {/* Modal Hapus*/}
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
                    Hapus
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
                  Apakah anda yakin untuk menghapus request course ini?
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Tidak
                  </button>
                  <button type="button" className="btn btn-danger">
                    Ya
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End modal Hapus */}

        {/* Modal Perbarui */}
        <div>
          {/* Modal Hapus*/}
          <div
            className="modal fade"
            id="exampleModalPer"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Perbarui
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
                            >
                              <option>Kursus Online</option>
                              <option>Konseling</option>
                              <option>Training</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group mb-3">
                          <label
                            className="font-weight-normal"
                            htmlFor="topikKursus"
                          >
                            Topik Kursus
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Topik kursus anda..."
                            required
                          />
                        </div>

                        <div className="form-group text-right">
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Batal
                            </button>
                            <Button type="button" className="btn btn-danger">
                              Perbarui
                            </Button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Modal Perbarui */}

        {/* END MODAL */}

        <table class="table text-center">
          <thead>
            <tr>
              <th scope="col">Nomor</th>
              <th scope="col">Bidang Kursus</th>
              <th scope="col">Topik Kursus</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Kursus Online</td>
              <td>HTML CSS JS</td>
              <td className="">
                <button
                  className="btn btn-primary mx-2"
                  type="link"
                  isPrimary
                  data-toggle="modal"
                  data-target="#exampleModalPer"
                >
                  Perbarui
                </button>
                <button
                  className="btn btn-danger"
                  type="link"
                  isDanger
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Hapus
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Kursus Online</td>
              <td>HTML CSS JS</td>
              <td className="">
                <button
                  className="btn btn-primary mx-2"
                  type="link"
                  isPrimary
                  data-toggle="modal"
                  data-target="#exampleModalPer"
                >
                  Perbarui
                </button>
                <button
                  className="btn btn-danger"
                  type="link"
                  isDanger
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Hapus
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-5">
        <Footer></Footer>
      </div>
    </>
  );
}
