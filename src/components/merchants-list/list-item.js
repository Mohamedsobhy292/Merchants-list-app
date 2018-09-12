import React, { Component } from "react";
import styled from "styled-components";
import defaultImg from "./avatar.png";

export const StyledListItem = styled.div`
  display: flex;
  background: #fff;
  margin-bottom: 5px;
  padding: 10px 10px;
  font-size: 14px;
`;

export const ItemCell = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
`;

export const BidsCell = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
`;

export const NameCell = styled(ItemCell)`
  width: 40%;
  .img {
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 8px;
  }
  .name {
    margin-bottom: 4px;
    font-size: 14px;
    font-weight: normal;
  }

  .email {
    color: #ccc;
    font-size: 11 px;
  }
`;

export const Button = styled.button`
  padding: 5px 15px;
  cursor: pointer;
  border: none;
  border-radius: 2px;
`;
export const EditButton = styled(Button)`
  background: #ffb74d;
  color: #fff;
`;

export const DeleteButton = styled(Button)`
  background: #ef5350;
  color: #fff;
`;

export const ActionsCell = styled(ItemCell)`
  button:not(last-of-type) {
    margin-right: 8px;
  }
`;

export default class Merchant extends Component {
  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      hasPremium,
      bids,
      avatarUrl
    } = this.props.item;
    return (
      <StyledListItem>
        <NameCell>
          <div className="img">
            <img src={avatarUrl ? avatarUrl : defaultImg} alt="avatar" />
          </div>
          <div className="content">
            <h4 className="name">
              {firstName} {lastName}
            </h4>
            <span className="email">{email}</span>
          </div>
        </NameCell>
        <ItemCell>{phone}</ItemCell>
        <ItemCell>{hasPremium ? "premium" : "normal"}</ItemCell>
        <BidsCell>{bids.length}</BidsCell>
        <ActionsCell>
          <EditButton>Edit</EditButton>
          <DeleteButton>Remove</DeleteButton>
        </ActionsCell>
      </StyledListItem>
    );
  }
}
