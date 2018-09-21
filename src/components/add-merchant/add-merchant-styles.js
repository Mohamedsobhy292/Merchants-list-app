import styled, { css } from "styled-components";
export const FormWrapper = styled.form`
  margin-top: 20px;
  background: #fff;
  padding: 15px;
  border-radius: 3px;
  box-shadow: 0 0 5px #cccccc54;
  width: 400px;
  margin: auto;
`;

export const InputWrapper = styled.input`
  width: 100%;
  padding: 8px 5px;
  border-radius: 2px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  margin-top: 5px;
`;

export const FormDiv = styled.div`
  margin-bottom: 10px;
`;

export const SuccessBar = styled.div`
  background: #66bb6a;
  border-radius: 2px;
  color: #fff;
  padding: 8px;
  margin: auto;
  margin-bottom: 15px;
  font-size: 12px;
  width: 400px;
  display: flex;
  align-items: center;
  img {
    margin-right: 5px;
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  margin-top: 3px;
  height: 40px;
  background: #ffb74d;
  color: #fff;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `};
`;

export const ErrorMsg = styled.span`
  color: #ef5350;
  font-size: 12px;
`;
