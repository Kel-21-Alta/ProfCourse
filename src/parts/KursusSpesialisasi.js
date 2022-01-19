import Star from "elements/Star";
import React from "react";
import { useSelector } from "react-redux";

export default function KursusSpesialisasi(props) {
  const detailData = useSelector((state) => state.dataSpesialisasi.data);

  console.log("PROPS ", detailData.courses);
  return (
    <>
      <div className="card p-3 shadow-md mt-3">
        <div className="row">
          <div className="col-md-1 text-center">
            <h1>-</h1>
          </div>
          <div className="col-md-7">
            <h3>{props.title}</h3>
          </div>
          <div className="col-md-4 text-center">
            <Star value={props.rating} width={35} height={35}></Star>
            <span>{props.rating}/5</span>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-11">{props.description}</div>
        </div>
      </div>
    </>
  );
}
