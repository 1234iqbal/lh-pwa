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

  handleChange_full_name = e => {
    this.setState({ full_name: e.target.full_name });
  };

  handleChange_amount = e => {
    this.setState({ amount: e.target.amount });
  };

  handleChange_email = e => {
    this.setState({ email: e.target.email });
  };

  handleChange_phone = e => {
    this.setState({ phone: e.target.phone });
  };

  handleChange_comment = e => {
    this.setState({ comment: e.target.comment });
  };

  handleChange_bank = e => {
    this.setState({ bank: e.target.bank });
  };

  handleSubmit = e => {
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
          <Donasi />
        </div>
        <Bottom_Navigation />
      </div>
    );
  }
}
