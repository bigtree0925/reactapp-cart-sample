// src/components/List.js
import React from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";

const mapStateToProps = state => {
  return {
    cart: state.shoppingCart.cart
  };
};

function CalcTotalPrice(cart) {
  let cartData = cart;
  let totalPrice = 0;
  for (let k in cartData) {
    let datatmp = cartData[k];
    for (let l in datatmp) {
      totalPrice += datatmp[l].cost * datatmp[l].quanity;
    }
  }
  return <div>Total : {totalPrice}</div>;
}

const ConnectedList = ({ cart }) => (
  <div>
    {cart.map(obj => {
      return (
        <ul key={uuidv1()}>
          <li>product: {obj.product}</li>
          <li>quanity: {obj.quanity}</li>
          <li>unitCost: {obj.cost}</li>
          <li>summary: {obj.quanity * obj.cost}</li>
        </ul>
      );
    })}
    <CalcTotalPrice data={cart} />
  </div>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
