
import React from "react";

import Feature from "../components/Feature";
import ProductsListing from "../components/ProductsListing";
import UserStore from "../stores/UserStore";
import { states } from "../stores/StoreStates";
var { PRODUCT_UPDATE_SUCCESS, PRODUCT_UPDATE_FAILED } = states;

export default class Featured extends React.Component {
  constructor() {
    super();
    this.getProducts = this.getProducts.bind(this);
    const products = UserStore.getProducts();
    this.state = {
      products: products
    };
  }

  getProducts() {
    this.setState({
      products: UserStore.getProducts()
    });
  }

  componentWillMount() {
    this.getProducts();
    UserStore.listen((status) => {
      if ((status == PRODUCT_UPDATE_SUCCESS) || (status === PRODUCT_UPDATE_FAILED)) {
        this.getProducts();
      }
    });
  }

  componentWillUnmount() {
    UserStore.stopListeningToAll();
  }

  render() {
    var feature = {
      title: "Special Product!",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat."
    };
    const { products } = this.state;

    return (
      <div>
        {/*<Feature {...feature}/>*/}
        <ProductsListing products={products}/>
      </div>
    );
  }
}
