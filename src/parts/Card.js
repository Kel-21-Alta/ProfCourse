import Button from "elements/button";
import React from "react";
export default function Card(props) {
  return (
    <div>
      <div
        className="card rounded shadow-lg align-item-center"
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
          <div className="text-center">
            <Button className="btn px-4 py-2" isPrimary>
              {props.button}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
