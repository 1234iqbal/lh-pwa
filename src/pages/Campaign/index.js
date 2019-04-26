import React, { Component } from "react";
import Navbar from "../../component/Navbar";
import Campaign from "./Campaign";
import Bottom_Navigation from "../../component/Bottom_Navigation";
import axios from "axios";
import Search from "../../component/Search";
export default class index extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios
      .get("http://localhost/laravel/lh23jan18/api/list-campaign")
      .then(res => {
        console.log(res);
        const data = res.data;
        this.setState({ data });
      });
  }
  render() {
    return (
      <div>
        <Navbar />
        <Search />
        <center>
          <div style={{ margin: 24, paddingBottom: "50px" }}>
            anda harus search terlebih dahulu :)
          </div>
        </center>
        {/* <div style={{ paddingBottom: "58px" }} className="text">
          {this.state.data.map(data => (
            <Campaign
              id={data.id}
              image={data.small_image}
              short_desc={data.short_description}
              deskripsi={data.description}
              title={data.title}
              date={data.tanggal_pelaksanaan}
            />
          ))}
        </div> */}
        <Bottom_Navigation />
      </div>
    );
  }
}
