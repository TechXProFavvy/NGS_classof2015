import React, { useContext } from "react";
import { REG_USERS } from "./MembersCred";
import { adminContext } from "./Admins";
import NotPermitted from "../Membership/NotPermitted";
import { Outlet } from "react-router-dom";

const ProtectedMemPage = () => {
  const { memRole } = useContext(adminContext);

  return memRole !== "admin" ? <NotPermitted /> : <Outlet />;
};

export default ProtectedMemPage;
