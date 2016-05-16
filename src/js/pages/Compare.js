import React from "react";
import UserStore from "../stores/UserStore";
import _ from "lodash";

export default class Compare extends React.Component {
  render () {
    let compare = UserStore.getComparison();

    var fmt = "col-md-3";
    var results = [];
    var row = [];
    row.push((<div class={fmt}><strong>Feature</strong></div>));
    compare.products.forEach((v) => {
      row.push((<div class={fmt}><strong>{v.name}</strong></div>));
    });
    results.push((<div class="row">{row}</div>));

    _.forOwn(compare.comparison, (values, feature) => {
      var row = [];
      row.push((<div class={fmt}>{feature}</div>));
      values.forEach((v) => row.push(<div class={fmt}>{v}</div>));
      results.push((<div class="row">{row}</div>));
    });
    return (
      <div class="jumbotron">
        <h3>Feature Comparison</h3>
        {results}
      </div>
    );
  }
}
