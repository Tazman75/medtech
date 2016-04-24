import React from "react";
import BasicInput from "../components/BasicInput";
import * as UA from "../actions/UserActions";
import UserActions from "../actions/UserActions";

UserActions.createUser.listen(() => {
    console.log("UserRegister Done");
});


export default class UserRegister extends React.Component {
  constructor() {
    super();
    this.register = this.register.bind(this);
    this.emailChange = this.emailChange.bind(this);

    this.state = {
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: ""
    };
  }

  emailChange() {
    // console.log("email");
    console.log(this.refs.email.value);

  }

  register(e) {
    e.preventDefault();
    console.log(this.refs);
    UA.createUser(
      this.state
    );
    console.log("UserRegister");
  }
  render () {
    return (
      <div class="jumbotron hero-spacer">
      <form className="register-user" class="form-horizontal" onSubmit={this.register}>
          <legend>Registration</legend>
          <div class="form-group">
          <label class="control-label col-md-3">Email:</label>
          <div class="input-group col-md-7">
            <BasicInput name="email" ref="email" type="text" size="40" onChange={this.emailChange}/>
          </div>
          </div>
          <div class="form-group">
          <label class="control-label col-md-3">Password:</label>
          <div class="input-group col-md-7">
            <BasicInput name="password" type="password" size="40"/>
          </div>
          </div>
          <div class="form-group">
          <label class="control-label col-md-3">Confirm Password:</label>
          <div class="input-group col-md-7">
            <BasicInput name="confirm_password" type="password" size="40"/>
          </div>
          </div>
          <div class="form-group">
          <label class="control-label col-md-3">First Name:</label>
          <div class="input-group col-md-7">
            <BasicInput name="first_name" type="text" size="40"/>
          </div>
          </div>
          <div class="form-group">
          <label class="control-label col-md-3">Last Name:</label>
          <div class="input-group col-md-7">
            <BasicInput name="last_name" type="text" size="40"/>
          </div>
          </div>
          <button type="submit" class="btn btn-primary">Register</button>
      </form>

      </div>
    );
  }
}

export default class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      step: 1
    };
  }
  render () {
    switch(this.state.step) {
    case 1:
      return (<UserRegister/>);
    case 2:
      return (<div>2</div>);
    case 3:
      return (<div>3</div>);
    case 4:
      return (<div>4</div>);
    }
    return (
      <div/>
    );
  }
}
