import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaPhoneAlt, FaTruck, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

import NavbarOne from "../../components/navbar/navbar-one";
import FooterOne from "../../components/footer/footer-one";
import ScrollToTop from "../../components/scroll-to-top";

import bg from '../../assets/img/shortcode/breadcumb.jpg'
import contactImg from '../../assets/img/thumb/contact-thumb.jpg'
import about from '../../assets/img/svg/about.svg'

import Aos from "aos";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'Office Furniture Bulk Order',
        message: ''
    });

    useEffect(()=>{
        Aos.init();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

  return (
    <>
        <NavbarOne/>

        <div className="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
            <div className="text-center w-full">
                <h2 className="text-white text-3xl md:text-[40px] font-semibold leading-none text-center">Contact Makkah Furniture</h2>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">Contact Us</li>
                </ul>
            </div>
        </div>

        <div className="s-pb-100 s-pt-100">
            <div className="container-fluid">
                <div className="max-w-[1720px] mx-auto flex justify-between gap-8 flex-col lg:flex-row">
                    <div className="max-w-[894px] w-full hidden lg:block" data-aos="zoom-in">
                        <img className="w-full rounded-2xl shadow-sm" src={contactImg} alt="Makkah Furniture Showroom"/>
                        
                        {/* Direct Contact & Support Details */}
                        <div className="grid sm:grid-cols-2 gap-4 mt-6">
                            <div className="p-5 bg-snow dark:bg-dark-secondary rounded-xl border border-gray-200 dark:border-gray-800">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="p-2.5 bg-primary/10 text-primary rounded-lg">
                                        <FaPhoneAlt className="size-5" />
                                    </span>
                                    <div>
                                        <h5 className="font-semibold text-title dark:text-white leading-none">Phone & Helpline</h5>
                                        <a href="tel:03311323017" className="text-primary font-bold text-lg hover:underline block mt-1">
                                            0331-1323017
                                        </a>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Available Mon-Sat: 9:00 AM - 9:00 PM</p>
                            </div>

                            <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="p-2.5 bg-[#25D366]/20 text-[#25D366] rounded-lg">
                                        <FaWhatsapp className="size-6" />
                                    </span>
                                    <div>
                                        <h5 className="font-semibold text-emerald-900 dark:text-emerald-300 leading-none">WhatsApp Order Desk</h5>
                                        <a 
                                            href="https://wa.me/923311323017?text=Hello%20Makkah%20Furniture%2C%20I%20have%20an%20inquiry" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-[#25D366] font-bold text-lg hover:underline block mt-1"
                                        >
                                            Chat on WhatsApp
                                        </a>
                                    </div>
                                </div>
                                <p className="text-xs text-emerald-700 dark:text-emerald-400">Instant quotes & custom catalog requests</p>
                            </div>

                            <div className="p-5 bg-snow dark:bg-dark-secondary rounded-xl border border-gray-200 dark:border-gray-800">
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="p-2.5 bg-amber-500/10 text-amber-600 rounded-lg">
                                        <FaTruck className="size-5" />
                                    </span>
                                    <h5 className="font-semibold text-title dark:text-white leading-none">Cash on Delivery (COD)</h5>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Delivering safely nationwide across all Pakistani cities</p>
                            </div>

                            <div className="p-5 bg-snow dark:bg-dark-secondary rounded-xl border border-gray-200 dark:border-gray-800">
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="p-2.5 bg-blue-500/10 text-blue-600 rounded-lg">
                                        <FaMapMarkerAlt className="size-5" />
                                    </span>
                                    <h5 className="font-semibold text-title dark:text-white leading-none">Main Showroom</h5>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Commercial Furniture Hub, Lahore, Pakistan</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[725px] w-full mx-auto lg:mx-0">
                        <div data-aos="fade-up">
                            <img src={about} className="size-16" alt="" />
                            <h3 className="leading-none font-bold mt-3 md:mt-6 text-2xl md:text-3xl text-title dark:text-white">Get in Touch with Our Team</h3>
                            <p className="max-w-[500px] mt-3 md:mt-4 font-normal text-gray-600 dark:text-gray-300">
                                Looking for custom executive desks, bulk workstations, or cafe furniture? Reach out to our design consultants today.
                            </p>
                        </div>
                        <div className="mt-8" data-aos="fade-up" data-aos-delay="100">
                            {submitted ? (
                                <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-700 p-8 rounded-xl text-center">
                                    <h4 className="text-2xl font-bold text-emerald-800 dark:text-emerald-300 mb-2">Message Received!</h4>
                                    <p className="text-emerald-700 dark:text-emerald-400 text-base mb-5">
                                        Thank you, <strong>{formData.name}</strong>. A Makkah Furniture corporate representative will reach out to you shortly via phone or email.
                                    </p>
                                    <button 
                                        onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: 'Office Furniture Bulk Order', message: '' }); }}
                                        className="btn btn-theme-solid px-6 py-2.5 text-sm"
                                    >
                                        <span>Send Another Message</span>
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                                        <div>
                                            <label className="text-base text-title dark:text-white font-medium mb-2.5 block">Full Name *</label>
                                            <input 
                                                name="name" 
                                                required 
                                                value={formData.name} 
                                                onChange={handleChange} 
                                                className="w-full h-12 md:h-14 bg-snow dark:bg-dark-secondary border border-[#E3E5E6] dark:border-gray-700 text-title dark:text-white focus:border-primary p-4 outline-none duration-300 rounded" 
                                                type="text" 
                                                placeholder="e.g. Tariq Mehmood"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-base text-title dark:text-white font-medium mb-2.5 block">Email Address *</label>
                                            <input 
                                                name="email" 
                                                required 
                                                value={formData.email} 
                                                onChange={handleChange} 
                                                className="w-full h-12 md:h-14 bg-snow dark:bg-dark-secondary border border-[#E3E5E6] dark:border-gray-700 text-title dark:text-white focus:border-primary p-4 outline-none duration-300 rounded" 
                                                type="email" 
                                                placeholder="tariq@company.pk"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-base text-title dark:text-white font-medium mb-2.5 block">Phone Number *</label>
                                            <input 
                                                name="phone" 
                                                required 
                                                value={formData.phone} 
                                                onChange={handleChange} 
                                                className="w-full h-12 md:h-14 bg-snow dark:bg-dark-secondary border border-[#E3E5E6] dark:border-gray-700 text-title dark:text-white focus:border-primary p-4 outline-none duration-300 rounded" 
                                                type="tel" 
                                                placeholder="0300 1234567"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-base text-title dark:text-white font-medium mb-2.5 block">Inquiry Type</label>
                                            <select 
                                                name="subject" 
                                                value={formData.subject} 
                                                onChange={handleChange} 
                                                className="w-full h-12 md:h-14 bg-snow dark:bg-dark-secondary border border-[#E3E5E6] dark:border-gray-700 text-title dark:text-white focus:border-primary p-4 outline-none duration-300 rounded"
                                            > 
                                                <option value="Office Furniture Bulk Order">Office Furniture Bulk Order</option>
                                                <option value="Custom Executive Desks & Workstations">Custom Executive Desks & Workstations</option>
                                                <option value="Cafe & Restaurant Seating Solution">Cafe & Restaurant Seating Solution</option>
                                                <option value="Outdoor Furniture Inquiry">Outdoor Furniture Inquiry</option>
                                                <option value="Cash on Delivery Order Tracking">Cash on Delivery Order Tracking</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <label className="text-base text-title dark:text-white font-medium mb-2.5 block">Your Message *</label>
                                        <textarea 
                                            name="message" 
                                            required 
                                            value={formData.message} 
                                            onChange={handleChange} 
                                            className="w-full h-28 md:h-[150px] bg-snow dark:bg-dark-secondary border border-[#E3E5E6] dark:border-gray-700 text-title dark:text-white focus:border-primary p-4 outline-none duration-300 rounded" 
                                            placeholder="Please describe your furniture requirements or questions..."
                                        />
                                    </div>
                                    <div className="mt-6">
                                        <button type="submit" className="btn btn-theme-solid px-8 py-3.5 text-base">
                                            <span>Send Inquiry</span>
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    <div className="s-pb-100" data-aos="fade-up">
        <div className="container-fluid">
            <div className="max-w-[1720px] mx-auto rounded-2xl overflow-hidden shadow-sm">
                <iframe 
                    title="Makkah Furniture Location"
                    className="w-full h-[350px] md:h-[450px]" 
                    src="https://maps.google.com/maps?q=Lahore,Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                    style={{border:'0'}}
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    </div>

    <FooterOne/>
    <ScrollToTop/>
    </>
  )
}
