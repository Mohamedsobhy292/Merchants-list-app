import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styled, { css } from "styled-components";
import defaultImg from "./avatar.png";
import { Link } from "react-router-dom";
import { required, email, number } from "../../utils/validation";
import { compose } from "redux";

import { deleteMerchant, editMerchant, editMode } from "../../actions";

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

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <InputField {...input} placeholder={label} type={type} />
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
);

class Merchant extends Component {
  state = {
    disableDeleteBtn: false
  };

  handleEdit = id => {
    this.props.editMode(id);
  };

  handleSubmit = () => {
    const values = this.props.formValues;
    const id = this.props.item._id;
    this.props.editMerchant(id, values);
  };

  handleDelete = id => {
    this.setState({ disableDeleteBtn: true });
    this.props.deleteMerchant(id).finally(() => this.props.editMode(null));
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
              {this.props.editId === _id ? (
                <Field
                  name="firstName"
                  type="text"
                  component={renderField}
                  placeholder="firstName"
                  validate={[required]}
                />
              ) : (
                <Link to={`/merchant/${_id}`}>
                  {firstName} {lastName}
                </Link>
              )}
            </h4>
            <span className="email">
              {this.props.editId === _id ? (
                <Field
                  name="lastName"
                  type="text"
                  component={renderField}
                  placeholder="lastName"
                  validate={[required]}
                />
              ) : (
                email
              )}
            </span>
          </div>
        </NameCell>
        <ItemCell>
          {this.props.editId === _id ? (
            <Field
              name="phone"
              type="text"
              component={renderField}
              placeholder="phone"
              validate={[required]}
            />
          ) : (
            phone
          )}
        </ItemCell>
        <ItemCell>{hasPremium ? "premium" : "normal"}</ItemCell>
        <BidsCell>
          <Link to={`/merchant/${_id}`}>{bids && bids.length}</Link>
        </BidsCell>
        <ActionsCell>
          {this.props.editId === _id ? (
            <EditButton onClick={this.handleSubmit}>Submit</EditButton>
          ) : (
            <EditButton onClick={this.handleEdit.bind(null, _id)}>
              Edit
            </EditButton>
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

Merchant = compose(
  connect((state, props) => ({ form: `edit-merchant-${props.item._id}` })),
  reduxForm()
)(Merchant);

const mapStateToProps = (state, ownProps) => {
  const formName = `edit-merchant-${ownProps.item._id}`;
  const formValues = state.form[formName] && state.form[formName].values;
  const item = ownProps.item || {};
  return {
    editId: state.merchants.editMode,
    formValues,
    initialValues: {
      firstName: item.firstName,
      lastName: item.lastName,
      phone: item.phone
    }
  };
};

const mapDispatchToProps = {
  deleteMerchant,
  editMerchant,
  editMode
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Merchant);
