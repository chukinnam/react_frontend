import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const useAuthHook = () => {
  const { auth } = useSelector((state) => {
    return state.auth;
  });

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default useAuthHook;
