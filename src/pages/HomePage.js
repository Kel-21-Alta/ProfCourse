import React, { Component } from "react";
import Navbar from "parts/Navbar";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <Navbar {...this.props}></Navbar>
      </>
    );
  }
}
