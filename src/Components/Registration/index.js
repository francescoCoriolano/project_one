import React from "react";
import "./style.scss";

const Registration = () => {
  return (
    <div className="register-page">
      <div className="register-wrapper">
        <h2>Register</h2>
        <form>
          <input type="email" placeholder="Email Address" id="email" required />
          <input
            type="password"
            placeholder="Password"
            id="password"
            required
          />
          <input
            type="password"
            placeholder="Confirm password"
            id="password"
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
          Already have an account?<span>Sing in here</span>
        </p>
      </div>
    </div>
  );
};

export default Registration;
