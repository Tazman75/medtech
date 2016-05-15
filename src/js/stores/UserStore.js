
import Reflux from "reflux";
import UserActions from "../actions/UserActions";
import ProductActions from "../actions/ProductActions";
import SystemActions from "../actions/SystemActions";
import { rest } from "../actions/Connect";
import { states } from "./StoreStates";
import update     from "react-addons-update";


var _state = {
  products: [],
  users: []
};

var UserStore = Reflux.createStore({
  listenables: [UserActions, ProductActions, SystemActions],
  componentWillUnmount: function() {
    alert("what");
  },
  onInit: function() {
    console.log("init");
  },
  onCompanyUpdateCompleted: function(companies) {
    _state.companies = companies;
    this.trigger(states.COMPANY_UPDATE_SUCCESS);
  },
  onProductUpdateCompleted: function(products) {
    _state.products = products;
    this.trigger(states.PRODUCT_UPDATE_SUCCESS);
  },
  onProductUpdateFailed: function() {
    _state.products = [];
    this.trigger(states.PRODUCT_UPDATE_FAILED);
  },
  onCompareSelect: function(id) {
    console.log('CSELECT', id);
  },
  onCompareClear: function() {
    console.log('CCLEAR');
  },
  onCreateUserCompleted: function(products) {
    this.trigger(states.CREATE_USER_SUCCESS);
  },
  onCreateUserFailed: function() {
    this.trigger(states.CREATE_USER_FAILED);
  },
  onLoginUserCompleted: function(data) {
    // console.log('settoken', data.data.key);
    rest.setToken(data.data.key);
    this.trigger(states.LOGIN_USER_SUCCESS);
  },
  onLogoutUserCompleted: function() {
    rest.resetToken();
    this.trigger(states.LOGOUT_USER_SUCCESS);
    _state.products = [];
    this.trigger(states.PRODUCT_UPDATE_SUCCESS);
  },

  getCompanies: function() {
    return _state.companies;
  },
  getProducts: function() {
    return _state.products;
  },
  getProduct: function(product_id) {
    var filterProducts = _state.products.filter((i) => { return i.id == product_id; });
    return filterProducts[0];
  }
});

export default UserStore;
