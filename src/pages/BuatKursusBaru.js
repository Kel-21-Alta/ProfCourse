// import Button from "elements/button";
import Button from "elements/button";
import Footer from "parts/Footer";
import Navbar from "parts/Navbar";
// import { useState } from "react";

export default function BuatKursusBaru(props) {
  let selesai = true;
  //   let [modal1, setModal1] = useState("");
  return (
    <>
      <Navbar {...props}></Navbar>
      <div className="container">
        <div className="text-center ">
          <h2 className="font-weight-bolder">Buat Kursus Baru</h2>
        </div>
        <div className="row">
          <div className="col-md-12 text-right mt-4 mb-4">
            <button
              className="btn btn-primary mr-2"
              isPrimary
              data-toggle="modal"
              data-target="#exampleModalCreate1"
            >
              Ajukan Baru
            </button>
          </div>
        </div>
        <table class="table text-center">
          <thead>
            <tr>
              <th scope="col">Nomor</th>
              <th scope="col">Judu; Kursus</th>
              <th scope="col">Status</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Kursus Online</td>
              <td>
                <span className="text-red font-weight-bolder">Draft</span>
              </td>
              <td className="">
                <button
                  className="btn btn-info mx-2"
                  type="link"
                  isPrimary
                  data-toggle="modal"
                  data-target="#exampleModalPer"
                >
                  Detail
                </button>
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
              <td>
                <span className="text-primary font-weight-bolder">
                  Published
                </span>
              </td>
              <td className="">
                <button
                  className="btn btn-info mx-2"
                  type="link"
                  isPrimary
                  data-toggle="modal"
                  data-target="#exampleModalPer"
                >
                  Detail
                </button>
                {selesai ? (
                  <>
                    <button
                      className="btn btn-primary mx-2 cursor-no-drop"
                      type="link"
                      isPrimary
                      data-toggle="modal"
                      data-target="#exampleModalPer"
                      disabled
                    >
                      Perbarui
                    </button>
                    <button
                      className="btn btn-danger cursor-no-drop"
                      type="link"
                      isDanger
                      data-toggle="modal"
                      data-target="#exampleModal"
                      disabled
                    >
                      Hapus
                    </button>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Kursus Online</td>
              <td>
                <span className="text-gray-600 font-weight-bolder">
                  Pending
                </span>
              </td>
              <td className="">
                <button
                  className="btn btn-info mx-2"
                  type="link"
                  isPrimary
                  data-toggle="modal"
                  data-target="#exampleModalPer"
                >
                  Detail
                </button>
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

        {/* MODAL BUAT COURSE */}
        <div>
          {/* Modal Hapus*/}
          <div
            className="modal fade"
            id="exampleModalCreate1"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Membuat Kursus
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
                    <div className="col-md-6">
                      <img
                        src="https://picsum.photos/200/300"
                        className="card-img my-3"
                        alt="..."
                        height={180}
                        width={342}
                        style={{ objectFit: "cover" }}
                      />
                      <input type="file" name="" id="" />
                    </div>
                    <div className="col-md-6">
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
                        {/* <div className="form-group text-right">
                          <Button className="btn" isPrimary hasShadow>
                            Ajukan Kursus
                          </Button>
                        </div> */}
                      </form>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary">
                    Lanjut
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END MODAL BUAT COURSE */}
      </div>
      <div className="mt-5">
        <Footer></Footer>
      </div>
    </>
  );
}
