// import dispatcher from "../dispatcher";
import axios from "axios";
import Reflux from "reflux";

var ProductActions = Reflux.createActions({
  productUpdate: {
    asyncResult: true,
    children: ["progressed"]
  }
});

export function reloadProducts() {
  axios("/rest/product/").then((data) => {
    ProductActions.productUpdate.completed(data.data);
  });
}

export default ProductActions;
