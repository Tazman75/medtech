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
