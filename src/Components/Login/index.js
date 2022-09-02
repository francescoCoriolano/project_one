import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./style.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn, setIsLoggedIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/");
      setIsLoggedIn(true);
      localStorage.setItem("user", email);
      console.log(email);
    } catch (e) {
      setIsLoggedIn(false);
      setError(e.message);
      console.log(e.message);
      alert("ERROR: please enter valid credential");
    }
  };

  return (
    <>
      <div className="login-page">
        <div className="login-wrapper">
          <h2>Login</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="btn-login">Continue</button>
          </form>
          <span>Forgot your password?</span>
          <p>
            Don't have an account?
            <span>
              <Link to="/register" className="underline">
                Register now.
              </Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
