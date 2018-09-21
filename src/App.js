import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { fetchMerchants } from "./actions";
import Merchants from "./components/merchants-list";
import Merchant from "./components/single-merchant";
import Menu from "./components/menu";

class App extends Component {
  componentDidMount() {
    this.props.fetchMerchants();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <Switch>
            <Route path="/merchant/:id" component={Merchant} />
            <Route component={Merchants} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = {
  fetchMerchants
};

export default connect(
  null,
  mapDispatchToProps
)(App);
