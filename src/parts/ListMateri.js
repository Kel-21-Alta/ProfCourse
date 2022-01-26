import Button from "elements/button";
import React from "react";

export default function ListMateri() {
  return (
    <>
      <div
        className="row rounded mt-2"
        style={{
          backgroundColor: "white",
        }}
      >
        <div className="col-md-6 mt-3">
          <ul>
            <li>Materi 1 : Dasar Golang</li>
          </ul>
        </div>
        <div className="col-md-6 text-right">
          <Button className="btn mr-2" type="link">
            Ubah
          </Button>
          <Button className="btn " type="link">
            Hapus
          </Button>
        </div>
      </div>
    </>
  );
}
