import React, { useState } from "react";
import { createContext } from "react";
export const ProfileContext = createContext();
const ProfileContextProvider = ({ children }) => {
    const[activeUser,setActiveUser]=useState("Guest")
  return <ProfileContext.Provider value={{activeUser,setActiveUser}}>
    {children}
  </ProfileContext.Provider>;
};

export default ProfileContextProvider;
