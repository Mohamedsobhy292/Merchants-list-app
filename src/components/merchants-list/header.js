import React, { Component } from "react";
import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
  padding: 0 10px;
`;

export const HeaderCell = styled.div`
  width: 15%;
`;

export const NameCell = styled(HeaderCell)`
  width: 40%;
`;

export default class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <NameCell>Name</NameCell>
        <HeaderCell>Phone</HeaderCell>
        <HeaderCell>Account type</HeaderCell>
        <HeaderCell>Bids#</HeaderCell>
      </StyledHeader>
    );
  }
}
