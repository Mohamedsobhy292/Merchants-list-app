import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import defaultImg from "./avatar.png";
import { Link } from "react-router-dom";
import { required, email, number } from "../../utils/validation";
import { compose } from "redux";

import { deleteMerchant, editMerchant, editMode } from "../../actions";
import {
  StyledListItem,
  ItemCell,
  BidsCell,
  NameCell,
  EditButton,
  InputField,
  DeleteButton,
  SubmitButton,
  CancelButton,
  ActionsCell
} from "./merchant-list-styles";

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
    this.props.editMerchant(id, values).then(() => this.props.editMode(null));
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
      <StyledListItem editMode={this.props.editId === _id}>
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

        {/* ACTION CELL */}

        <ActionsCell>
          {this.props.editId === _id ? (
            <SubmitButton onClick={this.handleSubmit}>Submit</SubmitButton>
          ) : (
            <EditButton onClick={this.handleEdit.bind(null, _id)}>
              Edit
            </EditButton>
          )}

          {this.props.editId === _id ? (
            <CancelButton onClick={this.handleEdit}>Cancel</CancelButton>
          ) : (
            <DeleteButton
              onClick={this.handleDelete.bind(null, _id)}
              disabled={this.state.disableDeleteBtn}
            >
              Remove
            </DeleteButton>
          )}
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
