import './App.css'
import ProductsListing from './pages/ProductsListing'
import ProductDetails from './pages/ProductDetails'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react'
import Login from './pages/Login'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import FilteredProducts from './components/Filter/FilteredProducts'
import Layout from './components/Layouts/Layout'
import ProductsLayout from './components/Layouts/ProductsLayout';

function App() {
  const [token, setToken] = useState(localStorage.getItem('authToken') || null)

  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false, retry: 0 }}
  })

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/" element={<Layout token={token} setToken={setToken}/>}>
                <Route element={<ProductsLayout />}>
                  <Route index element={<ProductsListing />} />
                  <Route path="/category/:category" element={<FilteredProducts />} />
                </Route>
                <Route path="/product/:productId" element={<ProductDetails token={token} />} />
                <Route path="/login" element={<Login setToken={setToken} />} />
              </Route>
            </Routes>
            <ReactQueryDevtools initialIsOpen={false}/>
          </QueryClientProvider>
        </Router>
        <ToastContainer />
      </Provider>
    </div>
  )
}

export default App
