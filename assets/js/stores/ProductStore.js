import Reflux from "reflux";
import ProductActions from "../actions/ProductActions";

var _state = {
  products: []
};
var ProductStore = Reflux.createStore({
  listenables: ProductActions,
  onProductUpdate: function() {
  },
  onProductUpdateFailed: function() {
    // console.warn("Failed Update");
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
