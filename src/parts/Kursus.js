import React from "react";
import Card from "./Card";

export default function Kursus(props) {
  return (
    <section className="container pt-1">
      <h3 className="font-weight-bold mb-5">Kursus Terbaru:</h3>
      <div className="row">
        <div className="col-md-4 mb-4">
          <Card button="Detail Kursus"></Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card button="Detail Kursus"></Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card button="Detail Kursus"></Card>
        </div>
      </div>
    </section>
  );
}
