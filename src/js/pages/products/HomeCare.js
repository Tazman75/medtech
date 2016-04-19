import React from "react";
import ProductsListing from "../../components/ProductsListing";

export default class HomeCare extends React.Component {
  render () {
    let testProduct = [
      {"id":860,"name":"BENZALKONIUM CHLORIDE","description":"Cl skull fx NEC-brf coma","cost":"$24.33","manufacturer_url":"http://biglobe.ne.jp"}
    ];
    return (
        <div>
        <h1>{ this.props.title }</h1>
        <ProductsListing products={ testProduct }/>
        </div>
    );
  }
}
