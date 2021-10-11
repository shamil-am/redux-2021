import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./redux/reducers/index";
import thunk from "redux-thunk";
//store yaradilmasi
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
