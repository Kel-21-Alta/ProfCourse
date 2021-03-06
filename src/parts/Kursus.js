import React, { useCallback, useEffect, useState } from "react";
import Card from "./Card";
import Button from "elements/button";
import { getDataCourse } from "services/Beranda";
import axios from "axios";
import { useDispatch } from "react-redux";
import publicApi from "config/api/publicApi";
import getToken from "config/api/getToken";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";
import { accountData } from "redux/actions/accountActions";

export default function Kursus(props) {
  const [dataCourse, setDataCourse] = useState([]);
  const dispatch = useDispatch("");
  const urlApi = publicApi();
  const config = getToken();
  const location = useLocation();

  const getDataCourseList = useCallback(async () => {
    const data = await getDataCourse();
    setDataCourse(data);
    const response = await axios
      .get(`${urlApi}/api/v1/currentuser`, config)
      .catch((err) => {
        Cookies.remove("token");
        location.reload();
      });
    dispatch(accountData(response.data.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getDataCourse]);

  useEffect(() => {
    getDataCourseList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="container pt-1">
      <h3 className="font-weight-bold mb-5">Kursus Terbaru:</h3>
      <div className="row">
        {dataCourse
          .slice(-3)
          .reverse()
          .map((item) => {
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
      </div>
      <div className="row">
        <div className="w-100 text-right mt-4">
          <Button type="link" href="/kursus">
            <h5>Lainnya...</h5>
          </Button>
        </div>
      </div>
    </section>
  );
}
