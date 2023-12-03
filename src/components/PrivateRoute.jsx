import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/user/UserContext";

const PrivateRoute = () => {
  const { isloggedIn } = useAuth();

  return isloggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
