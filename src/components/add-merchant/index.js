import React, { Component, Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { addMerchant } from "../../actions";
import success from "./checked.svg";

import { required, email, number } from "../../utils/validation";
import {
  FormWrapper,
  InputWrapper,
  FormDiv,
  SuccessBar,
  SubmitBtn,
  ErrorMsg
} from "./add-merchant-styles";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <InputWrapper {...input} placeholder={label} type={type} />
      {touched && (error && <ErrorMsg>{error}</ErrorMsg>)}
    </div>
  </div>
);

class AddMerchantForm extends Component {
  state = {
    success: false
  };
  handleSubmit = values => {
    this.props.addMerchant(values).then(() => {
      this.setState({ success: true });
      this.props.reset();
    });
  };
  render() {
    const { handleSubmit, submitting, pristine } = this.props;
    return (
      <Fragment>
        {this.state.success && (
          <SuccessBar>
            <img src={success} alt="success-icon" width="12" />
            Merchant Added Succesfully
          </SuccessBar>
        )}

        <FormWrapper onSubmit={handleSubmit(this.handleSubmit)}>
          <FormDiv>
            <label htmlFor="firstName">First Name</label>
            <Field
              name="firstName"
              type="text"
              component={renderField}
              placeholder="firstName"
              validate={[required]}
            />
          </FormDiv>
          <FormDiv>
            <label htmlFor="lastName">Last Name</label>
            <Field
              name="lastName"
              component={renderField}
              type="text"
              validate={[required]}
            />
          </FormDiv>
          <FormDiv>
            <label htmlFor="phone">Phone</label>
            <Field
              name="phone"
              component={renderField}
              type="text"
              validate={[required, number]}
            />
          </FormDiv>
          <FormDiv>
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              component={renderField}
              type="email"
              validate={[required, email]}
            />
          </FormDiv>
          <SubmitBtn type="submit" disabled={pristine || submitting}>
            Submit
          </SubmitBtn>
        </FormWrapper>
      </Fragment>
    );
  }
}

AddMerchantForm = reduxForm({
  // a unique name for the form
  form: "add-merchant"
})(AddMerchantForm);

const mapDispatchToProps = {
  addMerchant
};

export default connect(
  null,
  mapDispatchToProps
)(AddMerchantForm);
