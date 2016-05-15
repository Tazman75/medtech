// import dispatcher from "../dispatcher";
import Reflux from "reflux";
import { rest } from "./Connect";
import axios from "axios";

var ProductActions = Reflux.createActions({
  productUpdate: {
    asyncResult: true,
    children: ["progressed"]
  },
  compareSelect: { asyncResult: false },
  compareClear: {  asyncResult: false }
});

export function compareSelect(id) {
  console.log('CC SELECT', id);
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
