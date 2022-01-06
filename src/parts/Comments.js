import Star from "elements/Star";
import React from "react";

export default function Comments() {
  return (
    <>
      <div className="card p-3 shadow-md mt-3">
        <div className="row">
          <div className="col-md-2 text-center">
            {/* eslint-disable-next-line */}
            <img
              src="https://i.imgur.com/hczKIze.jpg"
              width={80}
              className="user-img rounded-circle mr-2"
            />
          </div>
          <div className="col-md-10 ">
            <h6>
              Kaesang Pangarep{" "}
              <div>
                <Star value={4} width={35} height={35}></Star>
              </div>
            </h6>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
