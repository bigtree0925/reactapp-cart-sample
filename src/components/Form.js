// src/components/Form.js
import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/cart-actions";
import "./Form.css";
import { Button } from "react-bootstrap";

const mapDispatchToProps = dispatch => {
  return {
    addToCart: cart => dispatch(addToCart(...cart))
  };
};

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      product: "",
      quanity: "",
      cost: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.className]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { product, quanity, cost } = this.state;

    if (product === "" || quanity === "" || cost === "") {
      return false;
    }

    this.props.addToCart([product, quanity, cost]);
    this.setState({
      product: "",
      quanity: "",
      cost: ""
    });
  }

  render() {
    const { product, quanity, cost } = this.state;
    return (
      <div className="addForm">
        <form onSubmit={this.handleSubmit}>
          <div className="input-container">
            <label htmlFor="product">product : </label>
            <input
              type="text"
              value={product}
              className="product"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="quanity">quanity : </label>
            <input
              type="number"
              value={quanity}
              className="quanity"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="cost">cost : </label>
            <input
              type="number"
              value={cost}
              className="cost"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-container">
            <Button type="submit">ADD</Button>
          </div>
        </form>
      </div>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
