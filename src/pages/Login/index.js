import React, { Component } from "react";
import Login from "./Login";
import axios from "axios";

export default class index extends Component {
  state = {
    email: "",
    password: ""
  };
  OnSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost/laravel/lh23jan18/api/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        console.log(res);
      });
  };

  HandleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Login handle={this.HandleChange} submit={this.OnSubmit} />
      </div>
    );
  }
}
