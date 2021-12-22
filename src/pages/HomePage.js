import React, { Component } from "react";
import Navbar from "parts/Navbar";
import Jumbotron from "parts/Jumbotron";
import Kursus from "parts/Kursus";
import Spesialisasi from "parts/Spesialisasi";
import Footer from "parts/Footer";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <Navbar {...this.props}></Navbar>
        <Jumbotron></Jumbotron>
        <Kursus></Kursus>
        <Spesialisasi></Spesialisasi>
        <Footer></Footer>
      </>
    );
  }
}
