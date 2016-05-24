
import Reflux from "reflux";
import _ from "lodash";
import UserActions from "../actions/UserActions";
import ProductActions from "../actions/ProductActions";
import SystemActions from "../actions/SystemActions";
import { rest } from "../actions/Connect";
import { states } from "./StoreStates";
import update     from "react-addons-update";


var _state = {
  comparison: [4, 5],
  products: [],
  users: []
};

var UserStore = Reflux.createStore({
  listenables: [UserActions, ProductActions, SystemActions],
  _debugState: function() {
    return _state;
  },
  onInit: function() {
    this.trigger(states.INIT_STORE);
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
    if (! _state.comparison.includes(id)) {
      _state.comparison.push(id);
    }
  },
  onCompareClear: function() {
    _state.comparison = [];
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
  onLoginUserFailed: function(data) {
    this.trigger(states.LOGIN_USER_FAILED);
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
  },
  getComparison: function() {
    //Get the Products
    let products = _state.comparison.map(
      (product_id) => {
        return this.getProduct(product_id);
      }
    );

    //get features, and feature by product
    var productFeatures = {};
    var features = {};
    products.forEach((p) =>  {
      productFeatures[p.id] = _.indexBy(p.features, "feature");
      p.features.forEach((f) => {
        features[f.feature] = 1;
      });
    });

    //Calc pivot
    var results = {};
    _.forOwn(features, (value, feature) => {
      results[feature] = [];
    });

    var productDefs = [];
    _.forOwn(productFeatures, (features, productId) => {
      productDefs.push(this.getProduct(productId));
      _.forOwn(features, function(ignore, feature) {
        if (_.has(features, feature)) {
          results[feature].push(features[feature].description);
        } else {
          results[feature].push("N/A");
        }
      });
    });

    return {
      products: productDefs,
      comparison: results
    }
  }
});

export default UserStore;
