import React, { Component } from "react";
import Register from "./Register";
import axios from "axios";

export default class index extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    error: ""
  };
  OnSubmit = e => {
    e.preventDefault();
    axios
      .get(
        `http://localhost/laravel/lh23jan18/api/daftar?name=${
          this.state.name
        }&email=${this.state.email}&password=${
          this.state.password
        }&password_confirmation=${this.state.confirm_password}`
      )
      .then(res => {
        try {
          console.log(res.data.meta.api_token);
          const token = res.data.meta.api_token;
          localStorage.setItem("token", token);
          window.location = "/home";
        } catch (ex) {
          if (ex.res && ex.res.status === 400) {
            const error = { ...this.state.error };
            error.email = ex.res.data;
            this.setState({ error });
          }
        }
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
