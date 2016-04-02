import React from "react"
import ReactDOM from "react-dom"
import Layout from "./pages/Layout"

import Featured from "./pages/Featured"
import Login from "./pages/Login"
import Help from "./pages/Help"

import HomeCare from "./pages/products/HomeCare"

import { Router, Route, IndexRoute, hashHistory } from "react-router";

const app = document.getElementById('app');
// ReactDOM.render(<Layout/>, app);

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="prod_homecare" name="prod_homecare" component={HomeCare}></Route>
      <Route path="login" name="login" component={Login}></Route>
      <Route path="help" name="help" component={Help}></Route>
    </Route>
  </Router>,
app);
