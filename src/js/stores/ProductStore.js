import Reflux from "reflux";
import ProductActions from "../actions/ProductActions";
import UserStore from "./UserStore";
import * as PA from "../actions/ProductActions";

var _state = {
  products: []
};
var ProductStore = Reflux.createStore({
  listenables: ProductActions,
  init: function() {
    console.log('init');
    UserStore.listen((status) => {
      switch(status) {
      case "ONLOGINUSER_SUCCESS":
        PA.reloadProducts();
        break;
      case "ONLOGOUTUSER_SUCCESS":
        PA.reloadProducts();
        break;
      }
    });
  },
  onProductUpdate: function() {
  },
  onProductUpdateFailed: function() {
    _state["products"] = [];
    this.trigger("PRODUCTUPDATE_FAILED");
  },
  onProductUpdateCompleted: function(products) {
    _state["products"] = products;
    this.trigger("completed");
  },
  onProductUpdateProgressed: function() {
  },
  getProducts: function() {
    return _state["products"];
  },
  getProduct: function(product_id) {
    var filterProducts = _state["products"].filter((i) => { return i.id == product_id; });
    return filterProducts[0];
  }
});

export default ProductStore;
