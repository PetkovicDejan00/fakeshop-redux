import './App.css'
import Header from './components/Header'
import ProductsListing from './pages/ProductsListing'
import ProductDetails from './pages/ProductDetails'
import Cart from './components/Cart/Cart'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import Login from './pages/Login'


function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="App">
      <Router>
        <Header />
        <Cart />
        <Routes>
          <Route path="/" exact element={<ProductsListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  )
}

export default App
