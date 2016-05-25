import React from "react";
var NotificationSystem = require("react-notification-system");

import Reflux from "reflux";
import Header from "./Header.js";
import Featured from "./Featured.js";
import Footer from "./Footer.js";
import UserActions from "../actions/UserActions";
import UserStore from "../stores/UserStore";
import SystemActions from "../actions/SystemActions";
import * as UA from "../actions/UserActions";
import * as PA from "../actions/ProductActions";
import ProductActions from "../actions/ProductActions";
import { revStates, states } from "../stores/StoreStates";

// var css = require("css!../../css/basic.css");
//
var {
   LOGIN_USER_SUCCESS,
   LOGIN_USER_FAILED,
   CREATE_USER_FAILED,
   LOGOUT_USER_SUCCESS,
   PRODUCT_UPDATE_SUCCESS
  } = states;

export default class Layout extends React.Component {
  constructor() {
    super();
    PA.reloadProducts();
    UA.companyUpdate();
  }

  componentWillMount() {
    this.unsubscribe = UserStore.listen((status) => {
      switch(status) {
      case LOGIN_USER_SUCCESS:
        PA.reloadProducts();
        break;
      case LOGIN_USER_FAILED:
        this._addNotification("Login Failed", "warning");
        break;
      case PRODUCT_UPDATE_SUCCESS:
        break;
      case CREATE_USER_FAILED:
        this._addNotification("Create User Failed", "warning");
        break;
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  componentDidMount() {
    SystemActions.init();
    this._notificationSystem = this.refs.notificationSystem;
  }

  _addNotification(note, status) {
    this._notificationSystem.addNotification({
      message: note,
      level: status
    });
  }

  render () {
    const { location } = this.props;

    return (
      <div>
        <Header/>
        <NotificationSystem ref="notificationSystem" />
        {/*<button onClick={this._addNotification.bind(this)}>Add notification</button>*/}
        <div class="container">
          { this.props.children }
        </div>
        <Footer/>
      </div>
    );
  }
}

window.UserStore = UserStore;

window.taz = {
  UA: UA,
  PA: PA,
  ProductActions: ProductActions,
  Reflux: Reflux
};
