import { Navigate, useNavigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  const navigate = useNavigate();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (user) return children;

  return <Navigate to="/login" />;
};

export default PrivateRoute;
