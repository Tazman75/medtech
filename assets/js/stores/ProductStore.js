
import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class ProductStore extends EventEmitter {
  constructor() {
    super()
    this.products = [
      {"id":2,"product_name":"risperidone","description":"Inclusion conjunctivitis","cost":"$533.36","manufacturer_url":"https://dailymotion.com"},
      {"id":3,"product_name":"Triclosan","description":"Ear anomalies NEC","cost":"$103.92","manufacturer_url":"http://latimes.com"},
      {"id":4,"product_name":"Adenosine","description":"War inj:IED NEC","cost":"$883.23","manufacturer_url":"https://behance.net"}
    ];
  }

  // createProduct(text) {
  //   const id = Date.now();
  //
  //   this.products.push({
  //     id,
  //     text,
  //     complete: false,
  //   });
  //
  //   this.emit("change");
  // }

  getAll() {
    return this.products;
  }

  getProduct(product_id) {
    console.log("getting", product_id);
    return this.products[0];

  }

  handleActions(action) {
    console.log('action', action);
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

window.dispatcher = dispatcher;
window.productStore = productStore;

export default productStore;
