import { act } from "react-dom/test-utils";

import * as types from "../constants/Actiontypes.js";

let data = JSON.parse(localStorage.getItem("tasks"));
let initialState = data ? data : [];

let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    default:
      return state;
  }
};

export default myReducer;
