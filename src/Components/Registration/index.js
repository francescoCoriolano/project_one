import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./style.scss";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password === confirmPassword) {
      try {
        await createUser(email, password);
        navigate("/");
      } catch (e) {
        setError(e.message);
        console.log(e.message);
      }
    } else {
      alert("ERROR: Password do not match");
    }
  };

  return (
    <div className="register-page">
      <div className="register-wrapper">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
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
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
            title="Must contain at least 8 characters, 1 uppercase, 1 lowercase and 1 number"
            required
          />
          <input
            name="confirm-password"
            type="password"
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            id="confirm-password"
            required
          />
          <div className="checkbox_wrapper">
            <input type="checkbox" className="checkbox" id="subscribe" />
            <label for="subscribe">
              Receive email updates and special promo offers?
            </label>
          </div>
          <button className="btn-login">Create Account</button>
        </form>
        <p>
          Already have an account?
          <span>
            <Link to="/login" className="underline">
              Sign in here.
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Registration;
