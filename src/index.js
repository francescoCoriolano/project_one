import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.scss";
import App from "./App";
import { store } from "./store/index";
import { CartProvider } from "./context/cartContext";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </CartProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
