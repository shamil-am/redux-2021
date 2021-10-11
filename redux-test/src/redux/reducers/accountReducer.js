import * as actionTypes from "../actions/actionTypes";
import { initialState } from "../initialState";

const accountReducer = (state = initialState.account_init, action) => {
  switch (action.type) {
    case actionTypes.DEPOSIT_MONEY:
      return state + action.payload;
    case actionTypes.WITHDRAW_MONEY:
      return state - action.payload;
    default:
      return state;
  }
};

export default accountReducer;
