/* eslint-disable jsx-a11y/aria-proptypes */
import axios from "axios";
import publicApi from "config/api/publicApi";
import Button from "elements/button";
import Footer from "parts/Footer";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { ToastContainer } from "react-toastify";
import {
  removeSelectedSpesialisasi,
  setSpesialisasi,
} from "redux/actions/spesialisasiAction";
import KursusSpesialisasi from "parts/KursusSpesialisasi";

export default function DetailSpesialisasi(props) {
  const detailData = useSelector((state) => state.dataSpesialisasi.data);
  const idCourses = useParams().id;
  const dispatch = useDispatch();
  const urlApi = publicApi();
  const token = Cookies.get("token");
  const tokenAtob = atob(token);
  let config = {
    headers: {
      Authorization: `Bearer ${tokenAtob}`,
    },
  };

  const fetchData = async () => {
    const response = await axios
      .get(`${urlApi}/api/v1/spesializations/${idCourses}`, config)
      .catch((err) => {
        console.log(err);
      });
    dispatch(setSpesialisasi(response.data.data));
  };

  useEffect(() => {
    fetchData();
    window.scroll(0, 0);
    document.title = "Profcourse | Detail Spesialisasi";
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => {
      dispatch(removeSelectedSpesialisasi());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idCourses]);
  // console.log(detailData);
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-md-6 mt-5">
            <div className="text-left ">
              <h2 className="font-weight-bolder ">{detailData?.title}</h2>
              <p className="font-weight-light mt-3">
                {detailData?.description}
              </p>
            </div>
          </div>
          <div className="col-md-6 mt-5 m-0 p-0">
            <div
              className="text-center img "
              style={{ width: "570px", height: "250px" }}
            >
              <img
                src={detailData?.image_url}
                width="100%"
                height="100%"
                alt=""
              />
            </div>
            <div className="row  text-left">
              <div className="col-md-1"></div>
              <div className="col-md-3 text-left m-0 mt-3 p-0"></div>
              <div className="col-md-2 mt-3 text-right m-0 p-0"></div>
              <div className="col-md-6"></div>

              <div className="col-md-12 text-center mt-2">
                <>
                  {/* <Button
                    className="btn btn-block btn-success"
                    type="link"
                    href={`/belajar/213132`}
                  >
                    Lanjutkan Belajar
                  </Button> */}
                </>
                <Button className="btn btn-block" isPrimary onClick="">
                  Daftar Spesialisasi
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mt-4">
            {detailData?.courses?.map((item) => {
              return (
                <KursusSpesialisasi
                  key={item?.title}
                  title={item?.title}
                  description={item?.description}
                  rating={item?.rating}
                ></KursusSpesialisasi>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-5">
        <Footer></Footer>
      </div>
      <ToastContainer />
    </>
  );
}
