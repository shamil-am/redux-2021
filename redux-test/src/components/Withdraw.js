import React from "react";
import withdrawMoney from "./../redux/actions/withdrawMoney";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

const Withdraw = ({ amount }) => {
  const dispatch = useDispatch();
  const withdrawFn = bindActionCreators(withdrawMoney, dispatch);
  return (
    <button className="btn btn-danger my-2" onClick={() => withdrawFn(amount)}>
      Withdraw
    </button>
  );
};

export default Withdraw;
