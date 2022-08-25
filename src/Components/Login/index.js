// import React, { useCallback, useContext } from "react";
// import { useNavigate } from "react-router";
// import app from "../../firebase";
// import "./style.scss";
// import { AuthContext } from "../../context/AuthContext";
// import { withRouter } from "../../helpers/functions";

// const Login = ({ history }) => {
//   // let navigate = useNavigate();
//   // const handleLogIn = useCallback(
//   //   async (event) => {
//   //     event.preventDefault();
//   //     const { email, password } = event.target.elements;
//   //     try {
//   //       await app
//   //         .auth()
//   //         .singInWithEmailAndPassword(email.value, password.value);
//   //       history.push("/");
//   //     } catch (error) {
//   //       alert(error);
//   //     }
//   //   },
//   //   [history]
//   // );

//   // const { currentUser } = useContext(AuthContext);

//   // if (currentUser) {
//   //   return <navigate to="/" />;
//   // }

//   return (
//     <div className="login-page">
//       <div className="login-wrapper">
//         <h2>Login</h2>
//         <form className="login-form" onSubmit={handleLogIn}>
//           <input
//             name="email"
//             type="email"
//             placeholder="Email Address"
//             id="email"
//             required
//           />
//           <input
//             name="password"
//             type="password"
//             placeholder="Password"
//             id="password"
//             required
//           />
//           <button className="btn-login">Continue</button>
//         </form>
//         <span>Forgot your password?</span>
//         <p>
//           Don't have an account?<span>Register now</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

///////////////////////////////////////////////

import React, { useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

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
    <>
      <div className="max-w-[700px] mx-auto my-16 p-4">
        <div>
          <h1 className="text-2xl font-bold py-2">Sign in to your account</h1>
          <p className="py-2">
            Don't have an account yet?{" "}
            <Link to="/signup" className="underline">
              Sign up.
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col py-2">
            <label className="py-2 font-medium">Email Address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="border p-3"
              type="email"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="py-2 font-medium">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="border p-3"
              type="password"
            />
          </div>
          <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">
            Sign In
          </button>
        </form>
      </div>
      <div className="login-page">
        <div className="login-wrapper">
          <h2>Login</h2>
          <form className="login-form">
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
    </>
  );
};

export default Login;
