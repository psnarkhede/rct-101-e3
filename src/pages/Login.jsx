import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const {state, changestatus} = useContext(AuthContext);
  return (
    <div>
      <input data-cy="login-email" type="text" placeholder="enter email" /> <br/>
      <input data-cy="login-password" type="password" placeholder="password" /> <br/>
     <Link to="/"> <button data-cy="login-submit" onClick={() => changestatus(state)}>{state}</button></Link>
    </div>
  );
};

export default Login;
