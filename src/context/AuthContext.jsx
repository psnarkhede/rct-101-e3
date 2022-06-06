import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [state, setState] = useState("Log in");

  const changestatus = (newstatus) => {
      if(newstatus === "Log in"){
        setState("Log out");
      }else 
      if(newstatus === "Log Out"){
        setState("Log in");
      }
  }


  return (
  <AuthContext.Provider value={{state, changestatus}}>{children}</AuthContext.Provider>
  );
};
