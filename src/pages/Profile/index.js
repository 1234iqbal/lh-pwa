import React, { Component } from "react";
import Navbar from "../../component/Navbar";
import Profile from "./Profile";
import Bottom_Navigation from "../../component/Bottom_Navigation";
export default class index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{ margin: 24, paddingBottom: "50px" }}>
          <Profile />
        </div>
        <Bottom_Navigation />
      </div>
    );
  }
}
