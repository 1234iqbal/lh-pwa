import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";

export default class Detail_Campaign extends Component {
  render() {
    return (
      <div>
        <div style={{ paddingBottom: 20 }}>
          <b>{this.props.title}</b>
        </div>
        <img
          width="100%"
          height="200px"
          src={
            "https://lindungihutan.com/public/campaigns/small/" +
            this.props.image
          }
        />
        <div style={{ paddingTop: 20 }}>
          {ReactHtmlParser(this.props.deskripsi)}
        </div>
      </div>
    );
  }
}
