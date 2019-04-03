import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Landing_page from "./pages/Landing_page";
import Campaign from "./pages/Campaign";
import "./asset/css/master.css";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Landing_page} />
          <Route path="/Kampanye" component={Campaign} />
          <Route path="/Donasi" component={Landing_page} />
          <Route path="/dll" component={Landing_page} />
        </div>
      </Router>
    );
  }
}

export default App;
