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
import Logout from "./pages/Logout";
import Nota from "./pages/Nota";
import Axios from "axios";
class App extends Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      Axios.get(
        `http://localhost/laravel/lh23jan18/api/user?token=${jwt}`
      ).then(res => {
        const user = res.data.data[0];
        this.setState({ user });
      });
    } catch (ex) {}
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/logout" exact component={Logout} />

          <Route path="/profile" exact component={Profile} />

          <Route path="/home" exact component={Landing_page} />
          <Route path="/kampanye" exact component={Campaign} />
          <Route
            path="/detail-kampanye/:id"
            exact
            component={Detail_Campaign}
          />
          <Route path="/nota" exact component={Nota} />
          <Route path="/notifikasi" exact component={Notifikasi} />
          <Route path="/update_profile" exact component={Update_profile} />
          <Route
            path="/donasi"
            exact
            render={props => <Donasi {...props} user={this.state.user} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
