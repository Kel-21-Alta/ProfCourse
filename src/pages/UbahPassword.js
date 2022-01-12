import axios from "axios";
import getToken from "config/api/getToken";
import publicApi from "config/api/publicApi";
import Button from "elements/button";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export default function UbahPassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const data = {
    password_old: oldPassword,
    password_new: newPassword,
  };
  let apiPublic = publicApi();
  let token = getToken();
  let history = useHistory();

  let changePassword = async () => {
    setLoading(true);
    let response = await axios
      .put(`${apiPublic}/api/v1/changepassword`, data, token)
      .catch((err) => {
        console.log("err ", err.toJSON().status === 5);
        if (err.toJSON().status === 500) {
          setLoading(false);
          toast.error("Gagal, cek kembali passsword lama anda");
        }
      });
    if (!response.error) {
      setLoading(false);
      toast.success("Sukses mengubah password");
      // eslint-disable-next-line react-hooks/rules-of-hooks
      setTimeout(() => {
        history.push("/akun-saya");
      }, 2500);
    }
  };
  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Profcourse | Ubah Password";
  });
  return (
    <>
      <div className="container">
        <div className="text-center">
          <h2 className="font-weight-bolder">Ubah Password</h2>
        </div>
        <div className="form-group mb-3">
          <label className="font-weight-bolder" htmlFor="passwordOld">
            Password Lama
          </label>
          <input
            id="passwordOld"
            type="password"
            className="form-control"
            onChange={(event) => setOldPassword(event.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label className="font-weight-bolder" htmlFor="passwordNew">
            Password Baru
          </label>
          <input
            id="passwordNew"
            type="password"
            className="form-control"
            onChange={(event) => setNewPassword(event.target.value)}
          />
        </div>
        <div className="text-right">
          <Button
            className="btn btn-secondary mr-3"
            type="link"
            href="/akun-saya"
          >
            Batalkan
          </Button>
          <Button
            className="btn btn-primary"
            onClick={changePassword}
            isLoading={loading ? true : false}
          >
            Simpan
          </Button>
        </div>
      </div>
    </>
  );
}
