import React, { Component } from "react";
import Navbar from "../../component/Navbar";
import Landing_page from "./Landing_page";
import Bottom_Navigation from "../../component/Bottom_Navigation";
import axios from "axios";
import Search from "../../component/Search";
export default class index extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios.get("https://lindungihutan.com/api/list-campaign").then(res => {
      console.log(res);
      const data = res.data;
      this.setState({ data });
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        <div style={{ paddingBottom: "58px" }} className="text">
          {this.state.data.map(data => (
            <Landing_page
              id={data.id}
              image={data.small_image}
              short_desc={data.short_description}
              deskripsi={data.description}
              title={data.title}
              date={data.tanggal_pelaksanaan}
            />
          ))}
        </div>
        <Bottom_Navigation />
      </div>
    );
  }
}
