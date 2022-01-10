import Button from "elements/button";
import React from "react";

export default function LMSMateri() {
  return (
    <>
      <div className="mb-3">
        <div className="row mb-5">
          <div className="col-md-6 text-right">
            <span className="fs-5 font-weight-bolder mr-5">Materi 1</span>
          </div>
          <div className="col-md-6">
            <Button className="btn btn-primary">Materi 1</Button>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6 text-right">
            <span className="fs-5 font-weight-bolder mr-5">Materi 2</span>
          </div>
          <div className="col-md-6">
            <Button className="btn btn-primary">Materi 2 </Button>
          </div>
        </div>
      </div>
    </>
  );
}
