import Button from "elements/button";
import React from "react";
import Card from "./Card";

export default function Spesialisasi(props) {
  return (
    <section className="container pt-1">
      <h3 className="font-weight-bold mb-5">Spesialisasi Terbaru:</h3>
      <div className="row">
        <div className="col-md-4 mb-4">
          <Card button="Detail Spesialisasi"></Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card button="Detail Spesialisasi"></Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card button="Detail Spesialisasi"></Card>
        </div>
      </div>
      <div className="row">
        <div className="w-100 text-right mt-4">
          <Button type="link" href="/lupa-password">
            <h5>Lainnya...</h5>
          </Button>
        </div>
      </div>
    </section>
  );
}
