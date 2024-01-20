import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("user logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <h1>Account</h1>
      <div>
        <p>user email: {user && user.email}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Account;
