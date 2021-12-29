import Button from "elements/button";
import React, { useState } from "react";
import Logo from "assets/images/logo/logo.svg";
import LoginImage from "assets/images/login/login.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setLogin } from "services/auth";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onSubmit = async () => {
    const data = {
      email: email,
      password: password,
    };
    if (!email || !password) {
      toast.error("Email dan Password Wajib Diisi");
    } else {
      const responseAPI = await setLogin(data);
      if (responseAPI.error) {
        toast.error(responseAPI.message);
      } else {
        toast.success("Login Berhasil");
        history.push("/");
      }
    }
  };
  return (
    <>
      <section
        className="w-full h-full bg-primary m-0"
        style={{ minHeight: "100vh" }}
      >
        <div className="container ">
          <div
            className="row justify-content-center"
            style={{ paddingTop: "100px" }}
          >
            <div className="col-md-12 col-lg-10">
              <div className="wrap d-md-flex">
                <div className="img" style={{ backgroundColor: "#BACBEE" }}>
                  <div className="row">
                    <div className="col-md-12 text-center pt-5">
                      <img src={Logo} alt="" />
                    </div>
                    <div className="col-md-12 text-center pt-3">
                      <img src={LoginImage} alt="" width={380} />
                    </div>
                    <div className="col-md-12 text-center pt-4">
                      <h5
                        className="font-weight-bolder text-center"
                        style={{ fontSize: "16px" }}
                      >
                        Mulai Belajar Sekarang <br /> Tingkatkan Skill
                        Proffesionalmu
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="login-wrap p-4 p-md-5">
                  <div className="d-flex">
                    <div className="w-100 text-center">
                      <h3 className="mb-4 font-weight-bolder">Login</h3>
                    </div>
                  </div>
                  <form action="#" className="signin-form">
                    <div className="form-group mb-3">
                      <label className="font-weight-normal" htmlFor="name">
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Masukkan email anda"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="font-weight-normal" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="masukkan password anda"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <div
                        className="w-100 text-right"
                        style={{ fontSize: "14px" }}
                      >
                        <Button type="link" href="/lupa-password">
                          Lupa password?
                        </Button>
                      </div>
                    </div>
                    <div className="form-group text-center">
                      <Button
                        className="btn"
                        isLarger
                        isPrimary
                        hasShadow
                        onClick={onSubmit}
                      >
                        Masuk
                      </Button>
                    </div>
                  </form>
                  <p className="text-center">
                    Tidak punya akses?{" "}
                    <Button type="link" data-toggle="tab" href="/lupa-password">
                      Hubungi admin
                    </Button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
