import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductsList } from "./reducers/producstListReducer";
import Login from "./components/Login";
import Registration from "./components/Registration";
import { AuthProvider } from "./context/Auth";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import "./App.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsList());
  }, [dispatch]);

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Registration />} />
            <Route exact path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
