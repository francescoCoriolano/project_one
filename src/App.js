
import './App.scss';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProductsOverview from './components/ProductsOverview';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <ProductsOverview/>
    </div>
  );
}

export default App;
