import React, { useCallback } from "react";
import "./style.scss";
import app from "../../firebase";
import { withRouter } from "../../helpers/functions";
const Registration = ({ history }) => {
  const handleSingUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div className="register-page">
      <div className="register-wrapper">
        <h2>Register</h2>
        <form onSubmit={handleSingUp}>
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            id="email"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            id="password"
            required
          />
          <input
            name="confirm-password"
            type="password"
            placeholder="Confirm password"
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
          Already have an account?<span>Sing in here</span>
        </p>
      </div>
    </div>
  );
};

export default withRouter(Registration);
