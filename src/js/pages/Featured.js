
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
    this.unsubscribe = UserStore.listen((status) => {
      if ((status == PRODUCT_UPDATE_SUCCESS) || (status === PRODUCT_UPDATE_FAILED)) {
        this.getProducts();
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    var feature = {
      title: "     Fitbit",
      description: "My Goal is Simple: Be a Healthy!"
    };
    const { products } = this.state;

    return (
      <div>
        <Feature {...feature}/>
        <ProductsListing products={products}/>
      </div>
    );
  }
}
