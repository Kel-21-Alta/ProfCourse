import Footer from "parts/Footer";
import React, { useEffect } from "react";
import AboutImage from "assets/images/tentang-kami/about.svg";
import Button from "elements/button";
export default function TentangKamiPage(props) {
  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Profcourse | Tentang Kami";
  });
  return (
    <>
      <div className="container">
        <h2 className="text-center font-weight-bolder">Tentang Kami</h2>
        <div className="row mt-5">
          <div className="col-md-6 pl-5">
            <h4 className="text-left">Apa itu ProfCourse?</h4>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
          <div className="col-md-6 mt-5 text-center">
            <div style={{ width: "150px", height: "300px" }}>
              <img
                src={AboutImage}
                style={{ marginTop: "-40px" }}
                alt="banner foto"
                height="100%"
              />
            </div>
          </div>
        </div>
        <h2 className="text-center font-weight-bolder">Pertanyaan Terkait</h2>
        {/* eslint-disable */}
        <div className="row">
          <div className="col-lg-12 mx-auto">
            <div id="accordionExample" className="shadow-sm">
              <div className="card">
                <div
                  id="headingOne"
                  className="card-header bg-white shadow-sm border-0"
                >
                  <h6 className="mb-0 font-weight-bold">
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                      className="d-block position-relative text-dark collapsible-link py-2"
                    >
                      Apa itu ProfCourse?
                    </a>
                  </h6>
                </div>
                <div
                  id="collapseOne"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                  className="collapse show"
                >
                  <div className="card-body p-5">
                    <p className="font-weight-light m-0">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div
                  id="headingTwo"
                  className="card-header bg-white shadow-sm border-0"
                >
                  <h6 className="mb-0 font-weight-bold">
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                      className="d-block position-relative collapsed text-dark collapsible-link py-2"
                    >
                      Apa kelebihan menggunakan ProfCourse?
                    </a>
                  </h6>
                </div>
                <div
                  id="collapseTwo"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                  className="collapse"
                >
                  <div className="card-body p-5">
                    <p className="font-weight-light m-0">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div
                  id="headingThree"
                  className="card-header bg-white shadow-sm border-0"
                >
                  <h6 className="mb-0 font-weight-bold">
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                      className="d-block position-relative collapsed text-dark collapsible-link py-2"
                    >
                      Kenapa ProfCourse gratis?
                    </a>
                  </h6>
                </div>
                <div
                  id="collapseThree"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                  className="collapse"
                >
                  <div className="card-body p-5">
                    <p className="font-weight-light m-0">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-center font-weight-bolder mt-5">
            Syarat dan Ketentuan
          </h2>
          <div className="text-dark">
            <h6 className="text-left font-weight-bold text-dark mb-4">
              Selamat datang di ProfCourse.ID
            </h6>
            <p>
              Disarankan sebelum mengakses Situs ini lebih jauh, Anda terlebih
              dahulu membaca dan memahami syarat dan ketentuan yang berlaku.
              Syarat dan ketentuan berikut adalah ketentuan dalam pengunjungan
              Situs, isi dan/atau konten, layanan, serta fitur lainnya yang ada
              di dalam Situs. Dengan mengakses atau menggunakan Situs atau
              aplikasi lainnya yang disediakan oleh atau dalam Situs, berarti
              Anda telah memahami dan menyetujui serta terikat dan tunduk dengan
              segala syarat dan ketentuan yang berlaku di Situs ini.
            </p>
            <h6 className="text-left font-weight-bold text-dark mb-4">
              DEFINISI
            </h6>
            <p>
              Setiap kata atau istilah berikut yang digunakan di dalam Syarat
              dan Ketentuan ini memiliki arti seperti berikut di bawah, kecuali
              jika kata atau istilah yang bersangkutan di dalam pemakaiannya
              dengan tegas menentukan lain 1.1. “Kami”, berarti PT Dwi Cermat
              Indonesia selaku pemilik dan pengelola Situs serta aplikasi mobile
              yang bernama Cermati. 1.2. “Anda”, berarti tiap orang yang
              mengakses Situs dan menggunakan layanan dan jasa yang disediakan
              oleh Kami.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-center font-weight-bolder">Bantuan</h2>
          <form action="#" className="signin-form mt-4">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan email anda"
                required
              />
            </div>
            <div className="form-group mb-3">
              <textarea
                className="form-control"
                name=""
                id=""
                placeholder="Tulis pesan anda ...."
                cols="20"
                rows="10"
              ></textarea>
            </div>
            <div className="form-group text-right">
              <Button className="btn" isPrimary hasShadow>
                Kirim
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-5">
        <Footer></Footer>
      </div>
    </>
  );
}
