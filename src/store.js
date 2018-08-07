// src/store.js
import { createStore } from "redux";
import rootReducer from "./reducers";

// ストアを作成
let store = createStore(
  rootReducer,
  window.devToolsExtension && window.devToolsExtension()
);

export default store;
