import React from "react";
import reactMixin from "react-mixin";
import update     from "react-addons-update";
import Select from "react-select";
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
    UserStore.listen((status) => {
      switch(status) {
      case LOGIN_USER_SUCCESS:
        PA.reloadProducts();
        break;
      case LOGOUT_USER_SUCCESS:
        break;
      }
      console.log('status', status, revStates[status]);
    });
  }
  
  render () {
    var companies = UserStore.getCompanies();
    var options = companies.map(y => {return {value: y.id, label: y.name};});
    return (
      <div class="form-group">
        <label class="control-label col-md-3">{ this.props.desc }</label>
        <div class="input-group col-md-7">
          <Select
            simpleValue
            options={ options }/>
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

    console.log('help');
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
          <Companies/>
          <button type="submit" class="btn btn-primary">Register</button>
      </form>

      </div>
    );
  }
}

reactMixin(UserRegister.prototype, LinkedStateMixin);
