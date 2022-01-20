import axios from "axios";
import getToken from "config/api/getToken";
import publicApi from "config/api/publicApi";
import Card from "parts/Card";
import LoadingElements from "parts/LoadingElements";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SearchPage() {
  let params = useParams();
  const urlApi = publicApi();
  const config = getToken();
  const [kursus, setKursus] = useState([]);
  const [spesialisasi, setSpesialisasi] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios
      .get(`${urlApi}/api/v1/courses?s=${params?.judul}`, config)
      .catch((err) => {
        console.log(err);
      });
    setKursus(response?.data?.data);
    const responseSpesialisasi = await axios
      .get(`${urlApi}/api/v1/spesializations?s=${params?.judul}`, config)
      .catch((err) => {
        console.log(err);
      });
    setSpesialisasi(responseSpesialisasi?.data?.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
    console.log(spesialisasi);
    console.log(kursus);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);
  return (
    <>
      <div className="container">
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
            <div className="text-center">
              <h3>Hasil pencarian "{params?.judul}"</h3>
            </div>
            {kursus === null ? (
              ""
            ) : (
              <>
                {kursus?.map((item) => {
                  return (
                    <>
                      <h4>Kursus :</h4>
                      <div className="row">
                        <div className="col-md-4 mb-4">
                          <Card
                            button="Detail Kursus"
                            key={item?.course_id}
                            course_id={item?.course_id}
                            title={item?.title}
                            url_image={item?.url_image}
                            urlTarget="detail-kursus"
                          />
                        </div>
                      </div>
                    </>
                  );
                })}
              </>
            )}
            <br />
            {spesialisasi?.message === "Data Tidak ada" ? (
              ""
            ) : (
              <>
                {spesialisasi?.map((item) => {
                  return (
                    <>
                      <h4>Spesialisasi : </h4>
                      <div className="row">
                        <div className="col-md-4 mb-4">
                          <Card
                            button="Detail Kursus"
                            key={item?.course_id}
                            course_id={item?.course_id}
                            title={item?.title}
                            url_image={item?.url_image}
                            urlTarget="detail-kursus"
                          ></Card>
                        </div>
                      </div>
                    </>
                  );
                })}
              </>
            )}
            {kursus === null && spesialisasi?.message === "Data Tidak ada" ? (
              <>
                <div className="text-center">
                  <h6>Data tidak ditemukan</h6>
                </div>
              </>
            ) : (
              ""
            )}
          </>
        )}
      </div>
    </>
  );
}
