import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

// use react-router Link or NavLink



const Navbar = () => {
  const {state, changestatus} = useContext(AuthContext);
  const {cartdata} = useContext(CartContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/cartItems")
    .then((res) => setData(res.data))
  },[]);

  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to={state === "Log in" ? "/login" : "/"}>Home</Link>
      <Link to={state === "Log in" ? "/login" : "/products"}>Products</Link>
      <span data-cy="navbar-cart-items-count">count : {cartdata.length === 0 ? data.length : cartdata.length}</span>
      <Link to="/login">
      <button onClick={() => changestatus("Log Out")} data-cy="navbar-login-logout-button">{state}</button>
      </Link> 
    </div>
  );
};

export default Navbar;
