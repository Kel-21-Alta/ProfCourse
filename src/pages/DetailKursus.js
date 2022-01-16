/* eslint-disable jsx-a11y/aria-proptypes */
import axios from "axios";
import publicApi from "config/api/publicApi";
import Button from "elements/button";
import Star from "elements/Star";
import Comments from "parts/Comments";
import Footer from "parts/Footer";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { setComments, setCoursesDetail } from "redux/actions/coursesAction";
import { toast, ToastContainer } from "react-toastify";

export default function DetailKursus(props) {
  const detailData = useSelector((state) => state.dataDetailCourses.data.data);
  const dataComments = useSelector((state) => state.dataCommentsId.data.data);

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
      .get(`${urlApi}/api/v1/courses/${idCourses}`, config)
      .catch((err) => {
        console.log(err);
      });
    const responseComments = await axios
      .get(`${urlApi}/api/v1/courses/${idCourses}/feedback`, config)
      .catch((err) => {
        console.log(err);
      });

    dispatch(setCoursesDetail(response.data));
    dispatch(setComments(responseComments.data));
  };
  const dataJson = {
    course_id: idCourses,
  };
  const enrollCourses = async () => {
    const response = await axios
      .post(`${urlApi}/api/v1/course/register`, dataJson, config)
      .catch((err) => {
        toast.error('"Gagal mendaftarkan Courses"');
      });
    toast.success(response.data.data.Message);
    setTimeout(() => {
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    }, 2000);
  };

  useEffect(() => {
    fetchData();
    window.scroll(0, 0);
    document.title = "Profcourse | Detail Kursus";

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(detailData);
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-md-6 mt-5">
            <div className="text-left ">
              <h2 className="font-weight-bolder ">{detailData?.name_course}</h2>
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
                {detailData?.info_user.is_register ? (
                  <>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${detailData?.info_user.progress}%` }}
                        aria-valuenow={detailData?.info_user.progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        {detailData?.info_user.progress} %
                      </div>
                    </div>
                    <Button
                      className="btn btn-block btn-success"
                      type="link"
                      href={`/belajar/${detailData?.course_id}`}
                    >
                      Lanjutkan Belajar
                    </Button>
                  </>
                ) : (
                  <Button
                    className="btn btn-block"
                    isPrimary
                    onClick={enrollCourses}
                  >
                    Daftar Kursus
                  </Button>
                )}
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
                    {detailData?.moduls?.map((item) => {
                      return (
                        <li>
                          <Button type="link" href="#">
                            {item.name_modul}
                          </Button>
                        </li>
                      );
                    })}
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
                <i className="fas fa-user-friends	px-3"></i>{" "}
                {detailData?.user_taken_course} Orang mengambil kursus ini
              </p>
            </div>
            <div>
              <h5 className="font-weight-bolder">Rank Nilai</h5>
              <ul>
                {detailData?.rangking?.map((item) => {
                  return (
                    <li>
                      {item.name_user}{" "}
                      <div className="text-right">{item.skor}pts</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          {dataComments?.review?.map((item) => {
            return (
              <div className="col-md-12 mt-4">
                <Comments
                  key={item.name_user}
                  name_user={item.name_user}
                  rating={item.rating}
                  url={item.url}
                  body={item.body}
                ></Comments>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-5">
        <Footer></Footer>
      </div>
      <ToastContainer />
    </>
  );
}
