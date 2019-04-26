import React, { Component } from "react";
import Update_profile from "./Update_profile";
import Navbar from "../../component/Navbar";
import Bottom_Navigation from "../../component/Bottom_Navigation";
export default class index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{ margin: 24, paddingBottom: "50px" }}>
          <Update_profile />
        </div>
        <Bottom_Navigation />
      </div>
    );
  }
}
