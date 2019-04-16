import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing_page from "./pages/Landing_page";
import Campaign from "./pages/Campaign";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import "./asset/css/master.css";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/home" exact component={Landing_page} />
          <Route path="/Kampanye" component={Campaign} />
          <Route path="/Donasi" component={Landing_page} />
          <Route path="/dll" component={Landing_page} />
        </div>
      </Router>
    );
  }
}

export default App;
