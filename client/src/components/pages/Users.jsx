import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { userLists } from "../../redux/actions/users";

export class Users extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    user_lists: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.userLists();
  }

  render() {
    return (
      <>
        <div className="container-fluid">
          <h1>Users</h1>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { userLists })(Users);
