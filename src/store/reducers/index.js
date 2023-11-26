import { combineReducers } from "redux";

import counter from "./counter";

import { routerReducer as router } from "../../history";

const reducers = {
  counter,
  router,
};
const combinedReducer = combineReducers(reducers);

export default combinedReducer;
