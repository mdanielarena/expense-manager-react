import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Dashboard extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  componentDidMount() {
    //console.log(this.props.loadUser());
    console.log(`dashbaord component ${this.props.auth.user}`);
  }

  render() {
    return (
      <>
        <div className="container-fluid">
          <h1>Dashboard</h1>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, null)(Dashboard);
