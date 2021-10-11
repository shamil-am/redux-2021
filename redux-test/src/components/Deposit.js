import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import depositMoney from "./../redux/actions/depositMoney";
//
const Deposit = ({ amount }) => {
  const dispatch = useDispatch();
  const depositFn = bindActionCreators(depositMoney, dispatch);
  return (
    <button className="btn btn-success my-2" onClick={() => depositFn(amount)}>
      Deposit
    </button>
  );
};

export default Deposit;
