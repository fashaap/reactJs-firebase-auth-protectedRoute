import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signIn } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signIn(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <div>
      <h1>Sign In</h1>
      <div>
        <h3>Sign In for a free account</h3>
        <p>
          Dont have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email Addres</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" />
        </div>
        <div>
          <label>password</label>
          <input onChange={(e) => setPassword(e.target.value)} type="text" />
        </div>
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
