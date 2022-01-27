import Button from "elements/button";
import BannerFoto from "assets/images/beranda/banner.svg";
import Icon1 from "assets/images/beranda/icon_kursus.svg";
import Icon2 from "assets/images/beranda/icon_anggota.svg";
import Icon3 from "assets/images/beranda/icon_spesialisasi.svg";
import { useCallback, useEffect, useState } from "react";
import { getSummaryServices } from "services/Beranda";

const Jumbotron = () => {
  const [summary, setSummary] = useState([]);

  const getDataSummary = useCallback(async () => {
    const data = await getSummaryServices();
    setSummary(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getSummaryServices]);

  useEffect(() => {
    getDataSummary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="container pt-1">
      <div className="row align-item-center">
        <div className="col-auto pr-5" style={{ width: 528 }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Belajar Tanpa Batas, <br />
            Tingkatkan Skill Proffesional
          </h1>
          <p className="mb-3 font-weight-light text-gray-500 w-100">
            Kursus yang ditujukan kepada para pekerja proffesional untuk
            melakukan upgrade skill yang dimiliki saat ini agar selalu menjadi
            yang terbaik
          </p>
          <Button
            className="btn px-5 shadow mb-0"
            href="/kursus"
            type="link"
            hasShadow
            isPrimary
          >
            Mulai Sekarang
          </Button>
          <div className="row mt-4 ">
            <div className="col-auto">
              <div className="align-item-center">
                <img
                  src={Icon1}
                  alt="icon1"
                  className="m-auto"
                  width={36}
                  height={36}
                  style={{ display: "block" }}
                />
              </div>

              <h6 className="mt-3">
                {summary.count_course}{" "}
                <span className="text-gray-500 font-weight light"> kursus</span>
              </h6>
            </div>
            <div className="col-auto">
              <div className="align-item-center">
                <img
                  src={Icon2}
                  alt="icon1"
                  className="m-auto"
                  width={36}
                  height={36}
                  style={{ display: "block" }}
                />
              </div>

              <h6 className="mt-3">
                {summary.count_user}{" "}
                <span className="text-gray-500 font-weight light">
                  {" "}
                  anggota
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <div className="align-item-center">
                <img
                  src={Icon3}
                  alt="icon1"
                  className="m-auto"
                  width={36}
                  height={36}
                  style={{ display: "block" }}
                />
              </div>

              <h6 className="mt-3">
                {summary.count_spesiazation}{" "}
                <span className="text-gray-500 font-weight light">
                  {" "}
                  spesialisasi
                </span>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-pl-8">
          <div style={{ width: "250px", height: "490px" }}>
            <img
              src={BannerFoto}
              style={{ marginTop: "-40px" }}
              alt="banner foto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Jumbotron;
