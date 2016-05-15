// import dispatcher from "../dispatcher";
import Reflux from "reflux";
import { rest } from "./Connect";
import axios from "axios";

console.log("EventHijack");
var EventEmitter = require('events').EventEmitter;
function DebugEventEmitter() {
  var realEmitter = new EventEmitter();
  var origEmit = realEmitter.emit;
  realEmitter.emit = function () {
    console.log('emitting', arguments);
    return origEmit.apply(realEmitter, arguments);
  };
  return realEmitter;
}
Reflux.setEventEmitter(DebugEventEmitter);


var ProductActions = Reflux.createActions({
  productUpdate: {
    asyncResult: true,
    children: ["progressed"]
  },
  compareSelect: { asyncResult: false },
  compareClear: {  asyncResult: false }
});

export function compareSelect(id) {
  ProductActions.compareSelect(id);
}

export function compareClear(id) {
  ProductActions.compareClear();
}

export function reloadProducts() {
  axios.get("rest/product/").then((data) => {
    ProductActions.productUpdate.completed(data.data);
  }).catch(function (response) {
    ProductActions.productUpdate.failed({
      status: response.status,
      statusText: response.statusText
    });
  });
}

export default ProductActions;
