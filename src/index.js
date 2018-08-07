import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

// import { applyMiddleware, compose, combineReducers, createStore } from "redux";
// import { Provider } from "react-redux";

// import productsReducer from "./reducers/products-reducer";
// import userReducer from "./reducers/user-reducer";

// const allReducers = combineReducers({
//   products: productsReducer,
//   user: userReducer
// });

// const allStoreEnhancers = compose(
//   window.devToolsExtension && window.devToolsExtension()
// );

// const store = createStore(
//   allReducers,
//   {
//     products: [
//       {
//         name: "iPhone x",
//         price: 6900
//       }
//     ],
//     user: "John"
//   },
//   allStoreEnhancers
// );

// console.log(store.getState());

// const updateUserAction = {
//   type: "updateUser",
//   payload: {
//     user: "Mike"
//   }
// };

// store.dispatch(updateUserAction);
// console.log("after dispatch");

// console.log(store.getState());

//src/reducers/index.js
import store from "./store";
import { addToCart } from "./actions/cart-actions";
import { Provider } from "react-redux";

// console.log("初期値:", store.getState());
// store.dispatch(addToCart("coffee", 1, 200));
// console.log("追加後:", store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App aRandomProps="whatever" />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
