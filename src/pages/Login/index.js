import React, { Component } from "react";
import Login from "./Login";
import axios from "axios";

export default class index extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };
  OnSubmit = async e => {
    e.preventDefault();
    axios
      .get(
        `http://localhost/laravel/lh23jan18/api/login?email=${
          this.state.email
        }&password=${this.state.password}`
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
        <Login handle={this.HandleChange} submit={this.OnSubmit} />
      </div>
    );
  }
}
