import React from "react";
import Reflux from "reflux";
import Promise from "bluebird";
import * as PA from "../actions/ProductActions";
import ProductStore from "../stores/ProductStore";

export default class Test extends React.Component {
  binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

  constructor() {
    super();
  }

  componentWillMount() {
    ProductStore.listen(function(status) {
      let state = ProductStore.getProducts();
    });
    PA.reloadProducts();
  }

  render () {
    return (
      <div>Test</div>
    );
  }
}

// window.Promise = Promise;
// window.Reflux = Reflux;
import ProductActions from "../actions/ProductActions";
window.ProductActions = ProductActions;
window.ProductStore = ProductStore;
