import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing_page from "./pages/Landing_page";
import Notifikasi from "./pages/Notifikasi";
import Campaign from "./pages/Campaign";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Update_profile from "./pages/Update_profile";
import "./asset/css/master.css";
import Donasi from "./pages/Donasi";
import Detail_Campaign from "./pages/Detail_Campaign";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/home" exact component={Landing_page} />
          <Route path="/kampanye" exact component={Campaign} />
          <Route
            path="/detail-kampanye/:id"
            exact
            component={Detail_Campaign}
          />
          <Route path="/notifikasi" exact component={Notifikasi} />
          <Route path="/update_profile" exact component={Update_profile} />
          <Route path="/donasi" exact component={Donasi} />
        </div>
      </Router>
    );
  }
}

export default App;
