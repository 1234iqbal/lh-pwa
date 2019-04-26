import React, { Component } from "react";
import Navbar from "../../component/Navbar";
import Tabsbar from "../../component/Tabsbar";
import Notifikasi from "./Notifikasi";
import Bottom_Navigation from "../../component/Bottom_Navigation";

export default class index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Notifikasi />
        <Bottom_Navigation />
      </div>
    );
  }
}
