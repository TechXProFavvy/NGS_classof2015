import React, { useContext, useState } from "react";
import { createContext } from "react";
import { REG_USERS } from "./MembersCred";
import { ProfileContext } from "../CONTENT/ProfileContext";

export const adminContext = createContext();

export default function AdminProvider({ children }) {
  const { activeUser } = useContext(ProfileContext);
  const [roleAccess, setRoleAccess] = useState("user");
  let userRole = REG_USERS.find((user) => {
    let foundUser = user.name === activeUser ? user.role : false;
    return foundUser;
  });
  

  let memRole =userRole.role
  
  

  return (
    <adminContext.Provider value={{ memRole }}>
      {children}
    </adminContext.Provider>
  );
}
