import axios from "axios";
import getToken from "config/api/getToken";
import publicApi from "config/api/publicApi";
import Button from "elements/button";
import Footer from "parts/Footer";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { accountData } from "redux/actions/accountActions";

export default function AkunSaya() {
  const [dataUser, setDataUser] = useState({});
  const [loading, setLoading] = useState(false);
  let urlApi = publicApi();
  let config = getToken();
  let dispatch = useDispatch();
  const enrollCourses = async () => {
    setLoading(true);
    const response = await axios
      .get(`${urlApi}/api/v1/currentuser`, config)
      .catch((err) => {});
    setDataUser(response.data.data);
    setLoading(false);
    console.log(response.data.data);
    dispatch(accountData(response.data.data));
  };
  useEffect(() => {
    enrollCourses();
    window.scroll(0, 0);
    document.title = "Profcourse | Akun Saya";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="container mb-5">
        <div className="text-center">
          <h2 className="font-weight-bold">Akun Saya</h2>
          {loading ? (
            "Loading"
          ) : (
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
          )}

          <br />
          <div className="mt-3">
            <Button
              className="btn btn-primary my-2 mr-2 "
              type="link"
              href="/akun-saya/ubah-password"
            >
              Ubah Password
            </Button>
            <Button
              className="btn btn-primary ml-2 px-4"
              type="link"
              href="/akun-saya/ubah-data"
            >
              Ubah Data
            </Button>
          </div>
        </div>
        <div className="mt-5">
          <div className="form-group mb-3">
            <label className="font-weight-bolder" htmlFor="nama">
              Nama
            </label>
            <input
              id="nama"
              type="text"
              className="form-control"
              value={dataUser?.name === "" ? "Belum disetel" : dataUser?.name}
              disabled
            />
          </div>
          <div className="form-group mb-3">
            <label className="font-weight-bolder" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="text"
              className="form-control"
              value={dataUser?.email === "" ? "Belum disetel" : dataUser?.email}
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
              className="form-control"
              value={dataUser?.no_hp === "" ? "Belum disetel" : dataUser?.no_hp}
              disabled
            />
          </div>
          <div className="form-group mb-3">
            <label className="font-weight-bolder" htmlFor="tempatTanggalLahir">
              Tempat, Tanggal Lahir
            </label>
            <input
              id="tempatTanggalLahir"
              type="text"
              className="form-control"
              value={
                dataUser?.birth_place === "" || dataUser?.birth === ""
                  ? "Belum disetel"
                  : `${dataUser?.birth_place}, ${dataUser?.birth}`
              }
              disabled
            />
          </div>
          <div className="form-group mb-3">
            <label className="font-weight-bolder" htmlFor="bio">
              Bio
            </label>
            <input
              id="bio"
              type="text"
              className="form-control"
              value={dataUser?.bio === "" ? "Belum disetel" : dataUser?.bio}
              disabled
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Footer></Footer>
      </div>
    </>
  );
}
