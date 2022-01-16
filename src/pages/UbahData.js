// import axios from "axios";
import getToken from "config/api/getToken";
import Button from "elements/button";
import { storage } from "../firebase";
import Footer from "parts/Footer";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import publicApi from "config/api/publicApi";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useHistory } from "react-router-dom";

export default function UbahData() {
  const dataUser = useSelector((state) => state.dataAccount.data);

  // const [dataUser, setDataUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");
  const [i_image, setImage] = useState("");
  const history = useHistory();

  //   HANDLE UPLOAD

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
  // USE STATE FORM
  const [data, setData] = useState({
    nama: dataUser?.name,
    email: dataUser?.email,
    nomorHp: dataUser?.no_hp,
    tempat: dataUser?.birth_place,
    tanggalLahir: dataUser?.birth,
    bio: dataUser?.bio,
    urlRedux: dataUser?.profile,
  });

  // END USE STATE FORM
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };
  const token = getToken();
  const publicApis = publicApi();
  const dataSend = {
    profile: url === "" ? data.urlRedux : url,
    name: data.nama,
    noHp: data.nomorHp,
    birthplace: data.tempat,
    birth: data.tanggalLahir,
    bio: data.bio,
  };
  const updateData = async () => {
    setLoading(true);
    const response = await axios
      .put(`${publicApis}/api/v1/currentuser`, dataSend, token)
      .catch((err) => {});
    if (response.status > 400) {
      toast.error("Gagal update data");
    } else {
      toast.success("Sukses update data");
      setLoading(false);
      setTimeout(() => {
        history.push("/akun-saya");
      }, 2500);
    }
  };
  // END HANDLE UPLOAD
  useEffect(() => {
    // enrollCourses();
    window.scroll(0, 0);
    document.title = "Profcourse | Akun Saya";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container mb-5">
        <div className="text-center">
          <h2 className="font-weight-bold">Ubah Data</h2>
          <img
            src={
              dataUser?.url_image === ``
                ? `https://firebasestorage.googleapis.com/v0/b/investa-image-upload.appspot.com/o/images%2Fadmin-default-user.png?alt=media&token=b25c4440-da1a-4886-814e-7357c67f0468
            `
                : `${dataUser?.url_image}`
            }
            width={180}
            height={180}
            style={{ display: "inline-block", borderRadius: "50%" }}
            alt=""
            srcset=""
          />
          <br />

          <label htmlFor="changeFoto" className="mt-3 mb-1">
            <span className="border border-primary rounded p-2 px-3">
              Pilih Gambar{" "}
            </span>
            <span className="border border-primary rounded p-2 mx-2">
              {progress} %
            </span>
          </label>

          <input
            type="file"
            id="changeFoto"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            hidden
          />
          <br />
          <br />
          <Button
            className={`btn btn-${progress === 100 ? `success` : `primary`}`}
            onClick={handleUpload}
            isLoading={loading ? true : false}
          >
            {progress === 100 ? "Upload Berhasil" : "Upload Gambar"}
          </Button>
        </div>
        <div className="mt-5">
          <div className="form-group mb-3">
            <label className="font-weight-bolder" htmlFor="nama">
              Nama
            </label>
            <input
              id="nama"
              type="text"
              name="nama"
              className="form-control"
              value={data.nama}
              onChange={onChange}
            />
          </div>
          <div className="form-group mb-3">
            <label className="font-weight-bolder" htmlFor="email">
              Email
            </label>
            <input
              name="email"
              id="email"
              type="text"
              className="form-control"
              value={data.email === "" ? "" : data.email}
              disabled
            />
          </div>
          <div className="form-group mb-3">
            <label className="font-weight-bolder" htmlFor="nomorHp">
              Nomor Handphone
            </label>
            <input
              id="nomorHp"
              type="text"
              name="nomorHp"
              onChange={onChange}
              className="form-control"
              value={data.nomorHp === "" ? "" : data.nomorHp}
            />
          </div>
          <div className="form-group mb-3">
            <div className="row">
              <div className="col-md-6">
                <label className="font-weight-bolder" htmlFor="tempat">
                  Tempat
                </label>
                <input
                  id="tempat"
                  type="text"
                  name="tempat"
                  className="form-control"
                  onChange={onChange}
                  value={data.tempat === "" ? " " : `${data.tempat}`}
                />
              </div>
              <div className="col-md-6">
                <label className="font-weight-bolder" htmlFor="tanggalLahir">
                  Tanggal Lahir
                </label>
                <input
                  id="tanggalLahir"
                  type="date"
                  name="tanggalLahir"
                  className="form-control"
                  onChange={onChange}
                  value={data.tanggalLahir === "" ? "" : `${data.tanggalLahir}`}
                  // value={"2000-05-05"}
                />
              </div>
            </div>
          </div>
          <div className="form-group mb-3">
            <label className="font-weight-bolder" htmlFor="bio">
              Bio
            </label>
            <input
              id="bio"
              type="text"
              name="bio"
              className="form-control"
              value={data.bio === "" ? " " : data.bio}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="mt-3 text-right">
          <Button
            className="btn btn-secondary my-2 mr-2 "
            type="link"
            href="/akun-saya"
          >
            Batalkan
          </Button>
          <Button
            className="btn btn-primary ml-2 px-4"
            onClick={updateData}
            isLoading={loading ? true : false}
          >
            Simpan
          </Button>
        </div>
      </div>
      <div className="mt-5">
        <Footer></Footer>
      </div>
      <ToastContainer />
    </>
  );
}
