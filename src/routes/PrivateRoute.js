import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ Component, isAllowed, fallback }) => {
  if (!isAllowed) {
    return (
      <Navigate
        to={fallback}
        replace
      />
    );
  }
  return Component;
};
