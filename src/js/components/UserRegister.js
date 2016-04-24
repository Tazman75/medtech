import React from "react";
import update     from "react-addons-update";
import BasicInput from "../components/BasicInput";
import * as UA from "../actions/UserActions";

export default class UserRegister extends React.Component {
  constructor() {
    super();
    this.register = this.register.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.firstNameChange = this.firstNameChange.bind(this);
    this.lastNameChange = this.lastNameChange.bind(this);
    this.retypePasswordChange = this.retypePasswordChange.bind(this);

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

  usernameChange(e) {
    this.setState(update(this.state, {
      username: {$set: e.target.value}
    }));
  }

  firstNameChange(e) {
    this.setState(update(this.state, {
      first_name: {$set: e.target.value}
    }));
  }

  lastNameChange(e) {
    this.setState(update(this.state, {
      last_name: {$set: e.target.value}
    }));
  }


  passwordChange(e) {
    this.setState(update(this.state, {
      password: {$set: e.target.value}
    }));
  }

  retypePasswordChange(e) {
  }

  emailChange(email) {
    this.setState(update(this.state, {
      email: {$set: email.target.value}
    }));
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
            <BasicInput name="username" type="text" size="40" onChange={this.usernameChange}/>
          </div>
          </div>
          <div class="form-group">
          <label class="control-label col-md-3">Email:</label>
          <div class="input-group col-md-7">
            <BasicInput name="email" type="text" size="40" onChange={this.emailChange}/>
          </div>
          </div>
          <div class="form-group">
          <label class="control-label col-md-3">Password:</label>
          <div class="input-group col-md-7">
            <BasicInput name="password" type="password" size="40" onChange={this.passwordChange}/>
          </div>
          </div>
          <div class="form-group">
          <label class="control-label col-md-3">Confirm Password:</label>
          <div class="input-group col-md-7">
            <BasicInput name="confirm_password" type="password" size="40" onChange={this.retypePasswordChange}/>
          </div>
          </div>
          <div class="form-group">
          <label class="control-label col-md-3">First Name:</label>
          <div class="input-group col-md-7">
            <BasicInput name="first_name" type="text" size="40" onChange={this.firstNameChange}/>
          </div>
          </div>
          <div class="form-group">
          <label class="control-label col-md-3">Last Name:</label>
          <div class="input-group col-md-7">
            <BasicInput name="last_name" type="text" size="40" onChange={this.lastNameChange}/>
          </div>
          </div>
          <button type="submit" class="btn btn-primary">Register</button>
      </form>

      </div>
    );
  }
}
