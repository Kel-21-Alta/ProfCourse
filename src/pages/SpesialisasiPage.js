import React from "react";
import Button from "elements/button";
import Card from "parts/Card";
import Footer from "parts/Footer";
import Navbar from "parts/Navbar";
export default function SpesialisasiPage(props) {
  return (
    <>
      <Navbar {...props}></Navbar>
      <div className="container">
        <h2 className="text-center font-weight-bolder">
          Spesialisasi Tersedia
        </h2>
        <h4 className="text-left mt-5">Spesialisasi Terbaru:</h4>
        <div className="row">
          <div className="col-md-4 mt-3">
            <Card button="Detail Kursus"></Card>
          </div>
          <div className="col-md-4 mt-3">
            <Card button="Detail Spesialisasi"></Card>
          </div>
          <div className="col-md-4 mt-3">
            <Card button="Detail Spesialisasi"></Card>
          </div>
          <div className="col-md-4 mt-3">
            <Card button="Detail Spesialisasi"></Card>
          </div>
          <div className="col-md-4 mt-3">
            <Card button="Detail Spesialisasi"></Card>
          </div>
          <div className="col-md-4 mt-3">
            <Card button="Detail Spesialisasi"></Card>
          </div>
          <div className="col-md-4 mt-3">
            <Card button="Detail Spesialisasi"></Card>
          </div>
          <div className="col-md-4 mt-3">
            <Card button="Detail Spesialisasi"></Card>
          </div>
          <div className="col-md-4 mt-3">
            <Card button="Detail Spesialisasi"></Card>
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
