// import dispatcher from "../dispatcher";
import axios from "axios";
import Reflux from "reflux";

var EntryActions = Reflux.createActions([
  "PRODUCT_CREATE",
  "PRODUCT_UPDATE",
  "PRODUCT_DESTROY"
]);


export function reloadProducts() {
  axios("/rest/product/").then((data) => {
    // dispatcher.dispatch({type: "RECEIVE_PRODUCTS", products: data.data})
  });
}
