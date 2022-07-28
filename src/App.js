import "./App.scss";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProductsOverview from "./components/ProductsOverview";
import ShopSection from "./components/ShopSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <ProductsOverview />
      <ShopSection />
    </div>
  );
}

export default App;
