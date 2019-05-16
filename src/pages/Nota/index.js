import React, { Component } from "react";
import Navbar from "../../component/Navbar";
import Bottom_Navigation from "../../component/Bottom_Navigation";
import Nota from "./Nota";
export default class index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{ margin: 24, paddingBottom: "50px" }}>
          <Nota />
        </div>
        <Bottom_Navigation />
      </div>
    );
  }
}
