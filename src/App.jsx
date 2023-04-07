import './App.css'
import Header from './containers/Header'
import ProductsListing from './containers/ProductsListing'
import ProductDetails from './containers/ProductDetails'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductsListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
