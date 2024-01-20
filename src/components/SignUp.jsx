import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await createUser(email, password);
      navigate('/account');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };



  return (
    <div>
      <h1>SignUp</h1>
      <div>
        <h3>Sign in your account</h3>
        <p>
          already have an account yet? <Link to="/">Sign in</Link>
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label >Email Address</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" />
        </div>
        <div>
          <label >Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
