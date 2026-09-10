import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useWishlist } from '../../context/WishlistContext'
import { useCart } from '../../context/CartContext'
import { productList } from '../../data/data'

import { LuSearch, LuX } from "react-icons/lu";
import { GoHeart } from "react-icons/go";
import { RiShoppingBag4Line } from 'react-icons/ri'
import Switcher from '../switcher';
import IncreDre from '../incre-dre';

export default function NavMenu({toggle, setToggle}) {  
    const [wishList, setWishList] = useState(false)
    const [cart, setCart] = useState(false)
    const [open, setOpen] = useState(false)
    const [searchKeyword, setSearchKeyword] = useState('')

    const navigate = useNavigate()

    const { wishlist, wishlistCount, removeFromWishlist } = useWishlist()
    const { cartItems, cartCount, cartSubtotal, removeFromCart } = useCart()

    const matchingProducts = searchKeyword.trim().length > 1
        ? productList.filter(item => 
            (item.name || '').toLowerCase().includes(searchKeyword.toLowerCase()) ||
            (item.category || '').toLowerCase().includes(searchKeyword.toLowerCase()) ||
            (item.subCategory || '').toLowerCase().includes(searchKeyword.toLowerCase())
          ).slice(0, 6)
        : []

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        if (searchKeyword.trim()) {
            setOpen(false)
            navigate(`/shop?search=${encodeURIComponent(searchKeyword.trim())}`)
        }
    }

    const handleTagClick = (tag) => {
        setOpen(false)
        navigate(`/shop?search=${encodeURIComponent(tag)}`)
    }

    const handleProductClick = (id) => {
        setOpen(false)
        setSearchKeyword('')
        navigate(`/product-details/${id}`)
    }

  return (
    <div className="flex items-center gap-4 sm:gap-6">
        <Link to="/login" className="text-lg leading-none text-title dark:text-white transition-all duration-300 hover:text-primary hidden lg:block">Login</Link>
        <button className="hdr_search_btn" aria-label="search" onClick={()=>setOpen(!open)}>
            <LuSearch className="text-title dark:text-white size-6"/>
        </button>

        <button className="relative hdr_wishList_btn" onClick={()=>setWishList(!wishList)}>
            {wishlistCount > 0 && (
                <span className="absolute w-[22px] h-[22px] bg-secondary -top-[10px] -right-[11px] rounded-full flex items-center justify-center text-xs leading-none text-white font-medium animate-pulse">
                    {wishlistCount}
                </span>
            )}
            <GoHeart className="text-title dark:text-white size-6"/>
        </button>

        <div className={`wishlist_popup w-80 md:w-96 absolute z-50 top-full right-0 sm:right-20 xl:right-11 bg-white dark:bg-title py-5 md:py-[30px] pl-5 md:pl-[30px] pr-[10px] md:pr-[15px] border border-primary shadow-xl ${wishList ? 'block' : 'hidden'}`}>
            <h4 className="font-medium leading-none dark:text-white mb-4 text-xl md:text-2xl">Wishlist ({wishlistCount})</h4>
            <div>
                <div className="pr-4 md:pr-5 wishlist-item max-h-[320px] overflow-y-auto">
                    {wishlist.length === 0 ? (
                        <p className="text-sm text-gray-500 py-4 text-center">Your wishlist is currently empty.</p>
                    ) : (
                        wishlist.map((item, index) => (
                            <div className="flex items-center gap-[15px] relative pb-[15px] mb-[15px] border-b border-bdr-clr dark:border-bdr-clr-drk" key={index}>
                                <img className="w-[60px] h-[60px] object-cover rounded" src={item.image} alt="wishlist"/>
                                <div className="flex-1 pr-6">
                                    <span className="text-[14px] font-medium leading-tight block line-clamp-1">{item.name}</span>
                                    <span className="text-sm font-semibold text-primary block mt-1">{item.price}</span>
                                </div>
                                <button 
                                    onClick={() => removeFromWishlist(item.id)}
                                    className="wishList_item_close absolute top-0 right-0 w-6 h-6 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-red-500 hover:text-white transition-colors"
                                >
                                    <LuX className="size-3"/>
                                </button>
                            </div>
                        ))
                    )}
                </div>
                <div className="mt-4">
                    <Link to="/wishlist" className="btn btn-outline btn-sm w-full text-center block">
                        <span>View Full Wishlist</span>
                    </Link>
                </div>
            </div>
        </div>

        <button className="relative hdr_cart_btn" onClick={()=> setCart(!cart)}>
            {cartCount > 0 && (
                <span className="absolute w-[22px] h-[22px] bg-secondary -top-[10px] -right-[11px] rounded-full flex items-center justify-center text-xs leading-none text-white font-medium">
                    {cartCount}
                </span>
            )}
            <RiShoppingBag4Line className="text-title dark:text-white size-6"/>
        </button>

        <div className={`hdr_cart_popup w-80 md:w-96 absolute z-50 top-full right-0 sm:right-10 xl:right-0 bg-white dark:bg-title p-5 md:p-[30px] border border-primary shadow-xl ${cart ? '' : 'hidden'}`}>
            <h4 className="font-medium leading-none mb-4 text-xl md:text-2xl">Your Cart ({cartCount})</h4>
            <div>
                <div className="hdr-cart-item max-h-[300px] overflow-y-auto">
                    {cartItems.length === 0 ? (
                        <p className="text-sm text-gray-500 py-4 text-center">Your shopping cart is empty.</p>
                    ) : (
                        cartItems.map((item, index) => (
                            <div className="flex gap-[15px] relative pb-[15px] mb-[15px] border-b border-bdr-clr dark:border-bdr-clr-drk" key={index}>
                                <img className="w-[60px] h-[60px] object-cover rounded" src={item.image} alt="cart"/>
                                <div className="flex-1 pr-6">
                                    <span className="text-[14px] font-medium leading-tight block line-clamp-1">{item.name}</span>
                                    <span className="text-sm text-gray-500 block mt-1">Qty: {item.quantity}</span>
                                    <span className="text-sm font-semibold text-primary block">{item.price}</span>
                                </div>
                                <button 
                                    onClick={() => removeFromCart(item.id)}
                                    className="absolute top-0 right-0 w-6 h-6 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-red-500 hover:text-white transition-colors"
                                >
                                    <LuX className="size-3"/>
                                </button>
                            </div>
                        ))
                    )}
                </div>
                <div className="pt-4 mt-3 border-t border-bdr-clr dark:border-bdr-clr-drk">
                    <h4 className="mb-4 font-semibold text-lg text-right">
                        Subtotal: <span className="text-primary">Rs. {cartSubtotal.toLocaleString()}</span>
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                        <Link to="/cart" className="btn btn-outline btn-sm text-center block" data-text="View Cart">
                            <span>View Cart</span>
                        </Link>
                        <Link to="/checkout" className="btn btn-theme-solid btn-sm text-center block" data-text="Checkout">
                            <span>Checkout</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <button className={`hamburger ${toggle ? 'opened' : ''}`} onClick={()=>setToggle(!toggle)}>
            <svg className="stroke-current text-title dark:text-white" width="40" viewBox="0 0 100 100">
                <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                <path className="line line2" d="M 20,50 H 80" />
                <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
            </svg>
        </button>
        <div className="w-[1px] bg-title/20 dark:bg-white/20 h-7 hidden sm:block"></div>
        <Switcher/>

        <div className={`search_popup fixed top-0 left-0 bg-red dark:bg-[#39434D] bg-opacity-90 dark:bg-opacity-80 backdrop-blur-[3px] dark:backdrop-blur-[7.5px] w-full h-screen z-[999] px-[15px] md:px-[30px] py-12 md:py-[70px] overflow-y-auto transform scale-90 opacity-0 invisible transition-all duration-300 flex items-center justify-center  ${open ? 'search-active' : ''}`}>
            <div className="container">
                <div className="relative max-w-4xl mx-auto hdr-search-wrapper">
                    <button className="hdr_search_close w-[36px] h-[36px] absolute bottom-full md:top-0 right-0 flex items-center justify-center bg-title dark:bg-white text-white dark:text-title" onClick={()=>setOpen(!open)}>
                        <LuX/>
                    </button>

                    <div className="bg-white dark:bg-title py-8 sm:py-10 md:py-[50px] px-5 sm:px-8 rounded-xl shadow-2xl">
                        <form onSubmit={handleSearchSubmit} className="relative">
                            <input 
                                className="outline-none border-b-2 border-primary pb-3 md:pb-4 text-title w-full pr-12 text-lg sm:text-2xl placeholder:text-gray-400 bg-transparent dark:text-white font-medium" 
                                type="text" 
                                value={searchKeyword}
                                onChange={(e) => setSearchKeyword(e.target.value)}
                                placeholder="Search executive desks, office chairs, dining sets..."
                            />
                            <button type="submit" className="absolute right-0 top-1 p-2 text-primary hover:scale-110 transition-transform" aria-label="Submit search">
                                <LuSearch className="size-6" />
                            </button>
                        </form>

                        {/* Live Search Results Dropdown */}
                        {matchingProducts.length > 0 && (
                            <div className="mt-4 bg-gray-50 dark:bg-dark-secondary rounded-lg p-3 max-h-[280px] overflow-y-auto divide-y divide-gray-200 dark:divide-gray-700">
                                <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 px-2">
                                    Instant Results ({matchingProducts.length})
                                </div>
                                {matchingProducts.map((p, idx) => (
                                    <div 
                                        key={idx}
                                        onClick={() => handleProductClick(p.id)}
                                        className="flex items-center justify-between p-2 hover:bg-white dark:hover:bg-gray-800 rounded cursor-pointer transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <img src={p.image} alt={p.name} className="w-12 h-12 object-cover rounded"/>
                                            <div>
                                                <h5 className="text-sm font-semibold text-title dark:text-white line-clamp-1">{p.name}</h5>
                                                <span className="text-xs text-gray-500 capitalize">{p.category} • {p.subCategory || 'Furniture'}</span>
                                            </div>
                                        </div>
                                        <span className="text-sm font-bold text-primary">{p.price}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="mt-6 md:mt-8">
                            <h4 className="font-medium text-sm text-gray-500 dark:text-gray-400 leading-none">Popular Searches:</h4>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {['Executive Desks', 'Office Chairs', 'Workstations', 'Cafe Tables', 'Gaming Chairs', 'Dining Sets', 'Outdoor Furniture'].map((tag, index) => {
                                    return (
                                        <button 
                                            type="button"
                                            onClick={() => handleTagClick(tag)}
                                            className="px-3 py-1.5 rounded-full text-xs bg-gray-100 dark:bg-gray-800 text-title dark:text-white hover:bg-primary hover:text-white transition-colors" 
                                            key={index}
                                        >
                                            {tag}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
