import Button from "elements/button";
import React from "react";
import propTypes from "prop-types";
export default function Card(props) {
  return (
    <div>
      <div
        className="card rounded shadow-md align-item-center"
        style={{ width: "342", height: "316" }}
      >
        <img
          src={props.url_image}
          className="card-img-top"
          alt="..."
          height={180}
          width={342}
          style={{ objectFit: "cover" }}
        />
        <div className="card-body">
          <h4 className="card-title font-weight-bold mb-3 text-center">
            {props.title}
          </h4>
          {props.barLoading ? (
            <>
              <div className="progress mb-2">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${props.progress}%` }}
                  aria-valuenow={props.progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <div className="text-right mb-1 mt-1 font-weight-bold">
                {props.progress} %
              </div>
            </>
          ) : (
            ""
          )}
          <div className="text-center">
            {props.isEnded ? (
              <Button className="btn px-4 py-2 btn-block" isDanger isDisabled>
                {props.button}
              </Button>
            ) : (
              <Button
                className="btn px-4 py-2 btn-block"
                type="link"
                isPrimary
                href={`/${props.urlTarget}/${props.course_id}`}
              >
                {props.button}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Card.prototype = {
  barLoading: propTypes.bool,
  isEnded: propTypes.bool,
};
