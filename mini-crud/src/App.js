import './App.css';
import Header from './containers/Header';
import { BrowserRouter,
  Routes,
  Route,} from 'react-router-dom'
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';
function App() {
  return (
    <BrowserRouter>
    <Header/>
     <Routes>
      <Route path="/" element={<ProductListing/>} />
      <Route path="/product/:productId" element={<ProductDetail/>} />
      <Route> 404 Not Found!</Route>
      </Routes>
     
      </BrowserRouter>
  );
}

export default App;
