import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartdata, setCartdata] = useState([]);

  const handlecartdata = (data) => {
    setCartdata(data);
  }

  return (
  <CartContext.Provider value={{handlecartdata,cartdata}}>{children}</CartContext.Provider>
  );
};
