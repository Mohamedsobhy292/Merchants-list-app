import styled, { css } from "styled-components";
export const StyledListItem = styled.div`
  display: flex;
  background: #fff;
  margin-bottom: 10px;
  padding: 10px 10px;
  font-size: 14px;
  box-shadow: 0 0 5px #cccccc54;
  transition: all 0.3s;
  ${props =>
    props.editMode &&
    css`
      background: #e0f2f1;
    `};
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

export const SubmitButton = styled(Button)`
  background: #4caf50;
  color: #fff;
`;

export const CancelButton = styled(Button)`
  background: #9e9e9e;
  color: #fff;
`;

export const ErrorMsg = styled.span`
  color: #ef5350;
  margin-top: 5px;
  display: inline-block;
  font-size: 10px;
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
