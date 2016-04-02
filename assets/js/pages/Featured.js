
import React from "react";

import Product from "../components/Product";
import ProductStore from "../stores/ProductStore";
import * as ProductActions from "../actions/ProductActions";

export default class Featured extends React.Component {
  constructor() {
    super();
    this.getProducts = this.getProducts.bind(this);
    this.state = {
      products: ProductStore.getAll(),
    };
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

    const ProductComponent = products.map((product) => {
        return <Product key={product.id} render_type="spot" {...product}/>;
    });

    return (
    <div>
    <header class="jumbotron hero-spacer">
        <h1>Special Product!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
        <p><a class="btn btn-primary btn-large">Buy Now!</a>
        </p>
    </header>
    <hr/>
    <div class="row">
        <div class="col-lg-12">
            <h3>Latest Features</h3>
            <button onClick= {this.refreshProducts.bind(this)}>Refresh</button>
        </div>
    </div>
    <hr/>
    <div class="row text-center">
      <ul>{ ProductComponent }</ul>
    </div>
    </div>
    );
  }
}
