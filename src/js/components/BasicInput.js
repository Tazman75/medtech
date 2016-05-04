import React from "react";
import update     from "react-addons-update";
import ClassNames from "classnames";

export default class BasicInput extends React.Component {
  render () {
    console.log('basic');
    return (
      <div class="form-group">
      <label class="control-label col-md-3">{ this.props.desc }</label>
      <div class="input-group col-md-7">
        <input
          class={this.props.error ? "error" : ""}
          {...update(this.props, {children: {$set: null}})} />
      </div>
      </div>
    );
  }
}
