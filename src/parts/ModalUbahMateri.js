import Button from "elements/button";
import { storage } from "../firebase";
import React, { useState } from "react";
import axios from "axios";
import publicApi from "config/api/publicApi";
import { toast } from "react-toastify";
import getToken from "config/api/getToken";

export default function ModalUbahMateri(props) {
  const [data, setData] = useState({
    sektor: props?.type,
    namaMateri: props?.title,
    fileMateri: props?.url,
  });
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
    console.log(data);
  };
  const [i_image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");
  const [loading3, setLoading3] = useState(false);
  const [loading2, setLoading2] = useState(false);
  let publicApis = publicApi();
  let token = getToken();

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${i_image.name}`).put(i_image);
    uploadTask.on(
      "state_changed",

      (snapshot) => {
        setLoading3(true);
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
            setLoading3(false);
          });
      }
    );
  };

  const ubahMateri2 = async () => {
    setLoading2(true);
    let urlFix = url === "" ? props?.url : url;
    const response = await axios
      .put(
        `${publicApis}/api/v1/materi/${props?.id}`,
        {
          modul_id: props.id_modul,
          type_materi: parseInt(data.sektor),
          title: data.namaMateri,
          file_materi: urlFix,
          order: 1,
        },
        token
      )
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
  return (
    <>
      {/* Modal Tambah Materi */}
      <div>
        <div
          className="modal fade"
          id={`ubahMateri${props?.index}`}
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Tambah Materi
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
                <label htmlFor="#namaModul" className="mb-2">
                  Tipe Materi
                </label>
                <select
                  name="sektor"
                  className="form-control mb-2"
                  id="sektor"
                  onChange={onChange}
                  value={data.sektor}
                >
                  <option value={1}>Materi PDF/PPT</option>
                  <option value={2}>Video</option>
                </select>
                <label htmlFor="#namaMateri">Judul Materi</label>
                <input
                  id="namaMateri"
                  name="namaMateri"
                  type="text"
                  className="form-control mb-3"
                  placeholder="Nama modul anda..."
                  onChange={onChange}
                  value={data.namaMateri}
                  required
                />

                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="fileMateri" style={{ fontSize: "95%" }}>
                      File Materi (.pdf,.mp4, .pptx)
                    </label>
                  </div>
                  <div className="col-md-6 text-right">
                    <Button
                      className="btn btn-secondary"
                      type="link"
                      isExternal
                      href={`${data.fileMateri}`}
                      target="_blank"
                    >
                      Materi Lama
                    </Button>
                  </div>
                </div>

                <input
                  type="file"
                  name="fileMateri"
                  id=""
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                />
                <div className="progress mb-3 mt-3">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: `${progress}%`,
                    }}
                    // eslint-disable-next-line jsx-a11y/aria-proptypes
                    aria-valuenow={progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
                <div className="text-right mb-3 font-weight-bold">
                  <span>{progress} %</span>
                </div>
                <div className="text-right">
                  <Button
                    className={`btn btn-${url === null ? "primary" : "danger"}`}
                    onClick={handleUpload}
                    isLoading={loading3 ? true : false}
                  >
                    {url === null ? "Upload" : "Upload"}
                  </Button>
                </div>
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
                    ubahMateri2();
                  }}
                  isLoading={loading2 ? true : false}
                >
                  Ubah Materi
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end modal tambah materi */}
    </>
  );
}
