// src/actions/cart-actions.js
export const ADD_TO_CART = "ADD_TO_CART";

export function addToCart(product, quanity, cost) {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
      quanity,
      cost
    }
  };
}
