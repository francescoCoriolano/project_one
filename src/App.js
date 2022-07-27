import './App.scss';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProductsOverview from './components/ProductsOverview';
import ShopSection from './components/ShopSection';

function App() {

  const root = ReactDOM.createRoot(
    document.getElementById("root")
  );

  return (
    <>
       <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </BrowserRouter>
      <div className="App"> 
      <Navbar/>
      <Header/>
      <ProductsOverview/>
      <ShopSection/>
      </div> 
      </>
  );
}

export default App;
