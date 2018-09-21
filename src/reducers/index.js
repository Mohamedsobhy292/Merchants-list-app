import { combineReducers } from "redux";

const merchantsInitialState = {
  items: {},
  error: null,
  isLoading: false
};

const normalizeItems = items => {
  const obj = {};
  items.forEach(item => {
    obj[item._id] = item;
  });
  return obj;
};

const merchants = function(state = merchantsInitialState, action) {
  switch (action.type) {
    case "FETCH_MERCHANTS_PENDING":
      return {
        ...state,
        isLoading: true
      };

    case "FETCH_MERCHANTS_FULFILLED":
      return {
        ...state,
        isLoading: false,
        error: null,
        // items: [...state.items, ...action.payload]
        items: normalizeItems(action.payload)
      };
    case "FETCH_SINGLE_MERCHANT_FULFILLED":
      return {
        ...state,
        isLoading: false,
        error: null,
        items: {
          ...state.items,
          [action.payload._id]: action.payload
        }
      };

    case "FETCH_MERCHANTS_REJECTED":
      return {
        ...state,
        isLoading: false,
        error: { ...action.payload }
      };

    case "DELETE_SINGLE_MERCHANT_FULFILLED":
      const itemId = action.payload._id;
      const items = state.items;
      delete items[itemId];
      return {
        ...state,
        isLoading: false,
        error: null,
        items
      };

    default:
      return state;
  }
};

export default combineReducers({
  merchants
});
