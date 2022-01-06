import Button from "elements/button";
import Star from "elements/Star";
import Comments from "parts/Comments";
import Footer from "parts/Footer";
import Navbar from "parts/Navbar";
import React from "react";

export default function DetailKursus(props) {
  return (
    <>
      <Navbar {...props}></Navbar>
      <div className="container">
        <div className="row ">
          <div className="col-md-6 mt-5">
            <div className="text-left ">
              <h2 className="font-weight-bolder ">Buat Kursus Baru</h2>
              <p className="font-weight-light mt-3">
                Ilmu data (bahasa Inggris: data science) adalah suatu disiplin
                ilmu yang khusus mempelajari data, khususnya data kuantitatif
                (data numerik), baik yang terstruktur maupun tidak
                terstruktur.[1][2] Berbagai subjek yang dibahas dalam ilmu data
                meliputi semua proses data, mulai dari pengumpulan data,
                analisis data, pengolahan data, manajemen data, kearsipan,
                pengelompokan data, penyajian data, distribusi data, hingga cara
                mengubah data menjadi kesatuan informasi yang dapat dipahami
                semua orang.
              </p>
            </div>
          </div>
          <div className="col-md-6 mt-5 m-0 p-0">
            <div
              className="text-center img "
              style={{ width: "570px", height: "250px" }}
            >
              <img
                src="https://picsum.photos/seed/picsum/450/300"
                width="100%"
                height="100%"
                alt=""
              />
            </div>
            <div className="row  text-left">
              <div className="col-md-1"></div>
              <div className="col-md-3 text-left m-0 mt-3 p-0">
                <Star value={4} width={35} height={35}></Star>
              </div>
              <div className="col-md-2 mt-3 text-right m-0 p-0">
                <h4 className="font-weight-bolder">4/5</h4>
              </div>
              <div className="col-md-6"></div>

              <div className="col-md-12 text-center mt-2">
                <Button className="btn btn-block" isPrimary>
                  Daftar Kursus
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6">
            <div
              className="container py-3 px-4 rounded"
              style={{ width: "100%", backgroundColor: "#DEE2E6" }}
            >
              <div className="row">
                <div className="col-auto">
                  <h3 className="font-weight-bolder">Modul 1</h3>
                  <ul>
                    <li>
                      <Button type="link" href="#">
                        Modul 1
                      </Button>
                    </li>
                    <li>
                      <Button type="link" href="#">
                        Modul 2
                      </Button>
                    </li>
                    <li>
                      <Button type="link" href="#">
                        Modul 3
                      </Button>
                    </li>
                    <li>
                      <Button type="link" href="#">
                        Modul 4
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className=" " style={{ fontSize: "40px", display: "inline" }}>
              {" "}
              <p style={{ fontSize: "20px" }}>
                {" "}
                <i className="fas fa-user-friends	px-3"></i> 23 Orang mengambil
                kursus ini
              </p>
            </div>
            <div>
              <h5 className="font-weight-bolder">Rank Nilai</h5>
              <ul>
                <li>
                  Agus Dwi Milniadi <div className="text-right">100pts</div>
                </li>
                <li>
                  Agus Dwi Milniadi <div className="text-right">100pts</div>
                </li>
                <li>
                  Agus Dwi Milniadi <div className="text-right">100pts</div>
                </li>
                <li>
                  Agus Dwi Milniadi <div className="text-right">100pts</div>
                </li>
                <li>
                  Agus Dwi Milniadi <div className="text-right">100pts</div>
                </li>
                <li>
                  Agus Dwi Milniadi <div className="text-right">100pts</div>
                </li>
                <li>
                  Agus Dwi Milniadi <div className="text-right">100pts</div>
                </li>
                <li>
                  Agus Dwi Milniadi <div className="text-right">100pts</div>
                </li>
                <li>
                  Agus Dwi Milniadi <div className="text-right">100pts</div>
                </li>{" "}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-4">
            <Comments></Comments>
          </div>
          <div className="col-md-12 mt-4">
            <Comments></Comments>
          </div>
          <div className="col-md-12 mt-4">
            <Comments></Comments>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <Footer></Footer>
      </div>
    </>
  );
}
