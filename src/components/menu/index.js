import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledMenu = styled.div`
  display: none;
  padding: 15px 0;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 200px;
  background: #fff;
  .menu-item {
    padding: 10px;
    display: block;
    &.selected {
      background: #64b5f6;
      color: #fff;
    }
  }

  @media screen and (min-width: 992px) {
    display: block;
  }
`;

export default class Menu extends Component {
  render() {
    return (
      <StyledMenu>
        <ul>
          <NavLink
            activeClassName="selected"
            to="/"
            exact
            className="menu-item"
          >
            Home
          </NavLink>
          <NavLink
            activeClassName="selected"
            to="/add-merchant"
            className="menu-item"
          >
            Add Merchant
          </NavLink>
        </ul>
      </StyledMenu>
    );
  }
}
