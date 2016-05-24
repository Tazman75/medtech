import React from "react";
import UserRegister from "./UserRegister";
import UserStore from "../stores/UserStore";
import { states } from "../stores/StoreStates";
var { CREATE_USER_SUCCESS, CREATE_USER_FAILED } = states;

export default class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      step: 1
    };
  }
  componentWillMount() {
    UserStore.listen((status) => {
      switch(status) {
      case CREATE_USER_SUCCESS:
        this.setState({step: 2});
        alert("Successfull registration");
        break;
      case CREATE_USER_FAILED:
        break;
      }
      console.log("state", this.state);
    });
  }
  render () {
    switch(this.state.step) {
    case 1:
      return (<UserRegister/>);
    case 2:
      return (<div>Registration Successfull</div>);
    }
    return (
      <div/>
    );
  }
}
