import React from "react";

export default class DropDown extends React.Component {
  render () {
    var categories = [
      "Home Care",
      "Infection Control",
      "Pharmaceutical",
      "First Aid"
    ]
    var cat_list = categories.map((title, i) => <li key={i}><a href="#">{ title }</a></li> );

    return (
      <li class="dropdown">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#" id="themes">Products <span class="caret"></span></a>
        <ul class="dropdown-menu" aria-labelledby="themes">
          {/*<li><a href="../default/">Default</a></li>*/}
          {/*<li class="divider"></li>*/}
          { cat_list }
        </ul>
      </li>
    );
  }
}

export default class Layout extends React.Component {
  constructor() {
    super()
    this.state = {
      title: "MedTech"
    }
  }
  render () {
    return (
<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
  <div class="container">
    <div class="navbar-header">
      <a href="../" class="navbar-brand">{ this.state.title }</a>
      <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
    <div class="navbar-collapse collapse" id="navbar-main">
      <ul class="nav navbar-nav">

        <DropDown/>
        <li>
        <form class="nav navbar-form" role="search">
          <div class="input-group">
              <input type="text" class="form-control" placeholder="Search" name="srch-term" id="srch-term"/>
              <div class="input-group-btn">
                  <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
              </div>
          </div>
        </form>
        </li>
      </ul>

      <ul class="nav navbar-nav navbar-right">
        <li><a href="#" target="_blank">Login</a></li>
        <li> <a href="#">Help</a> </li>
      </ul>

    </div>
  </div>
</nav>

    );
  }
}
