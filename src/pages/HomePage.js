import React, { Component } from "react";
import Navbar from "parts/Navbar";
import Jumbotron from "parts/Jumbotron";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <Navbar {...this.props}></Navbar>
        <Jumbotron></Jumbotron>
      </>
    );
  }
}
