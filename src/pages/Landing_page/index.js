import React, { Component } from "react";
import Navbar from "../../component/Navbar";
import Bottom_Navigation from "../../component/Bottom_Navigation";
import Carausel from "../../component/Carausel";
import Card from "../../component/Card";
import Grid from "@material-ui/core/Grid";

export default class index extends Component {
  state = {
    text: [
      "Belum Selesai",
      "Telah Selesai",
      "Product Bundling",
      "Rawat Bumi",
      "dll"
    ],
    image:
      "https://lindungihutan.com/public/img-community/-OgDRcYbNyJjEYy0qnkUm6JLTbSGCS8ap.jpg"
  };
  render() {
    return (
      <div>
        <Navbar />
        <Carausel />
        <Grid container style={{ paddingTop: 15, paddingBottom: "12%" }}>
          {this.state.text.map(res => (
            <Grid item xs={4}>
              <Card title={res} img={this.state.image} />
            </Grid>
          ))}
        </Grid>
        <Bottom_Navigation />
      </div>
    );
  }
}
