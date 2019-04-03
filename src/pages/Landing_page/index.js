import React, { Component } from "react";
import Navbar from "../../component/Navbar";
import Bottom_Navigation from "../../component/Bottom_Navigation";
import Carausel from "../../component/Carausel";
import Card from "../../component/Card";

export default class index extends Component {
  state = {
    text: [
      "Belum Selesai",
      "Telah Selesai",
      "Product Bundling",
      "Rawat Bumi",
      "dll"
    ]
  };
  render() {
    return (
      <div>
        <Navbar />
        <Carausel />
        {this.state.text.map(res => (
          <Card title={res} />
        ))}
        <Bottom_Navigation />
      </div>
    );
  }
}
