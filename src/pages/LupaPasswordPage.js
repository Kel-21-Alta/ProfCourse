import React from "react";
import Logo from "assets/images/logo/logo.svg";
import LoginImage from "assets/images/login/forgoy.svg";
import Button from "elements/button";
import swal from "sweetalert";

export default function LupaPasswordPage() {
  const cobaAlert = () => {
    swal("Good job!", "You clicked the button!", "success");
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
                      <img src={LoginImage} alt="" width={340} />
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
                <div
                  className="login-wrap p-4 p-md-5"
                  style={{ marginTop: "80px" }}
                >
                  <div className="d-flex">
                    <div className="w-100 text-center">
                      <h3 className="mb-4 font-weight-bolder">Lupa Password</h3>
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
                    <div className="form-group text-center">
                      <button
                        className="btn btn-primary"
                        style={{ padding: "5px 155px" }}
                        onClick={cobaAlert}
                      >
                        Reset
                      </button>
                    </div>
                  </form>
                  <p className="text-center">
                    Punya akun?{" "}
                    <Button type="link" data-toggle="tab" href="/masuk">
                      Masuk
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
