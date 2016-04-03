
import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class ProductStore extends EventEmitter {
  constructor() {
    super()
    this.products = [
    ];
  }

  getAll() {
    return this.products;
  }

  getProduct(product_id) {
    var filterProducts = this.products.filter((i) => { return i.id == product_id});
    return filterProducts[0];
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_PRODUCT": {
        this.createTodo(action.text);
        break;
      }
      case "RECEIVE_PRODUCTS": {
        this.products = action.products;
        this.emit("change");
        break;
      }
    }
  }
}

const productStore = new ProductStore;
dispatcher.register(productStore.handleActions.bind(productStore));

// window.dispatcher = dispatcher;
// window.productStore = productStore;

export default productStore;
