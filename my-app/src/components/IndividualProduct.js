import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/shopping-reducer";

const Product = ({ product, addToCart }) => {
  return (
    <div className="myflex">
      <div>
          {product.title} ₹{product.price}
      </div>
      <div>
        <button
          className="btn btn-success"
          onClick={() => addToCart(product.id)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
