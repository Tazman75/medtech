require("expose?$!expose?jQuery!jquery");
require("bootstrap-webpack");
require("../css/style.css");
require("../css/basic.css");

import React from "react";
import ReactDOM from "react-dom";
import Layout from "./pages/Layout";

import Featured from "./pages/Featured";

import ViewProduct from "./pages/ViewProduct";
import HomeCare from "./pages/products/HomeCare";
import Register from "./pages/Register";
import Compare from "./pages/Compare";
import Admin from "./pages/Admin";
import Test from "./pages/Test";

import { Router, Route, IndexRoute, hashHistory } from "react-router";

const app = document.getElementById("app");
// ReactDOM.render(<Layout/>, app);

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="products/:product_id" name="products" component={ViewProduct}></Route>
      <Route path="prod_homecare" name="prod_homecare" component={HomeCare}></Route>
      <Route path="compare" name="compare" component={Compare}></Route>
      <Route path="register" name="register" component={Register}></Route>
      <Route path="admin" name="admin" component={Admin}></Route>
      <Route path="test" name="test" component={Test}></Route>
    </Route>
  </Router>,
app);
