import { Link } from "react-router-dom";
import NavbarOne from "../../components/navbar/navbar-one";
import FooterOne from "../../components/footer/footer-one";
import ScrollToTop from "../../components/scroll-to-top";
import bg from '../../assets/img/shortcode/breadcumb.jpg';
import { useEffect } from "react";
import Aos from "aos";
import { useCart } from "../../context/CartContext";
import { LuTrash2, LuPlus, LuMinus, LuShoppingBag } from "react-icons/lu";

export default function Cart() {
    const { cartItems, updateQuantity, removeFromCart, cartSubtotal, cartCount } = useCart();

    useEffect(() => {
        Aos.init();
    }, []);

    const shippingEstimate = cartSubtotal > 50000 || cartSubtotal === 0 ? 0 : 2500;
    const estimatedTotal = cartSubtotal + shippingEstimate;

    return (
        <>
            <NavbarOne />

            <div className="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{ backgroundImage: `url(${bg})` }}>
                <div className="text-center w-full">
                    <h2 className="text-white text-3xl md:text-[40px] font-semibold leading-none text-center">Your Cart</h2>
                    <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                        <li><Link to="/">Home</Link></li>
                        <li>/</li>
                        <li className="text-primary">Cart ({cartCount})</li>
                    </ul>
                </div>
            </div>

            <div className="s-py-100 bg-[#FCFCFD] dark:bg-title">
                <div className="container mx-auto px-4 max-w-[1320px]">
                    {cartItems.length === 0 ? (
                        <div className="text-center py-20 bg-white dark:bg-dark-secondary rounded-2xl border border-dashed border-gray-300 dark:border-gray-800 max-w-2xl mx-auto" data-aos="fade-up">
                            <LuShoppingBag className="text-6xl text-gray-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-title dark:text-white mb-2">Your Shopping Cart is Empty</h3>
                            <p className="text-gray-500 mb-8 max-w-md mx-auto">
                                Explore Makkah Furniture's commercial executive desks, restaurant seating, and outdoor furniture.
                            </p>
                            <Link to="/shop" className="btn btn-theme-solid px-8 py-3">
                                <span>Browse Catalog</span>
                            </Link>
                        </div>
                    ) : (
                        <div className="flex xl:flex-row flex-col gap-[30px] lg:gap-[40px] xl:gap-[60px]" data-aos="fade-up">
                            {/* Table of Cart Items */}
                            <div className="flex-1 bg-white dark:bg-dark-secondary p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[600px]">
                                    <thead>
                                        <tr className="border-b border-gray-200 dark:border-gray-700 pb-4 text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                            <th className="pb-4 font-semibold">Furniture Item</th>
                                            <th className="pb-4 font-semibold">Price</th>
                                            <th className="pb-4 font-semibold text-center">Quantity</th>
                                            <th className="pb-4 font-semibold text-right">Subtotal</th>
                                            <th className="pb-4 font-semibold text-center">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                        {cartItems.map((item, index) => {
                                            const itemPrice = item.numericPrice || parseFloat(String(item.price).replace(/[^0-9.]/g, '')) || 0;
                                            const itemTotal = itemPrice * item.quantity;
                                            return (
                                                <tr key={index} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                                                    <td className="py-5">
                                                        <div className="flex items-center gap-4">
                                                            <img src={item.image} alt={item.name} className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg flex-none" />
                                                            <div>
                                                                <h5 className="font-semibold text-title dark:text-white text-base leading-snug">
                                                                    <Link to="/product-details" className="hover:text-primary">{item.name}</Link>
                                                                </h5>
                                                                {item.category && (
                                                                    <span className="text-xs text-primary block mt-1">{item.category}</span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="py-5 text-title dark:text-white font-medium text-base">
                                                        {item.price}
                                                    </td>
                                                    <td className="py-5 text-center">
                                                        <div className="inline-flex items-center border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-800">
                                                            <button 
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                className="px-3 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
                                                                title="Decrease"
                                                            >
                                                                <LuMinus className="size-3" />
                                                            </button>
                                                            <span className="px-3 py-1 text-sm font-semibold text-title dark:text-white min-w-[28px] text-center">
                                                                {item.quantity}
                                                            </span>
                                                            <button 
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                className="px-3 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
                                                                title="Increase"
                                                            >
                                                                <LuPlus className="size-3" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="py-5 text-right font-bold text-primary text-base">
                                                        Rs. {itemTotal.toLocaleString()}
                                                    </td>
                                                    <td className="py-5 text-center">
                                                        <button 
                                                            onClick={() => removeFromCart(item.id)}
                                                            className="p-2 text-gray-400 hover:text-red-500 rounded-full transition-colors"
                                                            title="Remove Item"
                                                        >
                                                            <LuTrash2 className="size-5" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>

                                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center flex-wrap gap-4">
                                    <Link to="/shop" className="btn btn-outline btn-sm">
                                        <span>← Continue Browsing</span>
                                    </Link>
                                    <span className="text-sm text-gray-500">
                                        Free shipping on orders above Rs. 50,000 across Pakistan
                                    </span>
                                </div>
                            </div>

                            {/* Order Summary Sidebar */}
                            <div className="w-full xl:w-[400px]">
                                <div className="bg-white dark:bg-dark-secondary p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm sticky top-28">
                                    <h3 className="text-xl font-bold text-title dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-800">
                                        Cart Summary
                                    </h3>

                                    <div className="space-y-4 text-sm">
                                        <div className="flex justify-between text-gray-600 dark:text-gray-300">
                                            <span>Subtotal ({cartCount} items)</span>
                                            <span className="font-semibold text-title dark:text-white">Rs. {cartSubtotal.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between text-gray-600 dark:text-gray-300">
                                            <span>Est. Delivery (All Pakistan)</span>
                                            <span className="font-semibold text-title dark:text-white">
                                                {shippingEstimate === 0 ? <span className="text-emerald-600">FREE</span> : `Rs. ${shippingEstimate.toLocaleString()}`}
                                            </span>
                                        </div>
                                        <div className="flex justify-between text-gray-600 dark:text-gray-300">
                                            <span>Payment Method</span>
                                            <span className="font-bold text-primary">Cash on Delivery</span>
                                        </div>

                                        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex justify-between text-lg font-bold text-title dark:text-white">
                                            <span>Total (Pay on Delivery)</span>
                                            <span className="text-primary">Rs. {estimatedTotal.toLocaleString()}</span>
                                        </div>
                                    </div>

                                    <div className="mt-8 space-y-3">
                                        <Link to="/checkout" className="btn btn-theme-solid w-full text-center block py-3.5 font-bold">
                                            <span>Proceed to COD Checkout</span>
                                        </Link>
                                    </div>

                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
                                        No advance payment or card required. Pay cash to rider upon delivery.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <FooterOne />
            <ScrollToTop />
        </>
    );
}
