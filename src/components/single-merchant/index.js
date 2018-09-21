import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { withRouter } from "react-router";

import { fetchSingleMerchant } from "../../actions";

export const StyledHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
  padding: 0 10px;
  background: #fff;
  box-shadow: 0 0 3px #dcdcdc8c;
  align-items: center;
`;

export const HeaderCell = styled.div`
  width: 33.33%;
  padding: 10px 10px;
`;

export const StyledListItem = styled.div`
  display: flex;
  background: #fff;
  padding: 0 10px;
  margin-bottom: 5px;
  box-shadow: 0 0 3px #dcdcdc8c;
`;

export const PageTitle = styled.h1`
  font-size: 20px;
  margin-bottom: 20px;
`;

class SingleMerchant extends Component {
  componentDidMount() {
    this.props.fetchSingleMerchant(this.props.match.params.id);
  }
  timestamptoDate = timestamp => {
    return new Date(timestamp).toDateString();
  };
  render() {
    const { firstName, lastName, bids } = this.props.merchant;
    return (
      <div>
        <PageTitle>
          {firstName} {lastName} Bids
        </PageTitle>
        <StyledHeader>
          <HeaderCell>car Name</HeaderCell>
          <HeaderCell>Amount</HeaderCell>
          <HeaderCell>Created</HeaderCell>
        </StyledHeader>
        {bids && !!bids.length ? (
          bids.sort((a, b) => b.created - a.created).map((bid, index) => {
            return (
              <StyledListItem key={index}>
                <HeaderCell>{bid.carTitle}</HeaderCell>
                <HeaderCell>{bid.amount}</HeaderCell>
                <HeaderCell>
                  {bid.created && this.timestamptoDate(bid.created)}
                </HeaderCell>
              </StyledListItem>
            );
          })
        ) : (
          <span>Merchant has no Bids</span>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const merchantId = ownProps.match.params.id;
  const merchant = state.merchants.items[merchantId];
  return {
    merchant: merchant || {}
  };
};

const mapDispatchToProps = {
  fetchSingleMerchant
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SingleMerchant)
);
