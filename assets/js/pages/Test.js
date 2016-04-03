import React from "react";
import Reflux from "reflux";
import Promise from "bluebird";

var ProductActions = Reflux.createActions({
  statusUpdate: {
    asyncResult: true,
    children: ["progressed"]
  },
});

var _state = {};
var productStore = Reflux.createStore({
    listenables: ProductActions,
    onStatusUpdate: function() {
      console.log("STATUS");
    },
    onStatusUpdateFailed: function() {
      console.log("FAILED");
    },
    onStatusUpdateCompleted: function() {
      console.log("COMPLETED");
      _state['status'] = "COMPLETED";
      this.trigger("COMPLETED");
    },
    onStatusUpdateProgressed: function() {
      console.log("PROGRESSED");
    },
    getState: function() {
      return _state;
    }
});

window.Promise = Promise;
window.Reflux = Reflux;
window.ProductActions = ProductActions;
window.productStore = productStore;

export default class Test extends React.Component {
  binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

  constructor() {
    super();
  }

  componentWillMount() {
    productStore.listen(function(status) {
      let state = productStore.getState()
      console.log('status: ', state);
    });
  }

  render () {
    return (
      <div>Test</div>
    );
  }
}
