import React, { Component } from "react";
import Register from "./Register";
import axios from "axios";

export default class index extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };
  OnSubmit = e => {
    e.preventDefault();
    axios
      .post("https://localhost/laravel/lh23jan18/api/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        console.log(res);
        const data = res.data;
      });
  };

  HandleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Register />
      </div>
    );
  }
}
