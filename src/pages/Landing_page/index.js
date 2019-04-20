import React, { Component } from "react";
import Navbar from "../../component/Navbar";
import Bottom_Navigation from "../../component/Bottom_Navigation";
import Carausel from "../../component/Carausel";
import Card from "../../component/Card";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

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
        <div style={{ margin: 24 }}>
          <Grid
            container
            spacing={8}
            style={{
              paddingTop: 15,
              paddingBottom: "58px"
            }}
          >
            {this.state.text.map(res => (
              <Grid item xs={4}>
                <Link to="/kampanye">
                  <Card title={res} img={this.state.image} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </div>
        <Bottom_Navigation />
      </div>
    );
  }
}
