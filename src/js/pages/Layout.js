import React from "react";
import Header from "./Header.js";
import Featured from "./Featured.js";
import Footer from "./Footer.js";
import SystemActions from "../actions/SystemActions";
import UserStore from "../stores/UserStore";
import { revStates } from "../stores/StoreStates";

export default class Layout extends React.Component {
  componentWillMount() {
    UserStore.listen((status) => {
      console.log('status', status, revStates[status]);
    });
  }

  componentDidMount() {
    SystemActions.init();
  }

  render () {
    const { location } = this.props;

    return (
      <div>
        <Header/>
        <div class="container">
          { this.props.children }
        </div>
        <Footer/>
      </div>
    );
  }
}
