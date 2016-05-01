import React from "react";
import UserRegister from "./UserRegister";
import UserStore from "../stores/UserStore";

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
      case "CREATEUSER_SUCCESS":
        this.setState({step: 2});
        alert("Successfull registration");
        break;
      case "CREATEUSER_FAILED":
        alert("Error");
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
