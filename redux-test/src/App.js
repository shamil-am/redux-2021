import { useState } from "react";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import { useSelector } from "react-redux";
//
function App() {
  const accountReducer = useSelector((state) => state.accountReducer);
  //input area
  const [amount, setAmount] = useState(0);
  const valueHandler = (e) => {
    const enteredAmount = e.target.value;
    setAmount(parseInt(enteredAmount));
  };
  return (
    <div className="container">
      <h1>Your Account: {accountReducer}$ </h1>
      <hr />
      <input type="number" value={amount} onChange={valueHandler} />
      <br />
      <Deposit amount={amount} /> <Withdraw amount={amount} />
    </div>
  );
}

export default App;
