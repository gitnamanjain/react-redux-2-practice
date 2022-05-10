import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary">
        <Link to="/">
          <h6 className="navbar-brand">Shopping App</h6>
        </Link>
        <Link to="/cart">
          <h6 className="navbar-brand">Cart</h6>
        </Link>
      </nav>
    </>
  );
}
