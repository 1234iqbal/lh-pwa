import React, { Component } from "react";
import Navbar from "../../component/Navbar";
import Campaign from "./Campaign";
import Bottom_Navigation from "../../component/Bottom_Navigation";
import Axios from "axios";
import Search from "../../component/Search";
export default class index extends Component {
  state = {
    data: [],
    name: ""
  };

  componentDidMount() {
    Axios.post("http://localhost/laravel/lh23jan18/api/search-campaign", {
      q: this.state.name
    }).then(res => {
      console.log(res);
      const data = res.data;
      this.setState({ data });
    });
  }

  handleKeyPress(event) {
    if (event.key === "Enter") {
      this.props.history.push("/search");
      // var name = event.target.value;
      // Axios.get(
      //   `http://localhost/laravel/lh23jan18/api/search-campaign?q=${name}`
      // ).then(res => {
      //   console.log(res.data);
      //   const datas = res.data;
      //   this.setState({ data: datas });
      // });
    }
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.state.data);
    return (
      <div>
        <Navbar />
        <Search handle={this.handleChange} submit={this.handleKeyPress} />

        <center style={{ margin: 24, marginTop: "30%" }}>
          {!this.state.data === [] ? (
            <div style={{ margin: 24, paddingBottom: "50px" }}>
              <Campaign />
            </div>
          ) : (
            <div>
              <img src="https://ecs7.tokopedia.net/img/search_no_result.png" />
              <div style={{ margin: 24, paddingBottom: "50px" }}>
                <b>anda harus search terlebih dahulu</b>
              </div>
            </div>
          )}
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
