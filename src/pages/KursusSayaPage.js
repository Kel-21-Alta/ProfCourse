import Button from "elements/button";
import Card from "parts/Card";
import Footer from "parts/Footer";
import React from "react";

export default function KursusSayaPage(props) {
  let progressBelajar = 60;
  return (
    <>
      <div className="container">
        <div className="text-center font-weight-bold">
          <h2>
            Haloo Agus! <br />
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
          <div className="col-md-4">
            <Card
              barLoading
              progress={progressBelajar}
              button="Lanjutkan Belajar"
            ></Card>
          </div>
          <div className="col-md-4">
            <Card
              barLoading
              progress={progressBelajar}
              button="Lanjutkan Belajar"
            ></Card>
          </div>

          <div className="col-md-4">
            <Card barLoading isEnded progress={100} button="Selesai"></Card>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Footer></Footer>
      </div>
    </>
  );
}
