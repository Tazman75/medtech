
import Reflux from "reflux";
import UserActions from "../actions/UserActions";
import ProductActions from "../actions/ProductActions";
import SystemActions from "../actions/SystemActions";
import { rest } from "../actions/Connect";
import { states } from "./StoreStates";

var _state = {
  products: [],
  users: []
};
var UserStore = Reflux.createStore({
  listenables: [UserActions, ProductActions, SystemActions],
  onInit: function() {
    console.log("init");
  },
  onProductUpdateCompleted: function(products) {
    _state["products"] = products;
    this.trigger(states.PRODUCT_UPDATE_SUCCESS);
  },
  onProductUpdateFailed: function() {
    _state["products"] = [];
    this.trigger(states.PRODUCT_UPDATE_FAILED);
  },
  onCreateUserCompleted: function(products) {
    this.trigger(states.CREATE_USER_SUCCESS);
  },
  onCreateUserFailed: function() {
    this.trigger(states.CREATE_USER_FAILED);
  },
  onLoginUserCompleted: function(data) {
    console.log('settoken', data.data.key);
    rest.setToken(data.data.key);
    this.trigger(states.LOGIN_USER_SUCCESS);
  },
  onLogoutUserCompleted: function() {
    rest.resetToken();
    this.trigger(states.LOGOUT_USER_SUCCESS);
    _state["products"] = [];
    this.trigger(states.PRODUCT_UPDATE_SUCCESS);
  },

  getProducts: function() {
    return _state["products"];
  },
  getProduct: function(product_id) {
    var filterProducts = _state["products"].filter((i) => { return i.id == product_id; });
    return filterProducts[0];
  }
});

export default UserStore;
