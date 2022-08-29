import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsList } from "./reducers/producstListReducer";
import Registration from "./components/Registration";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/Login";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsList());
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
