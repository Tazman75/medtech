
import React from "react";
import { IndexLink, Link } from "react-router";
import Login from "../Login";


export default class DropDown extends React.Component {
  render () {
    var categories = [
      { title: "Home Care", path: "prod_homecare"}
    ];
    var cat_list = categories.map((info, i) => <li key={i}><Link to={ info.path }>{ info.title }</Link></li> );

    return (
      <li class="dropdown">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#" id="themes">Products <span class="caret"></span></a>
        <ul class="dropdown-menu" aria-labelledby="themes">
          { cat_list }
        </ul>
      </li>
    );
  }
}
export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true,
      title: "MedTech"
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render () {
    const { location } = this.props;
    const { collapsed } = this.state;

    // const featuredClass = location.pathname === "/" ? "active" : "";
    // const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
    // const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";
    return (
<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
  <div class="container">
    <div class="navbar-header">
      <Link to="/" class="navbar-brand">{ this.state.title }</Link>
      <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
    <div class="navbar-collapse collapse" id="navbar-main">
      <ul class="nav navbar-nav">

        <DropDown/>
      </ul>

      <ul class="nav navbar-nav navbar-right">
        <Login/>
        {/*<li><Link to="login">Login <span class="glyphicon glyphicon-log-in"></span></Link></li>*/}
      </ul>

    </div>
  </div>
</nav>
    );
  }

  other() {
    return (
<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
    <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li>
          Products
        </li>
      </ul>
      {/*<ul class="nav navbar-nav">
        <li class={featuredClass}>
          <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Featured</IndexLink>
        </li>
        <li class={archivesClass}>
          <Link to="archives" onClick={this.toggleCollapse.bind(this)}>Archives</Link>
        </li>
        <li class={settingsClass}>
          <Link to="settings" onClick={this.toggleCollapse.bind(this)}>Blah blah</Link>
        </li>
      </ul>*/}
    </div>
  </div>
</nav>
    );
  }
}
