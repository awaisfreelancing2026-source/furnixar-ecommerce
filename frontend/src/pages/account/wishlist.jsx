import { Link } from "react-router-dom";
import { useEffect } from "react";

import NavbarOne from "../../components/navbar/navbar-one";
import FooterOne from "../../components/footer/footer-one";
import ScrollToTop from "../../components/scroll-to-top";
import AccountTab from "../../components/account/account-tab";

import bg from '../../assets/img/shortcode/breadcumb.jpg'
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

import { RiShoppingBag2Line } from "react-icons/ri";
import { FaHeart, FaTrash } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";

import Aos from "aos";

export default function Wishlist() {
    const { wishlist, removeFromWishlist } = useWishlist();
    const { addToCart } = useCart();

    useEffect(()=>{
        Aos.init()
    }, [])

  return (
    <>
        <NavbarOne/>

        <div className="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
            <div className="text-center w-full">
                <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">My Wishlist</h2>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">Wishlist ({wishlist.length})</li>
                </ul>
            </div>
        </div>

        <div className="s-py-100">
            <div className="container-fluid">
                <div className="max-w-[1720px] mx-auto flex items-start gap-8 md:gap-12 2xl:gap-24 flex-col md:flex-row my-profile-navtab">
                    <div className="w-full md:w-[200px] lg:w-[300px] flex-none" data-aos="fade-up" data-aos-delay="100">
                        <AccountTab/>
                    </div>
                    <div className="w-full md:w-auto md:flex-1" data-aos="fade-up" data-aos-delay="300">
                        {wishlist.length === 0 ? (
                            <div className="text-center py-16 bg-gray-50 dark:bg-dark-secondary rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
                                <FaHeart className="mx-auto text-4xl text-gray-400 mb-4"/>
                                <h3 className="text-2xl font-medium text-title dark:text-white mb-2">Your wishlist is empty</h3>
                                <p className="text-gray-500 mb-6 max-w-md mx-auto">Explore Makkah Furniture's premium office, dining, and outdoor collections and save your favorite items here.</p>
                                <Link to="/shop" className="btn btn-theme-solid">
                                    <span>Browse Furniture</span>
                                </Link>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg::gap-8">
                                {wishlist.map((item, index)=>{
                                    return(
                                        <div className="group" key={index}>
                                            <div className="relative overflow-hidden group z-[5] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-title before:opacity-0 before:duration-300 before:z-[5] hover:before:opacity-80 rounded-lg">
                                                <img className="w-full h-[280px] object-cover transform duration-300 group-hover:scale-110" src={item.image} alt={item.name}/>

                                                <div className="absolute z-10 top-0 w-full h-full flex items-center justify-center gap-3">
                                                    <button 
                                                        onClick={() => addToCart(item)}
                                                        className="w-11 h-11 bg-white text-title hover:bg-primary hover:text-white flex items-center justify-center rounded-full shadow-md transition-all duration-300"
                                                        title="Add to Cart"
                                                    >
                                                        <RiShoppingBag2Line className="size-5"/>
                                                    </button>
                                                    <button 
                                                        onClick={() => removeFromWishlist(item.id)}
                                                        className="w-11 h-11 bg-white text-red-500 hover:bg-red-500 hover:text-white flex items-center justify-center rounded-full shadow-md transition-all duration-300"
                                                        title="Remove from Wishlist"
                                                    >   
                                                        <FaTrash className="size-4"/>   
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="lg:pt-5 pt-4 flex gap-2 flex-col">
                                                <h4 className="font-semibold leading-none text-primary text-xl">{item.price}</h4>
                                                <div>
                                                    <h5 className="font-medium dark:text-white text-lg leading-snug">
                                                        <Link to="/product-details" className="hover:text-primary">{item.name}</Link>
                                                    </h5>
                                                    {item.subCategory && (
                                                        <span className="text-xs text-gray-500 mt-1 block uppercase tracking-wider">{item.subCategory}</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

        <FooterOne/>

        <ScrollToTop/>
    </>
  )
}
