// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { getProductsList } from "./reducers/producstListReducer";
// import Login from "./components/Login";
// import Registration from "./components/Registration";
// import { AuthContextProvider } from "./context/AuthContext";
// import Navbar from "./components/Navbar";
// import LandingPage from "./components/LandingPage";
// import "./App.scss";

// function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getProductsList());
//   }, [dispatch]);

//   return (
//     <AuthContextProvider>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route exact path="/login" element={<Login />} />
//           <Route exact path="/signup" element={<Registration />} />
//           <Route exact path="/" element={<LandingPage />} />
//         </Routes>
//       </div>
//     </AuthContextProvider>
//   );
// }

// export default App;

////////////////////////////////////////////////////////////
import React from "react";
import Signin from "./components/Login";
import Signup from "./components/Registration";
import Account from "./components/LandingPage";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
