import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing_page from "./pages/Landing_page";
import "./asset/css/master.css";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Landing_page} />
          <Route path="/Kampanye" exact component={Landing_page} />
          <Route path="/Donasi" exact component={Landing_page} />
          <Route path="/dll" exact component={Landing_page} />
        </div>
      </Router>
    );
  }
}

export default App;
