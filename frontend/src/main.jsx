import { createRoot } from 'react-dom/client'
import './assets/css/style.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { WishlistProvider } from './context/WishlistContext'
import { CartProvider } from './context/CartContext'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <WishlistProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </WishlistProvider>
  </BrowserRouter>,
)
