
import React from "react";

import Product from "../components/Product";

export default class Featured extends React.Component {
  render() {
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
        </div>
    </div>
    <hr/>
    <div class="row text-center">
      <Product label="First"/>
      <Product label="Second"/>
      <Product label="Third"/>
      <Product label="Fourth"/>
    </div>
    </div>
    );
  }
}
