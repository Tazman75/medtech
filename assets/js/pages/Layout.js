import React from "react";
import Header from "./Header.js";
import Featured from "./Featured.js";
import Footer from "./Footer.js";

export default class Layout extends React.Component {
  render () {
    const { location } = this.props;

    return (
      <div>
        <Header/>
        <div class="container">
          { this.props.children }
        </div>
        <Footer/>
      </div>
    );
  }
}
