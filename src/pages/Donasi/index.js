import React, { Component } from "react";
import Navbar from "../../component/Navbar";
import Donasi from "./Donasi";
import Bottom_Navigation from "../../component/Bottom_Navigation";
import Axios from "axios";
export default class index extends Component {
  state = {
    full_name: "",
    amount: "",
    email: "",
    phone: "",
    comment: "",
    bank: ""
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    Axios.post("http://localhost/laravel/lh23jan18/api/donasi", {
      name: this.state.name,
      amount: this.state.amount,
      email: this.state.email,
      phone: this.state.phone,
      comment: this.state.comment,
      bank: this.state.bank
    }).then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div style={{ margin: 24, paddingBottom: "50px" }}>
          <Donasi submit={this.onSubmit} handle={this.handleChange} />
        </div>
        <Bottom_Navigation />
      </div>
    );
  }
}
