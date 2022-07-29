import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProductsOverview from "./components/ProductsOverview";
import ShopSection from "./components/ShopSection";
import RecomendedItems from "./components/RecomendedItems";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <div className="App">
        <Navbar />
        <Header />
        <ProductsOverview />
        <RecomendedItems />
        <ShopSection />
      </div>
    </BrowserRouter>
  );
}

export default App;
