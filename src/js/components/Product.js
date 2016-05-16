import React from "react";
import { IndexLink, Link } from "react-router";
import SystemActions from "../actions/SystemActions";
import * as PA from "../actions/ProductActions";

export default class Product extends React.Component {
  constructor() {
    super();
  }

  features(features) {
    var feature_list =  features.map((col, j) => {
      return (
        <div key={j}>
          <dt>{col.feature}</dt>
          <dd>{col.description}</dd>
        </div>
      );
    });
    return (
      <dl class="dl-horizontal">
      {feature_list}
      </dl>
    );
  }

  componentDidMount() {
  }

  compareSelect(product) {
    PA.compareSelect(this.props.id);
  }

  compareClear() {
    PA.compareClear();
  }

  compareLaunch() {
    console.log('compare launch');
  }

  render () {
    var props = this.props;
    var { id, name, description, cost,  manufacturer_url, render_type, main_image, features } = props;
    // http://placehold.it/300x400
    function createMarkup() { return {__html: description}; }

    switch(render_type) {
    case "detail": {
      return (
        <div class="row">
            <div class="col-lg-3 col-sm-6">
              <img src={ main_image } alt="" height="300" width="200"/>
            </div>
            <div class="col-lg-9 col-sm-3 caption" >
                <h3>{ name }</h3>
                <div dangerouslySetInnerHTML={ createMarkup() }></div>

              <h4>Feature List:</h4>
              { this.features( features ) }

              <div class="btn " onClick={ this.compareSelect.bind(this) }>Select</div>
              <div class="btn " onClick={ this.compareClear.bind(this) }>Clear</div>
              {/*<div class="btn btn-primary" onClick={ this.compareLaunch.bind(this) }>Compare</div>*/}
              <Link class='btn btn-primary' to="/compare" >Compare</Link>
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
