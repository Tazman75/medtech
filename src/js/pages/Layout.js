import React from "react";
import Header from "./Header.js";
import Featured from "./Featured.js";
import Footer from "./Footer.js";
import SystemActions from "../actions/SystemActions";
import * as PA from "../actions/ProductActions";
import UserStore from "../stores/UserStore";
import { revStates, states } from "../stores/StoreStates";


var {
   LOGIN_USER_SUCCESS,
   LOGOUT_USER_SUCCESS,
   PRODUCT_UPDATE_SUCCESS
  } = states;

export default class Layout extends React.Component {
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
