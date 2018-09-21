import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Merchants from "./components/merchants-list";
import AddMerchants from "./components/add-merchant";
import Merchant from "./components/single-merchant";
import Menu from "./components/menu";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <Switch>
            <Route path="/merchant/:id" component={Merchant} />
            <Route path="/add-merchant" component={AddMerchants} />
            <Route component={Merchants} />
          </Switch>
        </div>
      </Router>
    );
  }
}
