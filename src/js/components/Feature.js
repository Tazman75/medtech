import React from "react";

export default class Feature extends React.Component {
  render () {
    return (
      <header class="jumbotron hero-spacer">

        <h1>{ this.props.title }</h1>
        <p>{ this.props.description }</p>
        <p>
        </p>
      </header>
    );
  }
}
