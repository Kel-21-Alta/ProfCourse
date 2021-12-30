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
          src="https://picsum.photos/200/300"
          className="card-img-top"
          alt="..."
          height={180}
          width={342}
          style={{ objectFit: "cover" }}
        />
        <div className="card-body">
          <h4 className="card-title font-weight-bold mb-3 text-center">
            Data Science
          </h4>
          {props.barLoading ? (
            <div className="progress mb-3">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${props.progress}%` }}
                aria-valuenow={props.progress}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                {props.progress} %
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="text-center">
            {props.isEnded ? (
              <Button className="btn px-4 py-2" isDanger isDisabled>
                {props.button}
              </Button>
            ) : (
              <Button
                className="btn px-4 py-2"
                type="link"
                isPrimary
                href="/detail-kursus/1"
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
