import React from "react";
import update     from "react-addons-update";
import ClassNames from "classnames";

export default class BasicInput extends React.Component {
  render () {
    return (
      <div class={ClassNames({"basic-input": true, error: this.props.error})} {...this.props} >
        <input
          class={this.props.error ? "error" : ""}
          {...update(this.props, {children: {$set: null}})} />
        {this.props.children}
        <aside>{this.props.helptext || this.props.error || " "}</aside>
      </div>
    );
  }
}
