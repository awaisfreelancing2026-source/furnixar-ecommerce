import { useEffect, useState } from 'react'
import logo from '../../assets/img/svg/logo.svg'
import logoLight from '../../assets/img/svg/logo-light.svg'
import { Link } from 'react-router-dom'
import NavMenu from './nav-menu'
import add from '../../assets//img/thumb/add.png'
import { FaPhoneAlt, FaTruck, FaWhatsapp } from 'react-icons/fa'

export default function NavbarOne() {
    const [toggle , setToggle] = useState(false)
    const [current , setCurrent] = useState('')
    const [scroll,setScroll] = useState(false)
    
        useEffect(()=>{
            window.scrollTo(0,0)
            setCurrent(window.location.pathname)
    
            const handlerScroll=()=>{
                if(window.scrollY > 50){
                    setScroll(true)
                }else{setScroll(false)}
            }
    
            window.addEventListener('scroll',handlerScroll)
    
            return () => {
                window.removeEventListener('scroll',handlerScroll)
              };
        },[])

  return (
    <div className={`header-area default-header relative z-50 bg-white dark:bg-title ${scroll ? 'sticky-header' : ''}`}>
        {/* Top utility notification bar (Interwood Style) */}
        <div className="bg-[#181A1B] text-gray-300 text-xs py-2 px-4 border-b border-neutral-800">
            <div className="max-w-[1720px] mx-auto flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-primary font-medium">
                        <FaTruck className="size-3.5" /> Cash on Delivery Nationwide
                    </span>
                    <span className="hidden md:inline text-neutral-500">|</span>
                    <span className="hidden md:inline text-neutral-400">
                        Free delivery across Pakistan on orders over Rs. 50,000
                    </span>
                </div>
                <div className="flex items-center gap-4 text-xs">
                    <a 
                        href="tel:03311323017" 
                        className="flex items-center gap-1.5 hover:text-primary transition-colors duration-200"
                    >
                        <FaPhoneAlt className="size-3 text-primary" />
                        <span className="font-semibold text-white">0331-1323017</span>
                    </a>
                    <a 
                        href="https://wa.me/923311323017?text=Hello%20Makkah%20Furniture%2C%20I%20would%20like%20to%20inquire%20about%20your%20products" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[#25D366] hover:underline font-medium"
                    >
                        <FaWhatsapp className="size-3.5" /> WhatsApp Support
                    </a>
                    <span className="hidden sm:inline text-neutral-500">|</span>
                    <Link to="/contact" className="hidden sm:inline hover:text-primary transition-colors duration-200">
                        Corporate Quotations
                    </Link>
                </div>
            </div>
        </div>

        <div className="container-fluid">
            <div className="flex items-center justify-between gap-x-6 max-w-[1720px] mx-auto relative py-[12px] sm:py-4 lg:py-0">
                <Link className="cursor-pointer flex items-center gap-2" to="/" aria-label="Makkah Furniture">
                    <span className="text-2xl sm:text-3xl font-bold tracking-wider text-title dark:text-white uppercase">
                        Makkah <span className="text-primary font-normal">Furniture</span>
                    </span>
                </Link>

                <div className={`main-menu absolute z-50 w-full lg:w-auto top-full left-0 lg:static bg-white dark:bg-title lg:bg-transparent lg:dark:bg-transparent px-5 sm:px-[30px] py-[10px] sm:py-5 lg:px-0 lg:py-0 ${toggle ? 'active' : ''}`}>
                    <ul className="text-base lg:text-[17px] font-medium leading-none text-title dark:text-white lg:flex lg:gap-[24px] xl:gap-[30px] items-center">
                        <li className={`${current === '/' ? 'active text-primary' : ''}`}>
                            <Link to="/">Home</Link>
                        </li>

                        {/* Office Menu */}
                        <li className="relative group">
                            <Link to="/shop?category=office" className="flex items-center gap-1">
                                Office <span></span>
                            </Link>
                            <ul className="sub-menu lg:absolute z-50 lg:top-full lg:left-0 lg:min-w-[240px] lg:invisible lg:group-hover:visible lg:opacity-0 lg:group-hover:opacity-100 lg:transition-all lg:bg-white lg:dark:bg-title lg:py-[15px] lg:px-[20px] shadow-lg border border-gray-100 dark:border-gray-800">
                                <li className="py-1.5"><Link to="/shop?category=office&sub=executive-tables" className="hover:text-primary block text-sm">Executive Tables</Link></li>
                                <li className="py-1.5"><Link to="/shop?category=office&sub=executive-chairs" className="hover:text-primary block text-sm">Executive Chairs</Link></li>
                                <li className="py-1.5"><Link to="/shop?category=office&sub=manager-tables" className="hover:text-primary block text-sm">Manager Tables</Link></li>
                                <li className="py-1.5"><Link to="/shop?category=office&sub=manager-chairs" className="hover:text-primary block text-sm">Manager Chairs</Link></li>
                                <li className="py-1.5"><Link to="/shop?category=office&sub=staff-tables" className="hover:text-primary block text-sm">Staff Tables</Link></li>
                                <li className="py-1.5"><Link to="/shop?category=office&sub=staff-chairs" className="hover:text-primary block text-sm">Staff Chairs</Link></li>
                                <li className="py-1.5"><Link to="/shop?category=office&sub=workstations" className="hover:text-primary block text-sm">Workstations</Link></li>
                                <li className="py-1.5"><Link to="/shop?category=office&sub=conference-tables" className="hover:text-primary block text-sm">Conference Tables</Link></li>
                                <li className="py-1.5"><Link to="/shop?category=office&sub=reception-counters" className="hover:text-primary block text-sm">Reception Counters</Link></li>
                                <li className="py-1.5"><Link to="/shop?category=office&sub=storage-cabinets" className="hover:text-primary block text-sm">Storage Cabinets</Link></li>
                            </ul>
                        </li>

                        {/* Cafe & Restaurant Menu */}
                        <li className="relative group">
                            <Link to="/shop?category=cafe-restaurant" className="flex items-center gap-1">
                                Cafe & Restaurant <span></span>
                            </Link>
                            <ul className="sub-menu lg:absolute z-50 lg:top-full lg:left-0 lg:min-w-[220px] lg:invisible lg:group-hover:visible lg:opacity-0 lg:group-hover:opacity-100 lg:transition-all lg:bg-white lg:dark:bg-title lg:py-[15px] lg:px-[20px] shadow-lg border border-gray-100 dark:border-gray-800">
                                <li className="py-1.5"><Link to="/shop?category=cafe-restaurant&sub=cafe-chairs" className="hover:text-primary block text-sm">Cafe Chairs</Link></li>
                                <li className="py-1.5"><Link to="/shop?category=cafe-restaurant&sub=cafe-tables" className="hover:text-primary block text-sm">Cafe Tables</Link></li>
                                <li className="py-1.5"><Link to="/shop?category=cafe-restaurant&sub=sofa-seatings" className="hover:text-primary block text-sm">Sofa Seatings</Link></li>
                                <li className="py-1.5"><Link to="/shop?category=cafe-restaurant&sub=reception-counters" className="hover:text-primary block text-sm">Reception Counters</Link></li>
                                <li className="py-1.5"><Link to="/shop?category=cafe-restaurant&sub=bar-stools" className="hover:text-primary block text-sm">Bar Stools</Link></li>
                            </ul>
                        </li>

                        {/* Gaming & Study */}
                        <li className="relative group">
                            <Link to="/shop?category=gaming-zone" className="flex items-center gap-1">
                                Gaming & Study <span></span>
                            </Link>
                            <ul className="sub-menu lg:absolute z-50 lg:top-full lg:left-0 lg:min-w-[220px] lg:invisible lg:group-hover:visible lg:opacity-0 lg:group-hover:opacity-100 lg:transition-all lg:bg-white lg:dark:bg-title lg:py-[15px] lg:px-[20px] shadow-lg border border-gray-100 dark:border-gray-800">
                                <li className="py-1.5 font-semibold text-primary text-xs uppercase tracking-wider">Gaming Zone</li>
                                <li className="py-1.5"><Link to="/shop?category=gaming-zone&sub=gaming-tables" className="hover:text-primary block text-sm">Gaming Tables</Link></li>
                                <li className="py-1.5"><Link to="/shop?category=gaming-zone&sub=gaming-chairs" className="hover:text-primary block text-sm">Gaming Chairs</Link></li>
                                <li className="py-1.5 mt-2 font-semibold text-primary text-xs uppercase tracking-wider border-t border-gray-100 dark:border-gray-700 pt-2">Study Corner</li>
                                <li className="py-1.5"><Link to="/shop?category=study-corner&sub=study-tables" className="hover:text-primary block text-sm">Study Tables</Link></li>
                                <li className="py-1.5"><Link to="/shop?category=study-corner&sub=study-chairs" className="hover:text-primary block text-sm">Study Chairs</Link></li>
                            </ul>
                        </li>

                        {/* Dining */}
                        <li className="relative group">
                            <Link to="/shop?category=dining" className="flex items-center gap-1">
                                Dining <span></span>
                            </Link>
                            <ul className="sub-menu lg:absolute z-50 lg:top-full lg:left-0 lg:min-w-[200px] lg:invisible lg:group-hover:visible lg:opacity-0 lg:group-hover:opacity-100 lg:transition-all lg:bg-white lg:dark:bg-title lg:py-[15px] lg:px-[20px] shadow-lg border border-gray-100 dark:border-gray-800">
                                <li className="py-1.5"><Link to="/shop?category=dining&sub=dining-tables" className="hover:text-primary block text-sm">Dining Tables</Link></li>
                                <li className="py-1.5"><Link to="/shop?category=dining&sub=dining-chairs" className="hover:text-primary block text-sm">Dining Chairs</Link></li>
                            </ul>
                        </li>

                        {/* Outdoor Furniture & Decor */}
                        <li className="relative group">
                            <Link to="/shop?category=outdoor-furniture" className="flex items-center gap-1">
                                Outdoor & Decor <span></span>
                            </Link>
                            <ul className="sub-menu lg:absolute z-50 lg:top-full lg:left-0 lg:min-w-[240px] lg:invisible lg:group-hover:visible lg:opacity-0 lg:group-hover:opacity-100 lg:transition-all lg:bg-white lg:dark:bg-title lg:py-[15px] lg:px-[20px] shadow-lg border border-gray-100 dark:border-gray-800">
                                <li className="py-1.5 font-semibold text-primary text-xs uppercase tracking-wider">Outdoor Furniture</li>
                                <li className="py-1.5"><Link to="/shop?category=outdoor-furniture" className="hover:text-primary block text-sm">Outdoor Tables & Chairs</Link></li>
                                <li className="py-1.5 mt-2 font-semibold text-primary text-xs uppercase tracking-wider border-t border-gray-100 dark:border-gray-700 pt-2">Decor & Accents</li>
                                <li className="py-1.5"><Link to="/shop?category=outdoor-furniture&sub=console-tables" className="hover:text-primary block text-sm">Console Tables</Link></li>
                                <li className="py-1.5"><Link to="/shop?category=outdoor-furniture&sub=lamps" className="hover:text-primary block text-sm">Lamps</Link></li>
                                <li className="py-1.5"><Link to="/shop?category=outdoor-furniture&sub=wall-shelves" className="hover:text-primary block text-sm">Wall Shelves</Link></li>
                                <li className="py-1.5"><Link to="/shop?category=outdoor-furniture&sub=coat-hangers" className="hover:text-primary block text-sm">Coat Hangers</Link></li>
                                <li className="py-1.5"><Link to="/shop?category=outdoor-furniture&sub=table-matts" className="hover:text-primary block text-sm">Table Mats & Accessories</Link></li>
                            </ul>
                        </li>

                        <li className={`${current === '/shop' ? 'active text-primary' : ''}`}>
                            <Link to="/shop">Shop All</Link>
                        </li>

                        <li className={`${current === '/contact' ? 'active text-primary' : ''}`}>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                <NavMenu toggle={toggle} setToggle={setToggle}/>
            </div>
        </div>
    </div>
  )
}
