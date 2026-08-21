import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { LoginContext } from "./Global";

const Protected = () => {
  const { isAuthorized, setIsAuthorized } = useContext(LoginContext);

  return <>{isAuthorized === true ? <Outlet /> : <Navigate to="/login" replace/>}</>;
};

export default Protected;
