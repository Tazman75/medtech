import React from "react";
import UserStore from "../stores/UserStore";
import _ from "lodash";

export default class Compare extends React.Component {
  render () {
    let compare = UserStore.getComparison();

    var results = [];
    console.log('help');

    _.forOwn(compare.comparison, (values, feature) => {
      var row = [];
      row.push((<div class="col-md-4">{feature}</div>));
      values.forEach((v) => row.push(<div class="col-md-4">{v}</div>));
      results.push((<div class="row">{row}</div>));
    });
    return (
      <div>{results}</div>
    );
  }
}
