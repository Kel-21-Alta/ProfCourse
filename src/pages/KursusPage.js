import Button from "elements/button";
import Card from "parts/Card";
import Footer from "parts/Footer";
import Navbar from "parts/Navbar";
import React, { useCallback, useEffect, useState } from "react";
import { getDataCourse } from "services/Beranda";

export default function KursusPage(props) {
  const [dataCourse, setDataCourse] = useState([]);

  const getDataCourseList = useCallback(async () => {
    const data = await getDataCourse();
    setDataCourse(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getDataCourse]);

  useEffect(() => {
    getDataCourseList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar {...props}></Navbar>
      <div className="container">
        <h2 className="text-center font-weight-bolder">Kursus Tersedia</h2>
        <h4 className="text-left mt-5">Kursus Terbaru:</h4>
        <div className="row">
          {dataCourse
            .slice(0, dataCourse.length)
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
                  ></Card>
                </div>
              );
            })}
          <div className="col-md-4 mt-3">
            <Card button="Detail Kursus"></Card>
          </div>
          <div className="col-md-4 mt-3">
            <Card button="Detail Kursus"></Card>
          </div>
          <div className="col-md-4 mt-3">
            <Card button="Detail Kursus"></Card>
          </div>
          <div className="col-md-4 mt-3">
            <Card button="Detail Kursus"></Card>
          </div>
          <div className="col-md-4 mt-3">
            <Card button="Detail Kursus"></Card>
          </div>
          <div className="col-md-4 mt-3">
            <Card button="Detail Kursus"></Card>
          </div>
          <div className="col-md-4 mt-3">
            <Card button="Detail Kursus"></Card>
          </div>
          <div className="col-md-4 mt-3">
            <Card button="Detail Kursus"></Card>
          </div>
          <div className="col-md-4 mt-3">
            <Card button="Detail Kursus"></Card>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-5 text-center">
            <Button className="btn" isButtonLoad>
              Lebih banyak
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Footer></Footer>
      </div>
    </>
  );
}
