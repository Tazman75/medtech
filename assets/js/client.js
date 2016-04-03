import React from "react"
import ReactDOM from "react-dom"
import Layout from "./pages/Layout"

import Featured from "./pages/Featured"
import Login from "./pages/Login"
import Cart from "./pages/Cart"

import ViewProduct from "./pages/ViewProduct"
import HomeCare from "./pages/products/HomeCare"
import Test from "./pages/Test"

import { Router, Route, IndexRoute, hashHistory } from "react-router";

const app = document.getElementById('app');
// ReactDOM.render(<Layout/>, app);

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="products/:product_id" name="products" component={ViewProduct}></Route>
      <Route path="prod_homecare" name="prod_homecare" component={HomeCare}></Route>
      <Route path="login" name="login" component={Login}></Route>
      <Route path="cart" name="cart" component={Cart}></Route>
      <Route path="test" name="test" component={Test}></Route>
    </Route>
  </Router>,
app);
