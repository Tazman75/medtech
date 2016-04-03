
import React from "react";

import FeaturedProducts from "../components/FeaturedProducts";
import ProductStore from "../stores/ProductStore";
import * as ProductActions from "../actions/ProductActions";

export default class Featured extends React.Component {
  constructor() {
    super();
    this.getProducts = this.getProducts.bind(this);
    this.state = {
      products: ProductStore.getAll(),
    };
    this.refreshProducts();
  }

  getProducts() {
    this.setState({
      products: ProductStore.getAll(),
    });
  }

  refreshProducts() {
    ProductActions.reloadProducts();
  }

  componentWillMount() {
    ProductStore.on("change", this.getProducts);
  }

  componentWillUnmount() {
    ProductStore.removeListener("change", this.getProducts);
  }

  render() {
    const { products } = this.state;

    return (
      <FeaturedProducts products={products}/>
    );
  }
}
