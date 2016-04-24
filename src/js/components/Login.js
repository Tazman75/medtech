import React from "react";
import update     from "react-addons-update";
import cookie from "react-cookie";
import reactMixin from "react-mixin";
var LinkedStateMixin = require("react-addons-linked-state-mixin");
import * as UA from "../actions/UserActions";

export default class Login extends React.Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.state = this.getState();
  }

  getState() {
    let state = {
      username: cookie.load("username"),
      password: "",
      logged: false
    };
    if (state.username != "") {
      state.logged = true;
    }
    return state;
  }

  login() {
    // UA.loginUser(this.state);
    cookie.save("username", this.state.username, { path: "/" });
    // this.setState(
    //   update(this.state, {
    //     logged: {$set: true}
    //   })
    // );
    UA.loginUser({
      username: this.state.username,
      password: this.state.password
    });

  }

  logout() {
    console.log("Logout");
    cookie.remove("username", { path: "/" });
    this.setState(
      update(this.state, {
        logged: {$set: false}
      })
    );
  }

  render() {
    if (this.state.logged != "") {
      return (
        <div class="navbar-form">
          <label class="control-label">Logged In:</label>
          { this.state.username }
          <div class="btn" onClick={this.logout}>Logout</div>
        </div>);
    }
    return(
      <form class="navbar-form form-inline" role="form" onSubmit={this.login}>
        <div>
          <input valueLink={this.linkState("username")} type="text" placeholder="Username.."></input>
          <input valueLink={this.linkState("password")} type="text" placeholder="Password.." type="password"></input>
          <button type='submit' class='btn btn-primary'>Login</button>
        </div>
      </form>
    );
  }
}

reactMixin(Login.prototype, LinkedStateMixin);
