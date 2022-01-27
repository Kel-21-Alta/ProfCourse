import axios from "axios";
import getToken from "config/api/getToken";
import publicApi from "config/api/publicApi";
import Button from "elements/button";
import Card from "parts/Card";
import Footer from "parts/Footer";
import LoadingElements from "parts/LoadingElements";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function KursusSayaPage(props) {
  const dataUser = useSelector((state) => state.dataAccount.data);
  let name = dataUser;
  let firstWord = name?.name?.split(" ")[0];
  const [dataKursus, setDataKursus] = useState("");
  const [loading, setLoading] = useState("");
  const urlApi = publicApi();
  const config = getToken();

  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Profcourse | Kursus Saya";
    const fetchData = async () => {
      setLoading(true);
      const response = await axios
        .get(`${urlApi}/api/v1/coursesendroll`, config)
        .catch((err) => {});
      setDataKursus(response?.data?.data);
      setLoading(false);
    };
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, config);
  return (
    <>
      {loading ? (
        <>
          <div
            className="container m-auto"
            style={{ paddingLeft: "40%", paddingTop: "10%" }}
          >
            <LoadingElements />
          </div>
        </>
      ) : (
        <div className="container">
          <div className="text-center font-weight-bold">
            <h2>
              Haloo {firstWord}! <br />
              Selamat Belajar Ilmu Proffesional
            </h2>
          </div>
          <div className="row">
            <div className="col-md-12 text-right mt-4">
              <Button
                className="btn mr-2"
                type="link"
                href="/buat-kursus-baru"
                isPrimary
              >
                Buat Kursus Baru
              </Button>
              <Button
                className="btn"
                type="link"
                href="/request-kursus-baru"
                isPrimary
              >
                Request Kursus Baru
              </Button>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-auto">
              <h4 className="text-left mt-5">Riwayat Kursus:</h4>
            </div>
          </div>
          <div className="row">
            {dataKursus?.courses?.map((item) => {
              return (
                <div className="col-md-4">
                  <Card
                    barLoading
                    title={item?.title}
                    urlTarget="detail-kursus"
                    course_id={item?.course_id}
                    progress={item?.progress}
                    isEnded={item?.progress >= 100 ? true : false}
                    button={
                      item?.progress >= 100 ? "Selesai" : "Lanjutkan Belajar"
                    }
                  ></Card>
                </div>
              );
            })}

            <div className="col-md-4"></div>
          </div>
        </div>
      )}

      <div className="mt-5">
        <Footer></Footer>
      </div>
    </>
  );
}
