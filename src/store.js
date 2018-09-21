import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import initialReducer from "./reducers";

const middlewares = [thunk, promiseMiddleware()];

const enhancers = compose(
  applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(initialReducer, enhancers);
export default store;
