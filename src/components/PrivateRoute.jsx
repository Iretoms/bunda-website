import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/user/UserContext";

const PrivateRoute = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
