import React, { useCallback, useContext } from "react";
import { useNavigate } from "react-router";
import app from "../../firebase";
import "./style.scss";
import { AuthContext } from "../../context/Auth";
import { withRouter } from "../../helpers/functions";

const Login = ({ history }) => {
  let navigate = useNavigate();
  const handleLogIn = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .singInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <navigate to="/" />;
  }

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleLogIn}>
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
