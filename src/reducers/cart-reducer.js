// src/reducers/cart-reducer.js

import { ADD_TO_CART } from "../actions/cart-actions";

const initialState = {
  cart: [
    {
      product: "coke",
      quanity: 1,
      cost: 130
    },
    {
      product: "milk",
      quanity: 3,
      cost: 300
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    }
    default:
      return state;
  }
}
