
import React from "react";
import reactMixin from "react-mixin";
import update     from "react-addons-update";
import * as UA from "../actions/UserActions";
import BasicInput from "./BasicInput";
var LinkedStateMixin = require("react-addons-linked-state-mixin");

export default class CompanyRegister extends React.Component {
  constructor() {
    super();
    this.register = this.register.bind(this);
    this.state = this.getState();
  }

  getState() {
    return {
      name: "",
      description: "",
      address: "",
      url: "",
      size: ""
    };
  }

  register(e) {
    e.preventDefault();
    UA.createCompany(
      this.state
    );
  }
  render () {
    return (
      <div class="jumbotron hero-spacer">
      <form className="register-company" class="form-horizontal" onSubmit={this.register}>
          <legend>Register Company</legend>
          <BasicInput desc="Name" valueLink={this.linkState("name")} type="text" size="40"></BasicInput>
          <BasicInput desc="Description" valueLink={this.linkState("name")} type="textbox" size="40"></BasicInput>
          {/*<BasicInput desc="Name" valueLink={this.linkState("name")} type="text" size="40"></BasicInput>
          <BasicInput desc="Name" valueLink={this.linkState("name")} type="text" size="40"></BasicInput>
          <BasicInput desc="Name" valueLink={this.linkState("name")} type="text" size="40"></BasicInput>*/}
          <button type="submit" class="btn btn-primary">Register</button>
      </form>

      </div>
    );
  }
}

reactMixin(UserRegister.prototype, LinkedStateMixin);
