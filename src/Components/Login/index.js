import React from "react";
import "./style.scss";
const Login = () => {
  return (
    <div className="login-page">
      <div className="login-wrapper">
        <h2>Login</h2>
        <form className="login-form" onSubmit={() => console.log("hello")}>
          <input type="email" placeholder="Email Address" id="email" required />
          <input
            type="password"
            placeholder="Password"
            id="password"
            required
          />
          <button className="btn-login">Continue</button>
        </form>
        <span>Forgot your password?</span>
        <p>
          Don't have an account?<span>Register now</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
