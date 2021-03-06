import React from "react";
import reactMixin from "react-mixin";
import update     from "react-addons-update";
import BasicInput from "./BasicInput";
import * as UA from "../actions/UserActions";
var LinkedStateMixin = require("react-addons-linked-state-mixin");

import UserStore from "../stores/UserStore";

class Companies extends React.Component {
  constructor() {
    super()
    this.state = {};
  }
  componentWillMount() {
  }

  render () {
    var companies = UserStore.getCompanies();
    <option value="volvo">Volvo</option>
    var options = companies.map(y => {return (<option value={y.id}>{y.name}</option>);});
    return (
      <div class="form-group">
      <label class="control-label col-md-3">{ this.props.desc }</label>
      <div class="input-group col-md-7">
        <select {...update(this.props, {children: {$set: null}})}>{options}</select>
      </div>
      </div>
    );
  }
}

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
      company: "",
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
          <BasicInput desc="Username" valueLink={this.linkState("username")} type="text" size="40"></BasicInput>
          <BasicInput desc="Email" valueLink={this.linkState("email")} type="text" size="40"></BasicInput>
          <BasicInput desc="Password" valueLink={this.linkState("password")} type="password" size="40"></BasicInput>
          <BasicInput desc="Repeat Password" valueLink={this.linkState("confirm_password")} type="password" size="40"></BasicInput>
          <BasicInput desc="First Name" valueLink={this.linkState("first_name")} type="text" size="40"></BasicInput>
          <BasicInput desc="Last Name" valueLink={this.linkState("last_name")} type="text" size="40"></BasicInput>
          <Companies desc="Companies" valueLink={this.linkState("company")}/>
          <button type="submit" class="btn btn-primary">Register</button>
      </form>

      </div>
    );
  }
}

reactMixin(UserRegister.prototype, LinkedStateMixin);
