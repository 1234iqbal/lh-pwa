import React, { Component } from "react";
import Navbar from "../../component/Navbar";
import Bottom_Navigation from "../../component/Bottom_Navigation";
import DetailCampaign from "./Detail_Campaign";
import Axios from "axios";
export default class index extends Component {
  state = {
    data: [],
    id: 120
  };
  componentDidMount() {
    Axios.get(
      "http://localhost/laravel/lh23jan18/api/detail-campaign/" +
        this.props.match.params.id
    ).then(res => {
      console.log(res);
      const data = res.data;
      this.setState({ data });
    });
  }
  render() {
    console.log(this.state.data);
    return (
      <div>
        <Navbar />
        <div style={{ margin: 24, paddingBottom: "50px" }} className="text">
          <DetailCampaign
            image={this.state.data.small_image}
            title={this.state.data.title}
            deskripsi={this.state.data.description}
          />
        </div>
        <Bottom_Navigation />
      </div>
    );
  }
}
