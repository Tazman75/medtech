import React from "react";
import ProductStore from "../stores/ProductStore";
import Product from "../components/Product";

export default class ViewProduct extends React.Component {
  render () {
    var { product_id } = this.props.params;
    var product = ProductStore.getProduct(product_id);
    return (
      <Product render_type="detail" {...product}></Product>
    );
  }
}
