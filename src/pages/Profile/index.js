import React, { Component } from "react";
import Navbar from "../../component/Navbar";
import Profile from "./Profile";
import Bottom_Navigation from "../../component/Bottom_Navigation";
import Axios from "axios";
export default class index extends Component {
  state = {
    data: [],
    users: "admin"
  };

  componentDidMount() {
    Axios.get(
      "http://localhost/laravel/lh23jan18/api/profile/" + this.state.users
    ).then(res => {
      console.log(res);
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        <div style={{ margin: 24, paddingBottom: "50px" }}>
          <Profile
            // tentangsaya
            avatar={this.state.data.avatar}
            name={this.state.data.username}
            biografi={this.state.data.biografi}
            harapan={this.state.data.harapan}
            // total campaign
            patisipasi={this.state.data.patisipasi}
            campaign={this.state.data.campaign}
            history={this.state.data.history}
            donasi={this.state.data.donasi}
          />
        </div>
        <Bottom_Navigation />
      </div>
    );
  }
}
