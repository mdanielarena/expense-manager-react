import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Roles from "../pages/Roles";

export class Content extends Component {
  render() {
    return (
      <Router>
        <>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar auth={this.props.auth} />
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/roles" component={Roles} />
              </Switch>
            </div>
            <Footer />
          </div>
        </>
      </Router>
    );
  }
}

export default Content;
