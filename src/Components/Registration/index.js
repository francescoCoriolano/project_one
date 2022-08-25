// import React, { useCallback } from "react";
// import "./style.scss";
// import app from "../../firebase";
// import { withRouter } from "../../helpers/functions";
// const Registration = ({ history }) => {
//   const handleSingUp = useCallback(
//     async (event) => {
//       event.preventDefault();
//       const { email, password } = event.target.elements;
//       try {
//         await app
//           .auth()
//           .createUserWithEmailAndPassword(email.value, password.value);
//         history.push("/");
//       } catch (error) {
//         alert(error);
//       }
//     },
//     [history]
//   );

//   return (
//     <div className="register-page">
//       <div className="register-wrapper">
//         <h2>Register</h2>
//         <form onSubmit={handleSingUp}>
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
//           <input
//             name="confirm-password"
//             type="password"
//             placeholder="Confirm password"
//             id="confirm-password"
//             required
//           />
//           <div className="checkbox_wrapper">
//             <input type="checkbox" className="checkbox" id="subscribe" />
//             <label for="subscribe">
//               Receive email updates and special promo offers?
//             </label>
//           </div>
//           <button className="btn-login">Create Account</button>
//         </form>
//         <p>
//           Already have an account?<span>Sing in here</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default withRouter(Registration);

////////////////////////////////////////////

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./style.scss";
const Registration = () => {
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
          <h1 className="text-2xl font-bold py-2">
            Sign up for a free account
          </h1>
          <p className="py-2">
            Already have an account yet?{" "}
            <Link to="/" className="underline">
              Sign in.
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
            Sign Up
          </button>
        </form>
      </div>
      {/* /////////////////// */}
      <div className="register-page">
        <div className="register-wrapper">
          <h2>Register</h2>
          <form>
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
    </>
  );
};

export default Registration;
