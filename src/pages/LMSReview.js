import axios from "axios";
import getToken from "config/api/getToken";
import publicApi from "config/api/publicApi";
import Button from "elements/button";
import Sidebar from "parts/Sidebar";
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function LMSReview() {
  const detailData = useSelector((state) => state.dataDetailCourses.data.data);
  const [starsValue, setStarsValue] = useState("");
  const [komentar, setKomentar] = useState("");
  const [loading, setLoading] = useState(false);
  const params = useParams().id;
  console.log();
  const history = useHistory();
  const onChange = (e) => {
    const value = e.target.value;
    setKomentar({
      value,
    });
    console.log(komentar);
  };

  const valueStars = {
    size: 80,
    count: 5,
    isHalf: false,
    value: 0,
    color: "#eaeaea",
    activeColor: "yellow",
    onChange: (newValue) => {
      setStarsValue(newValue);
    },
  };
  const token = getToken();
  const publicApis = publicApi();
  let dataSend = {
    rating: starsValue,
    review: `${komentar.value}`,
    course_id: `${params}`,
  };
  const updateData = async () => {
    setLoading(true);
    const response = await axios
      .post(`${publicApis}/api/v1/feedback`, dataSend, token)
      .catch((err) => {});
    setLoading(false);
    if (response.status > 400) {
      toast.error("Gagal update data");
    } else {
      toast.success("Sukses update data");
      setTimeout(() => {
        history.push(`/detail-kursus/${params}`);
      }, 2500);
    }
  };
  return (
    <>
      <div className="mt-0 wrapper-sidebar " id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column h-screen">
          <div id="content">
            <div className="container my-5">
              <div className="mb-3">
                <div className="text-center">
                  <h2>Review Courses {detailData?.name_courses}</h2>
                </div>
                <div className="container">
                  <div className="form-group mb-3">
                    <div className="text-center" style={{ paddingLeft: "34%" }}>
                      <ReactStars {...valueStars} />
                    </div>
                    <label className="font-weight-bolder" htmlFor="komentar">
                      Komentar
                    </label>
                    <textarea
                      id="komentar"
                      type="text"
                      name="komentar"
                      style={{ backgroundColor: "#E5E5E5" }}
                      onChange={onChange}
                      className="form-control"
                    />
                  </div>
                  <div className="text-right">
                    <Button
                      className="btn btn-primary"
                      onClick={updateData}
                      isLoading={loading ? true : false}
                    >
                      Kirim Review Courses
                    </Button>
                  </div>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
          <div>
            <div className="container my-5">
              <div className="row">
                <div className="col-md-6">
                  <Button className="btn btn-secondary">Kembali</Button>
                </div>
                <div className="col-md-6 text-right">
                  <Button className="btn btn-primary" type="link" href={`/`}>
                    Selesai
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright © Profcourse 2022</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
