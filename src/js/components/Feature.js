import React from "react";

export default class Feature extends React.Component {
  render () {
    return (
      <header class="jumbotron hero-spacer bg">
        <h2>{ this.props.title }</h2>
        <p>{ this.props.description }</p>
        <p>
        </p>
      </header>
    );
  }
}
