import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
const ProtectedRoute = ({ childern }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return childern;
};

export default ProtectedRoute;
