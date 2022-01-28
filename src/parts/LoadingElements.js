import React from "react";
import ReactLoading from "react-loading";

export default function LoadingElements() {
  return (
    <>
      <div className="container">
        <div className="text-center">
          <ReactLoading
            type="bars"
            height={"20%"}
            width={"20%"}
            color="#004AAD"
          ></ReactLoading>
        </div>
      </div>
    </>
  );
}
