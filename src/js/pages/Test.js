import React from "react";
import Reflux from "reflux";
import Promise from "bluebird";

export default class Test extends React.Component {
  // binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

  constructor() {
    super();
  }

  render () {
    return (
      <div>Test</div>
    );
  }
}
