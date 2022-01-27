import React from "react";
import Logo from "assets/images/logo/logo.svg";
import Button from "elements/button";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 350 }}>
            <img src={Logo} alt="" />
            {/* <Logo /> */}
            <p className="brand-tagline">
              Mulai belajar sekarang dan tingkatkan skill proffesionalmu
            </p>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">Kursus</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/kursus">
                  Kursus Terbaru
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Spesialisasi</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href="/spesialisasi">Spesialisasi Terbaru</a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href="mailto:support@profcourse.id">support@profcourse.id</a>
              </li>
              <li className="list-group-item">
                <a href="tel:+6285812557541">0858-1255-7541</a>
              </li>
              <li className="list-group-item">
                <span>Nganjuk, Jawa Timur Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2021 • All rights reserved • Profcourse
          </div>
        </div>
      </div>
    </footer>
  );
}
