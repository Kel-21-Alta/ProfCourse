// import Button from "elements/button";
import axios from "axios";
import getToken from "config/api/getToken";
import publicApi from "config/api/publicApi";
import Button from "elements/button";
import Footer from "parts/Footer";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { storage } from "../firebase";

export default function BuatKursusBaru(props) {
  // let selesai = true;

  const [data, setData] = useState({
    judulKursus: "",
    deskripsiKursus: "",
  });

  const [loading, setLoading] = useState(false);
  const [selesai, setSelesai] = useState(false);
  const [response, setResponse] = useState([]);
  const [i_image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
    console.log(data);
  };
  const token = getToken();
  const publicApis = publicApi();
  const dataSend = {
    title: data.judulKursus,
    description: data.deskripsiKursus,
    file_image: url,
  };
  const sendData = async () => {
    setLoading(true);
    const response = await axios
      .post(`${publicApis}/api/v1/courses`, dataSend, token)
      .catch((err) => {});
    if (response.status > 400) {
      toast.error("Gagal Upload Materi");
    } else {
      setResponse(response.data.data);
      toast.success("Sukses Upload");
      setSelesai(true);
      setLoading(false);
      setTimeout(() => {
        // history.push("/akun-saya");
      }, 2500);
    }
  };
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${i_image.name}`).put(i_image);
    uploadTask.on(
      "state_changed",

      (snapshot) => {
        setLoading(true);
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(i_image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            setLoading(false);
          });
      }
    );
  };

  useEffect(() => {
    window.scroll(0, 0);
    console.log(response);
    document.title = "Profcourse | Buat Kursus Baru";
  });
  return (
    <>
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
              <th scope="col">Judul Kursus</th>
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
                        src={
                          url === ""
                            ? "https://www.taawon.com/images_default/default.jpg"
                            : url
                        }
                        className="card-img my-3"
                        alt="..."
                        height={180}
                        width={342}
                        style={{ objectFit: "cover" }}
                      />
                      <input
                        type="file"
                        name="image"
                        id="image"
                        onChange={(e) => {
                          setImage(e.target.files[0]);
                        }}
                      />
                      <div className="row">
                        <div className="col-md-6">
                          <Button
                            className="btn btn-primary mt-2"
                            onClick={handleUpload}
                          >
                            Upload Image
                          </Button>
                        </div>
                        <div className="col-md-6">
                          <div className="text-right mb-1 mt-1 font-weight-bold">
                            {progress} %
                          </div>
                          <div className="progress mb-2">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: `${progress}%` }}
                              aria-valuenow={progress}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <form action="#" className="signin-form">
                        <div className="form-group mb-3">
                          <div>
                            <label htmlFor="#judulKursus">Judul Kursus</label>
                            <input
                              id="judulKursus"
                              name="judulKursus"
                              type="text"
                              className="form-control"
                              placeholder="Judul kursus anda..."
                              onChange={onChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group mb-3">
                          <label
                            className="font-weight-normal"
                            htmlFor="topikKursus"
                          >
                            Deskripsi
                          </label>
                          <textarea
                            type="text"
                            name="deskripsiKursus"
                            className="form-control"
                            placeholder="Topik kursus anda..."
                            onChange={onChange}
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
                  {selesai ? (
                    <>
                      <h5>Upload Selesai</h5>
                      <Button
                        type="link"
                        className="btn btn-danger"
                        href={`/kursus-saya/detail/${response.id}`}
                        isLoading={loading ? true : false}
                        isExternal
                      >
                        Lanjut
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        type="button"
                        className="btn btn-primary"
                        isLoading={loading ? true : false}
                        onClick={sendData}
                      >
                        Lanjut
                      </Button>
                    </>
                  )}
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
      <ToastContainer></ToastContainer>
    </>
  );
}
