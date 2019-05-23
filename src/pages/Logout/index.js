import React, { Component } from "react";

export default class index extends Component {
  componentDidMount() {
    localStorage.removeItem("token");
    window.location = "/";
  }

  render() {
    return null;
  }
}
