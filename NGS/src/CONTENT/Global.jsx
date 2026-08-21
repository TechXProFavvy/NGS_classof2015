import React, { useEffect, useState } from "react";
import { createContext } from "react";
export const LoginContext = createContext();

export default function GlobalContextProvider({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [activeUser, setActiveUser] = useState("Guest");

  return (
    <LoginContext.Provider value={{ isAuthorized, setIsAuthorized }}>
      {children}
    </LoginContext.Provider>
  );
}

