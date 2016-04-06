import React from "react";
import Product from "../components/Product";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    let {filterTextInput} = this.refs;
    this.props.onUserInput(
      {filterText: filterTextInput.value}
    );
  }

  render () {
    return (
      <form class="col-md-3">
        <div class="input-group">
          <input
            type="text"
            placeholder="Search..."
            value={this.props.filterText}
            ref="filterTextInput"
            onChange={this.handleChange}
          />
          <div class="input-group-btn align-left">
            <button class="btn btn-sm btn-primary" type="submit"><i class="glyphicon glyphicon-search"></i></button>
          </div>
        </div>
      </form>
    );
  }
}

class ProductTable extends React.Component {
  render () {
    const { products, filterText, limit } = this.props;
    if (products.length == 0) {
      return (
        <div/>
      );
    }

    var ProductComponent = products
      .filter( product => product.product_name.indexOf(filterText) >= 0)
      .slice(0,limit)
      .map(product => <Product key={product.id} render_type="spot" {...product}/>);

    return (
      <div class="row text-center">
        <ul>{ProductComponent}</ul>
      </div>
    );
  }
}

export default class FeaturedProducts extends React.Component {
  constructor() {
    super();

    this.state = {
      filterText: "",
      limit: 20
    };
  }

  handleUserInput({filterText}) {
    this.setState({
      filterText: filterText
    });
  }

  render () {
    return (
<div>
  <hr/>
  <div class="row">
    <div class="col-lg-12">
      <SearchBar
        filterText={this.state.filterText}
        onUserInput={this.handleUserInput.bind(this)}
      />
    </div>
  </div>
  <hr/>
  <ProductTable
    products={this.props.products}
    filterText={this.state.filterText}
    limit={this.state.limit}
  />
</div>
    );
  }
}
