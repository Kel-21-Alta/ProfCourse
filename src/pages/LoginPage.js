import Button from "elements/button";
import React from "react";
import Logo from "assets/images/logo/logo.svg";
import LoginImage from "assets/images/login/login.svg";

export default function LoginPage() {
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
                      <Button className="btn" isLarger isPrimary hasShadow>
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
    </>
  );
}
