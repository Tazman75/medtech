import React from "react";

export default class Product extends React.Component {
  render () {
    var props = this.props;
    return (
      <div class="col-md-3 col-sm-6 hero-feature">
          <div class="thumbnail">
              <img src="http://placehold.it/800x500" alt=""/>
              <div class="caption">
                  <h3>{ props.label }</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <p>
                      <a href="#" class="btn btn-primary">Buy Now!</a> <a href="#" class="btn btn-default">More Info</a>
                  </p>
              </div>
          </div>
      </div>
    );
  }
}
export default class Body  extends React.Component {
  render () {
    return (
<div class="container">
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
    <div class="row text-center">
      <Product label="First"/>
      <Product label="Second"/>
      <Product label="Third"/>
      <Product label="Fourth"/>
    </div>
    <hr/>
</div>
    );
  }
}
