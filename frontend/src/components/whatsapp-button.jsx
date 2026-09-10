import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
    const [isHovered, setIsHovered] = useState(false)
    const phoneNumber = '03311323017'
    const cleanNumber = '923311323017'
    const defaultMessage = encodeURIComponent('Hello Makkah Furniture, I would like to inquire about your furniture products.')
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${defaultMessage}`

    return (
        <aside 
            aria-label="WhatsApp customer support"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Tooltip badge */}
            <div 
                className={`hidden sm:flex items-center gap-2 bg-white dark:bg-dark-secondary text-title dark:text-white px-4 py-2.5 rounded-full shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 transform ${
                    isHovered ? 'opacity-100 translate-x-0 scale-100' : 'opacity-90 translate-x-2'
                }`}
            >
                <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
                </span>
                <div className="text-left">
                    <p className="text-xs font-semibold text-title dark:text-white leading-none">Need Help? Chat on WhatsApp</p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 font-mono mt-0.5">{phoneNumber}</p>
                </div>
            </div>

            {/* Main Floating Button */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Chat with Makkah Furniture on WhatsApp at ${phoneNumber}`}
                className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
            >
                <FaWhatsapp className="size-8" />
                <span className="sr-only">Chat with Makkah Furniture on WhatsApp at {phoneNumber}</span>
                {/* Pulse Ring */}
                <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-pulse -z-10"></span>
            </a>
        </aside>
    )
}
