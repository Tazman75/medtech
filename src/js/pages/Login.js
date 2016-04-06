import React from "react";
import BasicInput from "../components/BasicInput";


export default class Login extends React.Component {
  login() {

  }
  render () {
    return (
    <header class="jumbotron hero-spacer">
      <form className="login-form" onSubmit={this.login}>
          <fieldset>
            <legend>Log In </legend>
            <BasicInput name="username" type="text" placeholder="username" />
            <BasicInput name="password" type="password" placeholder="password" />
            <button type="submit">Log In</button>
          </fieldset>
      </form>
    </header>
    );
  }
}
