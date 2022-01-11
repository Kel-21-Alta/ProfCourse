import React from "react";
import LoginImage from "assets/images/login/login.svg";

export default function LMSStarter() {
  return (
    <>
      <div className="container">
        <div className="text-center">
          <h1>Selamat Datang di Profcourse</h1>
          <img src={LoginImage} alt="logo" />
        </div>
      </div>
    </>
  );
}
