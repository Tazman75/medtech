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
    console.log('props', props);
    var { id, name, description, cost,  manufacturer_url, render_type, main_image, features, points } = props;
    // http://placehold.it/300x400
    if (points === undefined) {
      return (<div></div>);
    }
    const points_html = points.map((point, i) => { return (
      <li>{point}</li>
    );});
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
                {/*<div dangerouslySetInnerHTML={ createMarkup() }></div>*/}
                <ul>
                  { points_html }
                </ul>


              <h4>Feature List:</h4>
              { this.features( features ) }

              <div class="btn " onClick={ this.compareSelect.bind(this) }>Select</div>
              <div class="btn " onClick={ this.compareClear.bind(this) }>Clear</div>
              <Link class='btn btn-primary' to="/compare" >Compare</Link>
              <p class="help-block">For feature comparison two or three products, and click compare.</p>
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
                        {/*<Link to={ "/products/" + id } class="btn btn-primary">Compare</Link>*/}
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
