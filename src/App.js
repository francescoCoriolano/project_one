import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProductsList } from "./store/producstListReducer";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import "./App.scss";
import Footer from "./components/Footer";

function App() {
  const [productsData, setProductsData] = useState([]);
  const [cart, setCart] = useState([]);

  const dispatch = useDispatch();
  const producstList = useSelector((state) => state);

  // const getProductsData = () => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then(function (response) {
  //       setProductsData(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   getProductsData();
  // }, []);

  useEffect(() => {
    dispatch(getProductsList());
  }, []);

  const addItemToCart = (id) => {
    setCart([...cart, id]);
    localStorage.setItem("cartData", JSON.stringify([...cart, id]));
  };

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartData"));
    if (cartItems) {
      setCart(cartItems);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar cart={cart} productsData={productsData} />
        <Routes>
          <Route path="/login" element={<Login cart={cart} />} />
          <Route
            path="/"
            element={
              <LandingPage
                addItemToCart={addItemToCart}
                cart={cart}
                productsData={productsData}
              />
            }
          />
        </Routes>
        {/* <div className="App"></div> */}
        <Footer />
        {JSON.stringify(producstList)}
      </div>
    </BrowserRouter>
  );
}

export default App;

///++++++++++++++++++++++++++++++++++++++++++++++
// import logo from "./logo.svg";
// import "./App.css";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getLorems } from "./store/reducers/lorem/loremSlice";

// function App() {
//   const dispatch = useDispatch();
//   const lorem = useSelector((state) => state);

//   useEffect(() => {
//     dispatch(getLorems());
//   }, []);

//   return <div className="App">{JSON.stringify(lorem)}</div>;
// }

// export default App;
