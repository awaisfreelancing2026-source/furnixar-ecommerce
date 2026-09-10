/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import AOS from 'aos';
import product1 from '../../assets/img/gallery/product-detls/product-01.jpg'
import product2 from '../../assets/img/gallery/product-detls/product-02.jpg'
import product3 from '../../assets/img/gallery/product-detls/product-03.jpg'
import product4 from '../../assets/img/gallery/product-detls/product-04.jpg'

import NavbarOne from '../../components/navbar/navbar-one';
import FooterOne from '../../components/footer/footer-one';
import DetailTab from '../../components/product/detail-tab';
import LayoutOne from '../../components/product/layout-one';
import ScrollToTop from '../../components/scroll-to-top';

import { productList, productTag } from '../../data/data';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaHeart, FaTruck, FaShieldAlt, FaBuilding } from 'react-icons/fa';
import { LuMinus, LuPlus } from 'react-icons/lu';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import CorporateRfqModal from '../../components/corporate-rfq-modal';

export default function ProductDetails() {
    const [activeImage, setActiveImage] = useState(1);
    const [quantity, setQuantity] = useState(1);
    const [toastMessage, setToastMessage] = useState('');
    const [isRfqOpen, setIsRfqOpen] = useState(false);

    const { addToCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();

    useEffect(()=>{
        AOS.init();
        window.scrollTo(0, 0);
    },[]);

    const params = useParams();
    const id = params.id;
    
    // Find product or fallback to the first item in productList
    const product = productList.find((item) => item.id === parseInt(id)) || productList[0];

    const isFav = isInWishlist(product.id);

    const showToast = (msg) => {
        setToastMessage(msg);
        setTimeout(() => setToastMessage(''), 3000);
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
        showToast(`Added ${quantity} × ${product.name} to Cart!`);
    };

    const handleToggleWishlist = () => {
        toggleWishlist(product);
        showToast(isFav ? `Removed from Wishlist` : `Saved to Wishlist!`);
    };

    // Calculate WhatsApp inquiry link
    const cleanNumber = '923311323017';
    const whatsappText = encodeURIComponent(
        `Hello Makkah Furniture!\nI would like to order / inquire about:\n- *Product:* ${product.name}\n- *Price:* ${product.price}\n- *Category:* ${product.category || 'Furniture'}\n\nPlease confirm availability and Cash on Delivery timeline to my city.`
    );
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${whatsappText}`;

  return (
    <>
        <NavbarOne/>

        {/* Toast Notification */}
        {toastMessage && (
            <div className="fixed top-24 right-6 z-50 bg-title text-white px-5 py-3 rounded-lg shadow-xl border border-primary text-sm flex items-center gap-2 animate-bounce">
                <span>✓</span>
                <span>{toastMessage}</span>
            </div>
        )}

        <div className="bg-[#F8F5F0] dark:bg-dark-secondary py-5 md:py-[30px]">
            <div className="container-fluid">
                <ul className="flex items-center gap-[10px] text-base md:text-lg leading-none font-normal text-title dark:text-white max-w-[1720px] mx-auto flex-wrap">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li>/</li>
                    <li className="text-primary">{product?.name}</li>
                </ul>
            </div>
        </div>

        <div className="s-py-50" data-aos="fade-up">
            <div className="container-fluid">
                <div className="max-w-[1720px] mx-auto flex justify-between gap-10 flex-col lg:flex-row">
                    {/* Left Column: Image Gallery */}
                    <div className="w-full lg:w-[55%]">
                        <div className="relative product-dtls-wrapper">
                            <span className="absolute top-5 left-0 px-3 py-1.5 bg-primary text-xs uppercase tracking-wider leading-none text-white font-semibold z-30 rounded-r">
                                In Stock • COD Available
                            </span>
                            <div className="product-dtls-slider rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-dark-secondary">
                                <div className={activeImage === 1 ? '' : 'hidden'}>
                                    <img src={product?.image || product1} className='w-full max-h-[550px] object-contain p-4' alt={product.name}/>
                                </div>
                                <div className={activeImage === 2 ? '' : 'hidden'}>
                                    <img src={product2} className='w-full max-h-[550px] object-contain p-4' alt={product.name}/>
                                </div>
                                <div className={activeImage === 3 ? '' : 'hidden'}>
                                    <img src={product3} className='w-full max-h-[550px] object-contain p-4' alt={product.name}/>
                                </div>
                                <div className={activeImage === 4 ? '' : 'hidden'}>
                                    <img src={product4} className='w-full max-h-[550px] object-contain p-4' alt={product.name}/>
                                </div>
                            </div>
                            <div className="product-dtls-nav mt-4 flex gap-3">
                                <button type="button" onClick={()=>setActiveImage(1)} className={`w-20 h-20 rounded border p-1 ${activeImage === 1 ? 'border-primary' : 'border-gray-200 dark:border-gray-700'}`}>
                                    <img src={product?.image || product1} alt="thumb" className="w-full h-full object-cover rounded"/>
                                </button>
                                <button type="button" onClick={()=>setActiveImage(2)} className={`w-20 h-20 rounded border p-1 ${activeImage === 2 ? 'border-primary' : 'border-gray-200 dark:border-gray-700'}`}>
                                    <img src={product2} alt="thumb" className="w-full h-full object-cover rounded"/>
                                </button>
                                <button type="button" onClick={()=>setActiveImage(3)} className={`w-20 h-20 rounded border p-1 ${activeImage === 3 ? 'border-primary' : 'border-gray-200 dark:border-gray-700'}`}>
                                    <img src={product3} alt="thumb" className="w-full h-full object-cover rounded"/>
                                </button>
                                <button type="button" onClick={()=>setActiveImage(4)} className={`w-20 h-20 rounded border p-1 ${activeImage === 4 ? 'border-primary' : 'border-gray-200 dark:border-gray-700'}`}>
                                    <img src={product4} alt="thumb" className="w-full h-full object-cover rounded"/>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Product Info & Commerce Actions */}
                    <div className="lg:max-w-[650px] w-full">
                        <div className="pb-4 sm:pb-6 border-b border-bdr-clr dark:border-bdr-clr-drk">
                            <span className="text-xs uppercase tracking-widest text-primary font-bold">Makkah Furniture Premium Collection</span>
                            <h1 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-title dark:text-white mt-1">{product?.name}</h1>
                            
                            {/* PKR Price */}
                            <div className="flex gap-4 items-baseline mt-4">
                                <span className="text-3xl sm:text-4xl text-primary font-bold">{product?.price}</span>
                                <span className="text-sm text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-2.5 py-1 rounded font-medium">
                                    Cash on Delivery
                                </span>
                            </div>

                            {/* Trust badges */}
                            <div className="mt-4 p-3.5 bg-snow dark:bg-dark-secondary rounded-lg border border-gray-200 dark:border-gray-800 flex flex-wrap gap-4 text-xs">
                                <div className="flex items-center gap-1.5 text-title dark:text-white">
                                    <FaTruck className="text-primary size-4" />
                                    <span>Nationwide Pakistan Delivery</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-title dark:text-white">
                                    <FaShieldAlt className="text-emerald-600 size-4" />
                                    <span>Inspection Before Payment</span>
                                </div>
                            </div>

                            <p className="sm:text-base mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                {product?.desc || 'Engineered with premium commercial-grade materials, ergonomic framing, and long-lasting durability tailored for corporate offices, modern homes, and commercial spaces in Pakistan.'}
                            </p>
                        </div>

                        {/* Quantity & Order Actions */}
                        <div className="py-6 border-b border-bdr-clr dark:border-bdr-clr-drk space-y-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-medium text-title dark:text-white">Quantity:</span>
                                <div className="inc-dec flex items-center border border-gray-300 dark:border-gray-700 rounded overflow-hidden">
                                    <button 
                                        type="button" 
                                        onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}
                                        className="w-10 h-10 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 flex items-center justify-center transition-colors text-title dark:text-white"
                                        aria-label="Decrease quantity"
                                    >
                                        <LuMinus className="size-4" />
                                    </button>
                                    <span className="w-12 text-center font-medium text-title dark:text-white">
                                        {quantity}
                                    </span>
                                    <button 
                                        type="button" 
                                        onClick={() => setQuantity(prev => prev + 1)}
                                        className="w-10 h-10 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 flex items-center justify-center transition-colors text-title dark:text-white"
                                        aria-label="Increase quantity"
                                    >
                                        <LuPlus className="size-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Direct Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                <button 
                                    type="button" 
                                    onClick={handleAddToCart}
                                    className="btn btn-solid flex-1 text-center justify-center py-3.5"
                                >
                                    <span>Add to Cart</span>
                                </button>
                                <button 
                                    type="button" 
                                    onClick={handleToggleWishlist}
                                    className={`btn ${isFav ? 'bg-red-50 text-red-600 border-red-300' : 'btn-outline'} flex items-center justify-center gap-2 py-3.5 px-6`}
                                >
                                    <FaHeart className={isFav ? 'text-red-600' : ''} />
                                    <span>{isFav ? 'In Wishlist' : 'Add to Wishlist'}</span>
                                </button>
                            </div>

                            {/* WhatsApp Direct Order Button (03311323017) */}
                            <div className="pt-2">
                                <a 
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 px-6 rounded-lg font-semibold flex items-center justify-center gap-2.5 transition-colors shadow-md hover:shadow-lg text-sm sm:text-base"
                                >
                                    <FaWhatsapp className="size-6" />
                                    <span>Order via WhatsApp (0331-1323017)</span>
                                </a>
                                <p className="text-[11px] text-gray-500 dark:text-gray-400 text-center mt-1.5">
                                    Instant answers, bulk quotation discounts & quick COD checkout via WhatsApp
                                </p>

                                {/* Corporate Bulk Order RFQ Button */}
                                <button 
                                    type="button" 
                                    onClick={() => setIsRfqOpen(true)}
                                    className="w-full mt-2.5 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-title dark:text-white py-2.5 px-4 rounded-lg font-medium border border-gray-300 dark:border-gray-700 flex items-center justify-center gap-2 text-xs sm:text-sm transition-colors"
                                >
                                    <FaBuilding className="text-primary size-4" />
                                    <span>Buying 5+ Units? Request Corporate Quotation (RFQ)</span>
                                </button>
                            </div>
                        </div>

                        {/* Specs & Meta */}
                        <div className="py-4 sm:py-6 border-b border-bdr-clr dark:border-bdr-clr-drk" data-aos="fade-up" data-aos-delay="300">
                            <div className="grid grid-cols-2 gap-y-3 text-sm">
                                <div>
                                    <span className="text-gray-500">SKU:</span>{' '}
                                    <span className="font-semibold text-title dark:text-white">MKH-{product?.id ? String(product.id).padStart(4, '0') : '101'}</span>
                                </div>
                                <div>
                                    <span className="text-gray-500">Category:</span>{' '}
                                    <span className="font-semibold text-title dark:text-white">{product?.category || 'Commercial'}</span>
                                </div>
                                <div>
                                    <span className="text-gray-500">Delivery:</span>{' '}
                                    <span className="font-semibold text-emerald-600">Nationwide (COD)</span>
                                </div>
                                <div>
                                    <span className="text-gray-500">Helpline:</span>{' '}
                                    <a href="tel:03311323017" className="font-semibold text-primary hover:underline">0331-1323017</a>
                                </div>
                            </div>
                        </div>

                        {/* Social Share */}
                        <div className="pt-4 sm:pt-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="flex items-center gap-6">
                                <h6 className="font-normal text-sm">Share Product:</h6>
                                <div className="flex gap-4">
                                    <a 
                                        href={`https://wa.me/?text=${encodeURIComponent('Check out ' + product.name + ' at Makkah Furniture: ' + window.location.href)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-[#25D366] transition-colors"
                                        aria-label="Share on WhatsApp"
                                    >
                                        <FaWhatsapp className='size-5'/>
                                    </a>
                                    <Link to="#" aria-label="Share on Facebook" className="text-gray-500 hover:text-primary transition-colors">
                                        <FaFacebookF className='size-5'/>
                                    </Link>
                                    <Link to="#" aria-label="Share on Twitter" className="text-gray-500 hover:text-primary transition-colors">
                                        <FaTwitter className='size-5'/>
                                    </Link>
                                    <Link to="#" aria-label="Share on Instagram" className="text-gray-500 hover:text-primary transition-colors">
                                        <FaInstagram className='size-5'/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Corporate RFQ Modal */}
        <CorporateRfqModal 
            isOpen={isRfqOpen} 
            onClose={() => setIsRfqOpen(false)} 
            productName={product?.name} 
        />

        <div className="s-py-50">
            <div className="container-fluid">
                <DetailTab product={product}/>
            </div>
        </div>

        <div className="s-py-50-100" data-aos="fade-up" data-aos-delay="200">
            <div className="container-fluid">
                <div className="max-w-[547px] mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl leading-none font-bold">Related Furniture</h2>
                    <p className="mt-3 text-gray-500">Explore complementary options crafted by Makkah Furniture for modern spaces.</p>
                </div>
                <div className="max-w-[1720px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-8 pt-8 md:pt-[50px]">
                    {productList.slice(0,4).map((item,index)=>{
                        return(
                            <LayoutOne item={item} key={index}/>
                        )
                    })}
                </div>
            </div>
        </div>

        <FooterOne/>
        <ScrollToTop/>
    </>
  )
}
