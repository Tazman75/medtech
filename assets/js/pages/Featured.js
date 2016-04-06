
import React from "react";

import Feature from "../components/Feature";
import ProductsListing from "../components/ProductsListing";
import ProductStore from "../stores/ProductStore";
import * as PA from "../actions/ProductActions";

export default class Featured extends React.Component {
  constructor() {
    super();
    this.getProducts = this.getProducts.bind(this);
    const products = ProductStore.getProducts();
    this.state = {
      products: products
    };
    this.refreshProducts();
  }

  getProducts() {
    this.setState({
      products: ProductStore.getProducts()
    });
  }

  refreshProducts() {
    PA.reloadProducts();
  }

  componentWillMount() {
    this.getProducts();
    ProductStore.listen((status) => this.getProducts());
  }

  componentWillUnmount() {
    ProductStore.stopListeningToAll();
  }

  render() {
    var feature = {
      title: "Special Product!",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat."
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
