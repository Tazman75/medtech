import React from "react";
import reactMixin from "react-mixin";
import update     from "react-addons-update";
import BasicInput from "../components/BasicInput";
import * as UA from "../actions/UserActions";
var LinkedStateMixin = require("react-addons-linked-state-mixin");

export default class UserRegister extends React.Component {
  constructor() {
    super();
    this.register = this.register.bind(this);

    this.state = this.getState();
  }

  getState() {
    return {
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: ""
    };
  }

  register(e) {
    e.preventDefault();
    UA.createUser(
      this.state
    );
  }
  render () {
    return (
      <div class="jumbotron hero-spacer">
      <form className="register-user" class="form-horizontal" onSubmit={this.register}>
          <legend>Registration</legend>
          <div class="form-group">
          <label class="control-label col-md-3">Username:</label>
          <div class="input-group col-md-7">
            <input valueLink={this.linkState("username")} type="text" size="40"></input>
          </div>
          </div>
          <div class="form-group">
          <label class="control-label col-md-3">Email:</label>
          <div class="input-group col-md-7">
            <input valueLink={this.linkState("email")} type="text" size="40"></input>
          </div>
          </div>
          <div class="form-group">
          <label class="control-label col-md-3">Password:</label>
          <div class="input-group col-md-7">
            <input valueLink={this.linkState("password")} type="password" size="40"></input>
          </div>
          </div>
          <div class="form-group">
          <label class="control-label col-md-3">Confirm Password:</label>
          <div class="input-group col-md-7">
            <input valueLink={this.linkState("confirm_password")} type="password" size="40"></input>
          </div>
          </div>
          <div class="form-group">
          <label class="control-label col-md-3">First Name:</label>
          <div class="input-group col-md-7">
            <input valueLink={this.linkState("first_name")} type="text" size="40"></input>
          </div>
          </div>
          <div class="form-group">
          <label class="control-label col-md-3">Last Name:</label>
          <div class="input-group col-md-7">
            <input valueLink={this.linkState("last_name")} type="text" size="40"></input>
          </div>
          </div>
          <button type="submit" class="btn btn-primary">Register</button>
      </form>

      </div>
    );
  }
}

reactMixin(UserRegister.prototype, LinkedStateMixin);
