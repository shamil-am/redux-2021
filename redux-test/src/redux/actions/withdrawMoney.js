import * as actionTypes from "./actionTypes";

const withdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.WITHDRAW_MONEY,
      payload: amount,
    });
  };
};

export default withdrawMoney;
