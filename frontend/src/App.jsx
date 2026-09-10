import { Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './pages/index/index'
import About from './pages/inner-pages/about'
import Faq from './pages/inner-pages/faq'
import TermsAndConditions from './pages/inner-pages/terms-and-conditions'
import Error from './pages/special/error'
import MyProfile from './pages/account/my-profile'
import MyAccount from './pages/account/my-account'
import EditAccount from './pages/account/edit-account'
import OrderHistory from './pages/account/order-history'
import Wishlist from './pages/account/wishlist'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import ForgerPassword from './pages/auth/forger-password'
import Cart from './pages/shop/cart'
import Checkout from './pages/shop/checkout'
import ShopV1 from './pages/shop/shop-v1'
import ProductDetails from './pages/index/product-details'
import Contact from './pages/inner-pages/contact'
import ProductCategory from './pages/shop/product-category'

import WhatsAppButton from './components/whatsapp-button'

function App() {
  return (
    <>
      <WhatsAppButton />
      <Routes>
        {/* Core Makkah Furniture Pages */}
        <Route path="/" element={<Index/>} />
        <Route path="/shop" element={<ShopV1/>} />
        <Route path="/shop-v1" element={<ShopV1/>} />
        <Route path="/product-details" element={<ProductDetails/>} />
        <Route path="/product-details/:id" element={<ProductDetails/>} />
        <Route path="/product-category" element={<ProductCategory/>} />

        {/* Customer Commerce Flow */}
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/wishlist" element={<Wishlist/>} />

        {/* Corporate & Support Info */}
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions/>} />

        {/* Customer Account & Auth */}
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forger-password" element={<ForgerPassword/>} />
        <Route path="/my-profile" element={<MyProfile/>} />
        <Route path="/my-account" element={<MyAccount/>} />
        <Route path="/edit-account" element={<EditAccount/>} />
        <Route path="/order-history" element={<OrderHistory/>} />

        {/* Fallback */}
        <Route path="/error" element={<Error/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </>
  )
}

export default App
