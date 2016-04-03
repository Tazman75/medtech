import dispatcher from "../dispatcher";
import axios from "axios";

export function reloadProducts() {
  axios("/rest/product/").then((data) => {
    dispatcher.dispatch({type: "RECEIVE_PRODUCTS", products: data.data})
  });
}
