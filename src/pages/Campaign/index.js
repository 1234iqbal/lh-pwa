import React, { Component } from "react";
import Navbar from "../../component/Navbar";
import Campaign from "./Campaign";
import Bottom_Navigation from "../../component/Bottom_Navigation";
export default class index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{ paddingBottom: "58px" }}>
          <Campaign />
          <Campaign />
          <Campaign />
        </div>
        <Bottom_Navigation />
      </div>
    );
  }
}
