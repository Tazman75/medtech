import React from "react";
import { IndexLink, Link } from "react-router";

export default class Product extends React.Component {
  constructor() {
    super();
  }

  render () {
    var props = this.props;
    var { id, name, description, cost,  manufacturer_url, render_type, main_image } = props;
    // http://placehold.it/300x400

    switch(render_type) {
    case "detail": {
      return (
        <div class="row">
            <div class="col-lg-3 col-sm-6">
              <img src={ main_image } alt="" height="300" width="200"/>
            </div>
            <div class="col-lg-9 col-sm-3 caption" >
                <h3>{ name }</h3>
                <p>{ description }</p>
            </div>
            <div class="col-lg-3 col-sm-3">
              <p>Price { cost }</p>
              <div class="btn btn-primary">Compare</div>

            </div>
        </div>
        );
    }
    default: {
      return (
        <div class="col-md-5 col-sm-6 hero-feature">
            <div class="thumbnail">
                <Link to={ "/products/" + id }>
                  <img src={ main_image } alt="" height="150" width="100"/>
                </Link>
                <div class="caption">
                    <h3>{ name }</h3>
                    <p>{ description }</p>
                    <p>
                        <Link to={ "/products/" + id } class="btn btn-primary">Compare</Link>
                        <a href={ manufacturer_url } class="btn btn-default" target="_blank">Manufacturer Info</a>
                    </p>
                </div>
            </div>
        </div>
        );
    }
    }
  }
}
