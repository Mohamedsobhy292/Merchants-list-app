import React, { Component } from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import defaultImg from "./avatar.png";
import { Link } from "react-router-dom";

import { deleteMerchant } from "../../actions";

export const StyledListItem = styled.div`
  display: flex;
  background: #fff;
  margin-bottom: 10px;
  padding: 10px 10px;
  font-size: 14px;
  box-shadow: 0 0 5px #cccccc54;
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
  text-decoration: underline;
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

export const InputField = styled.input`
  background: #f4f8f9;
  border: none;
  display: inline-block;
  padding: 5px;
  width: 90%;
  border-radius: 5px;
`;

export const DeleteButton = styled(Button)`
  background: #ef5350;
  color: #fff;
  ${props =>
    props.disabled &&
    css`
      opacity: 0.3;
    `};
`;

export const ActionsCell = styled(ItemCell)`
  button:not(last-of-type) {
    margin-right: 8px;
  }
`;

class Merchant extends Component {
  state = {
    disableDeleteBtn: false,
    editMode: false
  };

  handleEdit = () => {
    this.setState({ editMode: true });
  };
  handleDelete = id => {
    this.setState({ disableDeleteBtn: true });
    this.props
      .deleteMerchant(id)
      .finally(() => this.setState({ disableDeleteBtn: false }));
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      hasPremium,
      bids,
      avatarUrl,
      _id
    } = this.props.item;
    return (
      <StyledListItem>
        <NameCell>
          <div className="img">
            <img src={avatarUrl ? avatarUrl : defaultImg} alt="avatar" />
          </div>
          <div className="content">
            <h4 className="name">
              {this.state.editMode ? (
                <InputField type="text" value={firstName} />
              ) : (
                <Link to={`/merchant/${_id}`}>
                  {firstName} {lastName}
                </Link>
              )}
            </h4>
            <span className="email">
              {this.state.editMode ? (
                <InputField type="text" value={email} />
              ) : (
                email
              )}
            </span>
          </div>
        </NameCell>
        <ItemCell>
          {this.state.editMode ? (
            <InputField type="text" value={phone} />
          ) : (
            phone
          )}
        </ItemCell>
        <ItemCell>{hasPremium ? "premium" : "normal"}</ItemCell>
        <BidsCell>
          <Link to={`/merchant/${_id}`}>{bids && bids.length}</Link>
        </BidsCell>
        <ActionsCell>
          {this.state.editMode ? (
            <EditButton>Submit</EditButton>
          ) : (
            <EditButton onClick={this.handleEdit}>Edit</EditButton>
          )}
          <DeleteButton
            onClick={this.handleDelete.bind(null, _id)}
            disabled={this.state.disableDeleteBtn}
          >
            Remove
          </DeleteButton>
        </ActionsCell>
      </StyledListItem>
    );
  }
}

const mapDispatchToProps = {
  deleteMerchant
};

export default connect(
  null,
  mapDispatchToProps
)(Merchant);
