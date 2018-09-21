import axios from "axios";

const APIUrl = "http://localhost:3002";

export const fetchMerchants = () => ({
  type: "FETCH_MERCHANTS",
  payload: axios.get(`${APIUrl}/merchant`).then(response => response.data)
});

export const fetchSingleMerchant = id => ({
  type: "FETCH_SINGLE_MERCHANT",
  payload: axios.get(`${APIUrl}/merchant/${id}`).then(response => response.data)
});

export const deleteMerchant = id => ({
  type: "DELETE_SINGLE_MERCHANT",
  payload: axios
    .delete(`${APIUrl}/merchant/${id}`)
    .then(response => response.data)
});

export const addMerchant = values => ({
  type: "ADD_SINGLE_MERCHANT",
  payload: axios
    .post(`${APIUrl}/merchant`, values)
    .then(response => response.data)
});

export const editMerchant = (id, values) => ({
  type: "EDIT_SINGLE_MERCHANT",
  payload: axios
    .patch(`${APIUrl}/merchant/${id}`, values)
    .then(response => response.data)
});

export const editMode = id => ({
  type: "EDIT_MERCHANT_MODE",
  payload: {
    id
  }
});
