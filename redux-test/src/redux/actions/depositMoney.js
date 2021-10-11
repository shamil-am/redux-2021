import * as actionTypes from "./actionTypes";

const depositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.DEPOSIT_MONEY,
      payload: amount,
    });
  };
};

export default depositMoney;
