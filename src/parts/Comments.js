import Star from "elements/Star";
import React from "react";

export default function Comments(props) {
  return (
    <>
      <div className="card p-3 shadow-md mt-3">
        <div className="row">
          <div className="col-md-2 text-center">
            {/* eslint-disable-next-line */}
            <img
              src={
                props.url === ""
                  ? "https://sman93jkt.sch.id/wp-content/uploads/2018/01/765-default-avatar-300x300.png"
                  : `${props.url}`
              }
              width={80}
              className="user-img rounded-circle mr-2"
            />
          </div>
          <div className="col-md-10 ">
            <h6>
              {props.name_user}{" "}
              <div>
                <Star value={props.rating} width={35} height={35}></Star>
              </div>
            </h6>
            <p>{props.body}</p>
          </div>
        </div>
      </div>
    </>
  );
}
