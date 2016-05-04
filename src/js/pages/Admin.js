import React from "react";

export default class Admin extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.getProducts = this.getProducts.bind(this);
    this.getProducts();
  }

  getProducts() {
    this.setState({
      products: UserStore.getProducts()
    });
  }

  render () {
    const { products } = this.state;

    return (
      <div>
        <ProductsListing products={products}/>
      </div>
    );
  }
}
