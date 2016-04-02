import React from "react";
import Nav from "../components/layout/Nav.js";

export default class Layout extends React.Component {
  constructor() {
    super()
  }
  render () {
    return (
      <div>
        <Nav/>
      </div>
    );
  }
}
