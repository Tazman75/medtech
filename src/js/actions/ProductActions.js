// import dispatcher from "../dispatcher";
import Reflux from "reflux";
import { rest } from "./Connect";

var ProductActions = Reflux.createActions({
  productUpdate: {
    asyncResult: true,
    children: ["progressed"]
  }
});

export function reloadProducts() {
  rest.axios.get("product/").then((data) => {
    ProductActions.productUpdate.completed(data.data);
  }).catch(function (response) {
    ProductActions.productUpdate.failed({
      status: response.status,
      statusText: response.statusText
    });
  });
}

export default ProductActions;
