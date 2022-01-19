import axios from "axios";
import getToken from "config/api/getToken";
import publicApi from "config/api/publicApi";
import Card from "parts/Card";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SearchPage() {
  let params = useParams();
  const urlApi = publicApi();
  const config = getToken();
  const [kursus, setKursus] = useState([]);
  const [spesialisasi, setSpesialisasi] = useState([]);

  const fetchData = async () => {
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
  };
  useEffect(() => {
    fetchData();
    console.log(spesialisasi);
    console.log(kursus);
  });
  return (
    <>
      <div className="container">
        <div className="text-center">
          <h3>Hasil pencarian "{params?.judul}"</h3>
        </div>
        <h4>Kursus :</h4>
        <div className="row">
          {kursus === null ? (
            "Data tidak ditemukan"
          ) : (
            <>
              {kursus?.map((item) => {
                return (
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
                );
              })}
            </>
          )}
        </div>
        <br />
        <h4>Spesialisasi :</h4>
        <div className="row">
          {spesialisasi?.message === "Data Tidak ada" ? (
            "Data tidak ditemukan"
          ) : (
            <>
              {spesialisasi?.map((item) => {
                return (
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
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}
