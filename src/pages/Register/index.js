import React, { Component } from "react";
import Register from "./Register";
import axios from "axios";

export default class index extends Component {
  state = {
    name: "test",
    email: "test@gmail.com",
    password: "test1234",
    confirm_password: "test1234"
  };
  OnSubmit = e => {
    e.preventDefault();
    axios
      .get(
        `http://localhost/laravel/lh23jan18/api/daftar?name=sajak&email=mifjak1@gmail.com&password=1234jabal&confirm_password=1234jabal`
      )
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
        <Register handle={this.HandleChange} submit={this.OnSubmit} />
      </div>
    );
  }
}
