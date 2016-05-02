import React from "react";
import update     from "react-addons-update";
import cookie from "react-cookie";
import reactMixin from "react-mixin";
var LinkedStateMixin = require("react-addons-linked-state-mixin");
import * as UA from "../actions/UserActions";
import UserStore from "../stores/UserStore";
import { Link } from "react-router";
import { states } from "../stores/StoreStates";
var { LOGIN_USER_SUCCESS, LOGOUT_USER_SUCCESS } = states;

export default class Login extends React.Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.register = this.register.bind(this);

    this.state = {};
    let token = cookie.load("token");
    if ( token === "undefined") {
      this.state.login = 0;
    } else {
      this.state.login = 1;
    }
  }
  componentWillMount() {
    UserStore.listen((status) => {
      switch(status) {
      case LOGIN_USER_SUCCESS:
        this.setState({login: 1});
        break;
      case LOGOUT_USER_SUCCESS:
        this.state.username = "";
        this.state.password = "";
        this.setState({
          login: 0
        });
        break;
      }
    });
  }

  login() {
    UA.loginUser({
      username: this.state.username,
      password: this.state.password
    });
  }

  logout() {
    UA.logoutUser();
  }

  register() {
  }

  render() {
    if (this.state.login == 1) {
      return (
        <div class="navbar-form">
          <label class="control-label">Logged In:</label>
          { this.state.username }
          <div class="btn" onClick={this.logout}>Logout</div>
        </div>);
    }
    return(
      <div>
        <form class="navbar-form form-inline" role="form" onSubmit={ this.login }>
          <div>
            <input valueLink={this.linkState("username")} type="text" placeholder="Username.." size="15"></input>
            <input valueLink={this.linkState("password")} type="text" placeholder="Password.." size="10" type="password"></input>
            <button type='submit' class='btn btn-primary'>Login</button>
            <Link class='btn btn-primary' to="/register" >Reg</Link>
          </div>
        </form>
      </div>
    );
  }
}

reactMixin(Login.prototype, LinkedStateMixin);
