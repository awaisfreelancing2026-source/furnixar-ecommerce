import { Link } from 'react-router-dom'

import bg from '../../assets/img/bg/footer.jpg'

import logoLight from '../../assets/img/svg/logo-light.svg'

import { footerLink1, footerLink2, footerLink3, footerLink4 } from '../../data/nav-data'
import { FaFacebookF, FaHeart, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function FooterOne() {
  return (
        <div className="relative bg-overlay before:bg-title before:bg-opacity-95" style={{backgroundImage:`url(${bg})`}}>
            <div className="s-pt-100">
                <div className="container-fluid">
                    <div className="max-w-lg lg:max-w-[1052px] mx-auto flex items-end justify-between gap-3 lg:gap-8 flex-col lg:flex-row s-pb-100">
                        <div className="md:max-w-[473px] w-full">
                            <h2 className="font-bold leading-none text-white">Newsletter</h2>
                            <p className="mt-2 sm:mt-4 text-white-light">Stay in the loop with exclusive offers and updates. Subscribe to our newsletter for the latest trends and promotions delivered straight to your inbox. </p>
                        </div>
                        <div className="mt-4 lg:mt-6 sm:flex md:max-w-[478px] w-full">
                            <input className="w-full h-12 md:h-14 bg-white bg-opacity-[0.03] border border-white text-white placeholder:text-white-light border-opacity-30 focus:border-primary p-4 outline-none sm:flex-1 sm:border-r-0 duration-300" type="text" placeholder="Enter your email address"/>
                            <button className="w-full h-12 bg-primary text-white flex items-center justify-center text-base md:text-lg font-medium p-3 mt-3 sm:mt-0 sm:w-32 sm:h-auto sm:flex-none">Subscribe</button>
                        </div>
                    </div>

                    <div className="max-w-[1722px] mx-auto flex items-start justify-between gap-10 s-pb-100 flex-wrap lg:flex-nowrap footer-wrapper">

                        <div className="lg:max-w-[366px] sm:w-[45%] lg:w-full flex items-start justify-between gap-10 footer-inner-wrapper">
                            <div>
                                <h4 className="text-white leading-none mb-5 md:mb-6 text-xl md:text-2xl">Sitemap</h4>
                                <ul className="text-white leading-none flex flex-col gap-4">
                                    {footerLink1.map((item,index)=>{
                                        return(
                                            <li className="duration-100 hover:text-primary inline-block group" key={index}><Link className="text-underline-primary" to={item.link}>{item.name}</Link></li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white leading-none mb-5 md:mb-6 text-xl md:text-2xl">Others</h4>
                                <ul className="text-white leading-none flex flex-col gap-4">
                                    {footerLink2.map((item,index)=>{
                                        return(
                                            <li className="duration-100 hover:text-primary inline-block group" key={index}><Link className="text-underline-primary" to={item.link}>{item.name}</Link></li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>

                        <div className="lg:max-w-[522px] w-full sm:text-center -order-1 lg:order-none">
                            <Link to="/" className="inline-block sm:mx-auto">
                                <span className="text-2xl sm:text-3xl font-bold tracking-wider text-white uppercase">
                                    Makkah <span className="text-primary font-normal">Furniture</span>
                                </span>
                            </Link>
                            <p className="mt-4 text-white-light max-w-[522px] sm:mx-auto text-sm sm:text-base leading-relaxed">
                                Makkah Furniture is Pakistan's trusted provider of executive office workstations, luxury dining sets, cafe seating, gaming zone ergonomics, and outdoor decor. Nationwide Cash on Delivery (COD) across Karachi, Lahore, Islamabad, and all major cities.
                            </p>
                            <div className="mt-4 flex items-center sm:justify-center gap-4 text-sm flex-wrap">
                                <a href="tel:03311323017" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                                    <span className="bg-primary/20 text-primary p-1.5 rounded-full">📞</span>
                                    <span className="font-semibold text-base">0331-1323017</span>
                                </a>
                                <span className="text-white/40">|</span>
                                <a 
                                    href="https://wa.me/923311323017?text=Hello%20Makkah%20Furniture" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex items-center gap-2 text-[#25D366] hover:underline font-medium text-base"
                                >
                                    <span>💬</span> WhatsApp Orders
                                </a>
                            </div>
                            <div className="flex items-center sm:justify-center gap-4 mt-6">
                                <Link to="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white border-opacity-50 flex items-center justify-center group hover:border-primary duration-300">
                                    <FaFacebookF className=" text-white text-opacity-70 group-hover:text-primary duration-300 group-hover:text-opacity-100"/>
                                </Link>
                                <Link to="#" aria-label="Twitter" className="w-10 h-10 rounded-full border border-white border-opacity-50 flex items-center justify-center group hover:border-primary duration-300">
                                    <FaTwitter className=" text-white text-opacity-70 group-hover:text-primary duration-300 group-hover:text-opacity-100"/>
                                </Link>
                                <Link to="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white border-opacity-50 flex items-center justify-center group hover:border-primary duration-300">
                                    <FaInstagram className=" text-white text-opacity-70 group-hover:text-primary duration-300 group-hover:text-opacity-100"/>
                                </Link>
                                <Link to="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white border-opacity-50 flex items-center justify-center group hover:border-primary duration-300">
                                    <FaLinkedin className=" text-white text-opacity-70 group-hover:text-primary duration-300 group-hover:text-opacity-100"/>
                                </Link>
                            </div>
                        </div>

                        <div className="lg:max-w-[460px] sm:w-[45%] lg:w-full flex items-start justify-between gap-10 footer-inner-wrapper">
                            <div>
                                <h4 className="text-white leading-none mb-5 md:mb-6 text-xl md:text-2xl">Shop</h4>
                                <ul className="text-white leading-none flex flex-col gap-4">
                                    {footerLink3.map((item,index)=>{
                                        return(
                                            <li className="duration-100 hover:text-primary inline-block group" key={index}><Link className="text-underline-primary" to={item.link}>{item.name}</Link></li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white leading-none mb-5 md:mb-6 text-xl md:text-2xl">Customer Service</h4>
                                <ul className="text-white leading-none flex flex-col gap-4">
                                    {footerLink4.map((item,index)=>{
                                        return(
                                            <li className="duration-100 hover:text-primary inline-block group" key={index}><Link className="text-underline-primary" to={item.link}>{item.name}</Link></li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[1722px] mx-auto border-t border-white border-opacity-10 py-5 md:py-7 text-center">
                        <p className="text-white-light inline-flex align-middle text-sm sm:text-base">
                            © {new Date().getFullYear()} Makkah Furniture Pakistan. All Rights Reserved. Nationwide Cash on Delivery (COD).
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}
