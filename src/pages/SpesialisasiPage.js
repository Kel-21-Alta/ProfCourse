import React, { useCallback, useEffect, useState } from "react";
import Button from "elements/button";
import Card from "parts/Card";
import Footer from "parts/Footer";
import { getDataSpesialisasi } from "services/Beranda";
import LoadingElements from "parts/LoadingElements";
export default function SpesialisasiPage(props) {
  const [dataSpesialisasi, setDataSpesialisasi] = useState([]);
  const [loading, setLoading] = useState([]);

  const getSpesialisasiList = useCallback(async () => {
    setLoading(true);
    const data = await getDataSpesialisasi();
    setDataSpesialisasi(data);
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getDataSpesialisasi]);

  useEffect(() => {
    getSpesialisasiList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    window.scroll(0, 0);
    document.title = "Profcourse | Spesialisasi";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container">
        <h2 className="text-center font-weight-bolder">
          Spesialisasi Tersedia
        </h2>
        <h4 className="text-left mt-5">Spesialisasi Terbaru:</h4>
        {loading ? (
          <>
            <div
              className="container m-auto"
              style={{
                paddingLeft: "40%",
                paddingTop: "5%",
                paddingBottom: "10%",
              }}
            >
              <LoadingElements />
            </div>
          </>
        ) : (
          <>
            <div className="row">
              {dataSpesialisasi
                .slice(0, dataSpesialisasi.length)
                .reverse()
                .reverse()
                .map((item) => {
                  return (
                    <div className="col-md-4 mt-3">
                      <Card
                        button="Detail Kursus"
                        key={item.course_id}
                        course_id={item.course_id}
                        title={item.title}
                        url_image={item.url_image}
                        urlTarget="detail-kursus"
                      ></Card>
                    </div>
                  );
                })}
            </div>
            <div className="row">
              <div className="col-md-12 mt-5 text-center">
                <Button className="btn" isButtonLoad>
                  Lebih banyak
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="mt-5">
        <Footer></Footer>
      </div>
    </>
  );
}
