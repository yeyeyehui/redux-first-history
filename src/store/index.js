import { legacy_createStore as createStore, applyMiddleware } from "redux";

import combinedReducer from "./reducers";

import { routerMiddleware, createReduxHistory } from "../history";

export const store =
  applyMiddleware(routerMiddleware)(createStore)(combinedReducer);

export const history = createReduxHistory(store);

window.store = store;
