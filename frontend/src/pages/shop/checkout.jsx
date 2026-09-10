import { Link, useNavigate } from "react-router-dom";
import NavbarOne from "../../components/navbar/navbar-one";
import FooterOne from "../../components/footer/footer-one";
import ScrollToTop from "../../components/scroll-to-top";
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import bg from '../../assets/img/shortcode/breadcumb.jpg'
import Aos from "aos";
import { FaMoneyBillWave, FaTruck, FaCheckCircle, FaWhatsapp } from "react-icons/fa";

const PAKISTAN_CITIES = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Faisalabad",
    "Multan",
    "Peshawar",
    "Gujranwala",
    "Sialkot",
    "Quetta",
    "Hyderabad",
    "Bahawalpur",
    "Sargodha",
    "Abbottabad",
    "Sukkur",
    "Sheikhupura",
    "Jhelum",
    "Gujrat",
    "Mardan",
    "Sahiwal"
];

export default function Checkout() {
    const { cartItems, cartSubtotal, clearCart } = useCart();
    const navigate = useNavigate();

    const [openCoupon, setOpenCoupon] = useState(false);
    const [couponCode, setCouponCode] = useState('');
    const [couponApplied, setCouponApplied] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [placedOrderDetails, setPlacedOrderDetails] = useState(null);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        alternatePhone: '',
        city: 'Lahore',
        address: '',
        landmark: '',
        notes: '',
        agreeTerms: true
    });

    useEffect(() => {
        Aos.init();
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleApplyCoupon = (e) => {
        e.preventDefault();
        if (couponCode.trim().toLowerCase() === 'makkah10') {
            setCouponApplied(true);
            alert('Coupon applied: 10% discount!');
        } else {
            alert('Invalid coupon code. Try "MAKKAH10"');
        }
    };

    const discountAmount = couponApplied ? Math.round(cartSubtotal * 0.1) : 0;
    const shippingFee = cartSubtotal > 50000 || cartSubtotal === 0 ? 0 : 2500;
    const finalTotal = Math.max(0, cartSubtotal - discountAmount + shippingFee);

    const handleSubmitOrder = (e) => {
        e.preventDefault();
        if (!formData.fullName || !formData.phone || !formData.address) {
            alert('Please provide your Full Name, Phone Number, and Delivery Address.');
            return;
        }

        if (cartItems.length === 0) {
            alert('Your cart is empty! Please add products before checking out.');
            return;
        }

        const orderId = 'MKH-' + Math.floor(100000 + Math.random() * 900000);
        const orderInfo = {
            orderId,
            items: cartItems,
            customer: formData,
            subtotal: cartSubtotal,
            shipping: shippingFee,
            discount: discountAmount,
            total: finalTotal,
            date: new Date().toLocaleDateString('en-GB')
        };

        setPlacedOrderDetails(orderInfo);
        setOrderPlaced(true);
        clearCart();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <NavbarOne />

            <div className="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{ backgroundImage: `url(${bg})` }}>
                <div className="text-center w-full">
                    <h2 className="text-white text-3xl md:text-[40px] font-semibold leading-tight text-center">
                        {orderPlaced ? "Order Confirmed" : "Cash on Delivery Checkout"}
                    </h2>
                    <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4 flex-wrap">
                        <li><Link to="/">Home</Link></li>
                        <li>/</li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li>/</li>
                        <li className="text-primary">Checkout</li>
                    </ul>
                </div>
            </div>

            <div className="s-py-100 bg-[#FCFCFD] dark:bg-title">
                <div className="container mx-auto px-4 max-w-[1240px]">
                    {orderPlaced ? (
                        <div className="bg-white dark:bg-dark-secondary p-8 md:p-14 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 text-center max-w-2xl mx-auto" data-aos="zoom-in">
                            <FaCheckCircle className="text-6xl text-emerald-500 mx-auto mb-4" />
                            <h2 className="text-3xl font-bold text-title dark:text-white mb-2">Thank You For Your Order!</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                                Your order has been placed successfully under <strong className="text-primary font-mono font-bold">{placedOrderDetails.orderId}</strong>.
                            </p>

                            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 p-5 rounded-xl text-left mb-6">
                                <h4 className="font-semibold text-emerald-800 dark:text-emerald-300 flex items-center gap-2 mb-2">
                                    <FaMoneyBillWave /> Cash on Delivery (COD) Payment
                                </h4>
                                <p className="text-sm text-emerald-700 dark:text-emerald-400">
                                    Total Payable on Delivery: <strong>Rs. {placedOrderDetails.total.toLocaleString()}</strong>.
                                    Our logistics team will contact you at <strong>{placedOrderDetails.customer.phone}</strong> before dispatching your furniture.
                                </p>
                            </div>

                            <div className="border-t border-b border-gray-200 dark:border-gray-700 py-4 my-6 text-left text-sm space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Delivery To:</span>
                                    <span className="font-medium text-title dark:text-white">{placedOrderDetails.customer.fullName}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Destination City:</span>
                                    <span className="font-medium text-title dark:text-white">{placedOrderDetails.customer.city}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Shipping Address:</span>
                                    <span className="font-medium text-title dark:text-white">{placedOrderDetails.customer.address}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Estimated Delivery:</span>
                                    <span className="font-medium text-emerald-600">5 – 7 Business Days</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
                                <a 
                                    href={`https://wa.me/923311323017?text=${encodeURIComponent(
                                        `Hello Makkah Furniture! I have placed an order.\n\n*Order ID:* ${placedOrderDetails.orderId}\n*Name:* ${placedOrderDetails.customer.fullName}\n*Phone:* ${placedOrderDetails.customer.phone}\n*City:* ${placedOrderDetails.customer.city}\n*Address:* ${placedOrderDetails.customer.address}\n*Total (COD):* Rs. ${placedOrderDetails.total.toLocaleString()}\n\nPlease confirm my delivery.`
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3 rounded flex items-center justify-center gap-2 font-medium"
                                >
                                    <FaWhatsapp className="size-5" />
                                    <span>Confirm via WhatsApp (0331-1323017)</span>
                                </a>
                                <Link to="/shop" className="btn btn-theme-solid px-6 py-3">
                                    <span>Continue Shopping</span>
                                </Link>
                                <Link to="/" className="btn btn-outline px-6 py-3">
                                    <span>Return Home</span>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmitOrder} className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                            {/* Left Column: Customer & Delivery Details */}
                            <div className="lg:col-span-7 space-y-8" data-aos="fade-up">
                                <div className="bg-white dark:bg-dark-secondary p-6 sm:p-8 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                                    {/* Coupon Banner */}
                                    <div className="mb-8">
                                        <p className="text-sm bg-gray-50 dark:bg-gray-800/50 p-4 border border-gray-200 dark:border-gray-700 rounded-lg text-title dark:text-white">
                                            Have a promotional code? 
                                            <button 
                                                type="button"
                                                onClick={() => setOpenCoupon(!openCoupon)}
                                                className="ml-2 underline font-semibold text-primary"
                                            >
                                                Click here to enter
                                            </button>
                                        </p>
                                        {openCoupon && (
                                            <div className="flex gap-2 mt-3">
                                                <input 
                                                    type="text"
                                                    value={couponCode}
                                                    onChange={(e) => setCouponCode(e.target.value)}
                                                    placeholder="Enter coupon (e.g. MAKKAH10)"
                                                    className="flex-1 h-12 px-4 border border-gray-300 dark:border-gray-700 rounded bg-transparent text-sm text-title dark:text-white"
                                                />
                                                <button 
                                                    type="button"
                                                    onClick={handleApplyCoupon}
                                                    className="btn btn-theme-solid px-5 h-12 text-sm"
                                                >
                                                    <span>Apply</span>
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    <h3 className="text-xl sm:text-2xl font-bold text-title dark:text-white mb-6 flex items-center gap-2">
                                        <span>Delivery & Contact Details</span>
                                    </h3>

                                    <div className="grid gap-5">
                                        <div>
                                            <label className="block text-sm font-semibold text-title dark:text-white mb-2">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <input 
                                                type="text" 
                                                name="fullName"
                                                required
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                placeholder="e.g. Muhammad Awais" 
                                                className="w-full h-12 px-4 rounded border border-gray-300 dark:border-gray-700 bg-transparent text-title dark:text-white focus:border-primary outline-none transition-colors"
                                            />
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-title dark:text-white mb-2">
                                                    Phone / WhatsApp <span className="text-red-500">*</span>
                                                </label>
                                                <input 
                                                    type="tel" 
                                                    name="phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="0300 1234567" 
                                                    className="w-full h-12 px-4 rounded border border-gray-300 dark:border-gray-700 bg-transparent text-title dark:text-white focus:border-primary outline-none transition-colors"
                                                />
                                                <span className="text-[12px] text-gray-500 mt-1 block">Rider will call for delivery confirmation</span>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-title dark:text-white mb-2">
                                                    Alternate Phone (Optional)
                                                </label>
                                                <input 
                                                    type="tel" 
                                                    name="alternatePhone"
                                                    value={formData.alternatePhone}
                                                    onChange={handleChange}
                                                    placeholder="0321 7654321" 
                                                    className="w-full h-12 px-4 rounded border border-gray-300 dark:border-gray-700 bg-transparent text-title dark:text-white focus:border-primary outline-none transition-colors"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-title dark:text-white mb-2">
                                                    Email Address
                                                </label>
                                                <input 
                                                    type="email" 
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="client@gmail.com" 
                                                    className="w-full h-12 px-4 rounded border border-gray-300 dark:border-gray-700 bg-transparent text-title dark:text-white focus:border-primary outline-none transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-title dark:text-white mb-2">
                                                    Delivery City <span className="text-red-500">*</span>
                                                </label>
                                                <select 
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleChange}
                                                    className="w-full h-12 px-4 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-secondary text-title dark:text-white focus:border-primary outline-none"
                                                >
                                                    {PAKISTAN_CITIES.map((c, i) => (
                                                        <option key={i} value={c}>{c}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-title dark:text-white mb-2">
                                                Complete Street Address <span className="text-red-500">*</span>
                                            </label>
                                            <input 
                                                type="text" 
                                                name="address"
                                                required
                                                value={formData.address}
                                                onChange={handleChange}
                                                placeholder="House / Office #, Street, Sector / Area" 
                                                className="w-full h-12 px-4 rounded border border-gray-300 dark:border-gray-700 bg-transparent text-title dark:text-white focus:border-primary outline-none transition-colors"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-title dark:text-white mb-2">
                                                Nearest Famous Landmark (Optional)
                                            </label>
                                            <input 
                                                type="text" 
                                                name="landmark"
                                                value={formData.landmark}
                                                onChange={handleChange}
                                                placeholder="Near Main Market, Mosque, Bank, etc." 
                                                className="w-full h-12 px-4 rounded border border-gray-300 dark:border-gray-700 bg-transparent text-title dark:text-white focus:border-primary outline-none transition-colors"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-title dark:text-white mb-2">
                                                Special Delivery Notes
                                            </label>
                                            <textarea 
                                                name="notes"
                                                value={formData.notes}
                                                onChange={handleChange}
                                                placeholder="Specify floor level, elevator availability, or preferred delivery timing" 
                                                rows="3"
                                                className="w-full p-4 rounded border border-gray-300 dark:border-gray-700 bg-transparent text-title dark:text-white focus:border-primary outline-none transition-colors"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Order Summary & COD Lock */}
                            <div className="lg:col-span-5 space-y-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="bg-white dark:bg-dark-secondary p-6 sm:p-8 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                                    <h3 className="text-xl font-bold text-title dark:text-white mb-5 pb-4 border-b border-gray-200 dark:border-gray-800">
                                        Order Summary ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
                                    </h3>

                                    {/* Cart Items List */}
                                    <div className="space-y-4 max-h-[280px] overflow-y-auto pr-2 mb-6">
                                        {cartItems.length === 0 ? (
                                            <p className="text-sm text-gray-500 py-4">No items in your cart.</p>
                                        ) : (
                                            cartItems.map((item, idx) => (
                                                <div key={idx} className="flex items-center gap-3 pb-3 border-b border-gray-100 dark:border-gray-800">
                                                    <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded flex-none" />
                                                    <div className="flex-1 min-w-0">
                                                        <h5 className="text-sm font-medium text-title dark:text-white truncate">{item.name}</h5>
                                                        <span className="text-xs text-gray-500">Qty: {item.quantity}</span>
                                                    </div>
                                                    <div className="text-sm font-semibold text-primary whitespace-nowrap">
                                                        {item.price}
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>

                                    {/* Cost Breakdown */}
                                    <div className="space-y-3 text-sm border-t border-gray-200 dark:border-gray-800 pt-4">
                                        <div className="flex justify-between text-gray-600 dark:text-gray-300">
                                            <span>Subtotal</span>
                                            <span className="font-semibold text-title dark:text-white">Rs. {cartSubtotal.toLocaleString()}</span>
                                        </div>

                                        {couponApplied && (
                                            <div className="flex justify-between text-emerald-600 font-medium">
                                                <span>Coupon Discount (10%)</span>
                                                <span>- Rs. {discountAmount.toLocaleString()}</span>
                                            </div>
                                        )}

                                        <div className="flex justify-between text-gray-600 dark:text-gray-300">
                                            <span>Furniture Delivery (All Pakistan)</span>
                                            <span>
                                                {shippingFee === 0 ? (
                                                    <span className="text-emerald-600 font-semibold">FREE</span>
                                                ) : (
                                                    `Rs. ${shippingFee.toLocaleString()}`
                                                )}
                                            </span>
                                        </div>

                                        <div className="flex justify-between text-lg font-bold text-title dark:text-white border-t border-gray-200 dark:border-gray-700 pt-3">
                                            <span>Total (Pay on Delivery)</span>
                                            <span className="text-primary">Rs. {finalTotal.toLocaleString()}</span>
                                        </div>
                                    </div>

                                    {/* Payment Method - Cash on Delivery Only */}
                                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                                        <label className="block text-sm font-bold text-title dark:text-white mb-3 uppercase tracking-wider">
                                            Payment Method
                                        </label>

                                        <div className="p-4 rounded-xl border-2 border-primary bg-primary/5 dark:bg-primary/10 flex items-start gap-3">
                                            <input 
                                                type="radio" 
                                                name="paymentMethod" 
                                                defaultChecked 
                                                className="mt-1 accent-primary" 
                                            />
                                            <div>
                                                <div className="font-bold text-title dark:text-white text-base flex items-center gap-2">
                                                    <FaMoneyBillWave className="text-primary" /> Cash on Delivery (COD)
                                                </div>
                                                <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                                                    Pay cash to the courier rider upon delivery and physical inspection of your furniture. No advance payment required.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Terms Agreement */}
                                    <div className="mt-5">
                                        <label className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300 cursor-pointer">
                                            <input 
                                                type="checkbox" 
                                                name="agreeTerms"
                                                checked={formData.agreeTerms}
                                                onChange={handleChange}
                                                required
                                                className="accent-primary" 
                                            />
                                            <span>I agree to Makkah Furniture terms, return policy & cash on delivery inspection rules.</span>
                                        </label>
                                    </div>

                                    {/* Submit Order Button */}
                                    <button 
                                        type="submit" 
                                        disabled={cartItems.length === 0}
                                        className={`btn btn-theme-solid w-full mt-6 py-4 text-center font-bold text-base shadow-lg ${cartItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        <span>Confirm Cash on Delivery Order</span>
                                    </button>

                                    <p className="text-[12px] text-gray-400 text-center mt-3">
                                        🚚 Safe & Insured Furniture Delivery Across Pakistan
                                    </p>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>

            <FooterOne />
            <ScrollToTop />
        </>
    );
}
