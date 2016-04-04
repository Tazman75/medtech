
import React from "react";

import FeaturedProducts from "../components/FeaturedProducts";
import ProductStore from "../stores/ProductStore";
import * as PA from "../actions/ProductActions";

export default class Featured extends React.Component {
  constructor() {
    super();
    this.getProducts = this.getProducts.bind(this);
    const products = ProductStore.getProducts();
    this.state = {
      products: products,
    };
    this.refreshProducts();
  }

  getProducts() {
    this.setState({
      products: ProductStore.getProducts(),
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
    const { products } = this.state;

    return (
      <FeaturedProducts products={products}/>
    );
  }
}
