import React from "react";
import { connect } from "react-redux";
import Product from "./IndividualProduct";

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

const Products = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(Products);
