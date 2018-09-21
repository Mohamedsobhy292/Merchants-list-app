import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { fetchMerchants } from "../../actions";
import MerchantItem from "./list-item";
import Header from "./header";

export const MerchantsWrapper = styled.div`
  margin-top: 30px;
`;

class Merchants extends Component {
  componentDidMount() {
    this.props.fetchMerchants();
  }
  render() {
    const merchantsList = Object.values(this.props.merchants.items);
    return (
      <MerchantsWrapper>
        <Header />
        {!!merchantsList.length &&
          merchantsList.map(item => {
            return <MerchantItem item={item} />;
          })}
      </MerchantsWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    merchants: state.merchants
  };
};

const mapDispatchToProps = {
  fetchMerchants
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Merchants);
