//src/reducers/index.js
import { combineReducers } from "redux";
import productsReducer from "./products-reducer";
import cartReducer from "./cart-reducer";

const allReducers = {
  shoppingCart: cartReducer,
  products: productsReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
