import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useSeller from "../../hooks/useSeller";
import Loading from "../../Pages/Shared/Loading/Loading";

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isSeller, isSellerLoadin] = useSeller(user?.email);
  const location = useLocation();
  if (loading || isSellerLoadin) {
    return <Loading></Loading>;
  }

  if (user && isSeller) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
