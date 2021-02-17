import React, { Component } from "react";
import { Sidebar } from "./Sidebar";
import { Content } from "./Content";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../redux/actions/auth"; 

export class TempSolutions extends Component { 
  state = { 
    email: "",
    password: "",
    msg: null,
  };
  static propTypes = {
    isAuth: PropTypes.bool,
    login: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired, 
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  componentDidUpdate(prevProps) {
    const { errors } = this.props;

    if (errors.id !== prevProps.errors.id) {
      if (errors.id === "LOGIN_FAIL") {
        this.setState({ msg: errors.msg.msg });
      } else {
        this.setState({
          msg: null,
        });
      }
    }

    //this.setState({ msg: errors.msg.msg });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const user = {
      email,
      password,
    };

    this.props.login(user);
  };

  render() {
    const isAuth = (
      <>
        {" "}
        <Sidebar auth={this.props.auth} />
        <Content auth={this.props.auth} />
      </>
    );

    const Auth = (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form
                        className="user"
                        onSubmit={this.onSubmit.bind(this)}
                      >
                        {this.state.msg ? (
                          <div className="alert alert-danger" role="alert">
                            {this.state.msg}
                          </div>
                        ) : null}

                        <div className="form-group">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            className="form-control form-control-user"
                            onChange={this.onChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            className="form-control form-control-user"
                            onChange={this.onChange}
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Login
                        </button>
                      </form>

                      <div className="text-center">
                        <a className="small" href="forgot-password.html">
                          Forgot Password?
                        </a>
                      </div>
                      <div className="text-center">
                        <a className="small" href="register.html">
                          Create an Account!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    return <>{!this.props.isAuth ? Auth : isAuth}</>;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  errors: state.errors,
  auth: state.auth,
});

export default connect(mapStateToProps, { login })(TempSolutions);
