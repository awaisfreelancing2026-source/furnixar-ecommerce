import { useState } from 'react'
import { GoStarFill } from 'react-icons/go'
import { FaShieldAlt, FaTruck, FaTools, FaCheckCircle } from 'react-icons/fa'

export default function DetailTab({ product }) {
    const [activeTab, setActiveTab] = useState(1);

    const specs = [
        { label: "Product Dimensions", value: product?.dimensions || "Standard Commercial Sizing" },
        { label: "Material Composition", value: product?.material || "Commercial Grade HPL / Solid Hardwood Trim" },
        { label: "Wood Seasoning", value: "Kiln-Dried with Anti-Termite & Moisture Treatment" },
        { label: "Hardware & Fittings", value: "Heavy-Duty Soft-Close Hinges & German Gaslift Cylinders" },
        { label: "Standard Warranty", value: product?.warranty || "1-Year Structural & Hardware Warranty" },
        { label: "Payment Mode", value: "Strictly Cash on Delivery (COD) - Pay After Inspection" },
    ];

    const customerReviews = [
        {
            name: "Tariq Mehmood",
            city: "Gulberg, Lahore",
            rating: 5,
            date: "Verified Corporate Buyer • 2 weeks ago",
            review: "Ordered modular workstations and an executive desk for our software house. Build quality matches Interwood standards at almost half the market quotation. Everything arrived safely and was assembled cleanly."
        },
        {
            name: "Dr. Sadia Khan",
            city: "F-10, Islamabad",
            rating: 5,
            date: "Verified Residential Buyer • 1 month ago",
            review: "The solid Sheesham wood finish is magnificent. Heavy, sturdy, and exceptionally polished. The rider allowed us to inspect the pieces before taking payment. Highly recommended!"
        },
        {
            name: "Farhan Siddiqui",
            city: "DHA Phase 6, Karachi",
            rating: 5,
            date: "Verified Commercial Buyer • 3 weeks ago",
            review: "We purchased cafe seating and bar stools for our restaurant. The steel frames are powder-coated properly with zero wobbles. Support via WhatsApp 0331-1323017 was very responsive."
        }
    ];

  return (
    <div className="max-w-[1080px] mx-auto">
        <div className="product-dtls-navtab border-y border-bdr-clr dark:border-bdr-clr-drk">
            <ul id="user-nav-tabs" className="text-title dark:text-white text-base sm:text-lg font-medium flex leading-none gap-4 sm:gap-8 md:gap-14 justify-between sm:justify-start overflow-x-auto pb-1">
                <li className={`py-4 sm:py-5 relative cursor-pointer border-b-2 transition-colors ${activeTab === 1 ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-title dark:hover:text-white'}`} onClick={()=>setActiveTab(1)}>
                    Specifications & Dimensions
                </li>
                <li className={`py-4 sm:py-5 relative cursor-pointer border-b-2 transition-colors ${activeTab === 2 ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-title dark:hover:text-white'}`} onClick={()=>setActiveTab(2)}>
                    Craftsmanship & Quality
                </li>
                <li className={`py-4 sm:py-5 relative cursor-pointer border-b-2 transition-colors ${activeTab === 3 ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-title dark:hover:text-white'}`} onClick={()=>setActiveTab(3)}>
                    Verified Customer Reviews (3)
                </li>
                <li className={`py-4 sm:py-5 relative cursor-pointer border-b-2 transition-colors ${activeTab === 4 ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-title dark:hover:text-white'}`} onClick={()=>setActiveTab(4)}>
                    Nationwide Delivery & COD
                </li>
            </ul>
        </div>

        <div id="content" className="mt-6 sm:mt-10">
            {/* Tab 1: Technical Specs */}
            {activeTab === 1 && (
                <div className="space-y-6">
                    <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                        Every piece from <strong>Makkah Furniture</strong> is precision-engineered using industrial-grade CNC joinery, scratch-resistant coatings, and heavy-gauge hardware engineered to endure intense daily use in corporate offices, bustling cafes, and modern residences.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 bg-snow dark:bg-dark-secondary p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                        {specs.map((item, idx) => (
                            <div key={idx} className="border-b border-gray-200/60 dark:border-gray-700/60 pb-3">
                                <span className="text-xs uppercase tracking-wider font-semibold text-gray-400 block mb-1">
                                    {item.label}
                                </span>
                                <span className="text-sm sm:text-base font-medium text-title dark:text-white">
                                    {item.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Tab 2: Craftsmanship */}
            {activeTab === 2 && (
                <div className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-5 bg-white dark:bg-dark-secondary rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                                <FaTools className="size-6" />
                            </div>
                            <h4 className="font-semibold text-lg text-title dark:text-white mb-2">High-Pressure Lamination</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                Scratch-proof, heat-resistant, and spill-resistant surfaces edged with 2mm PVC impact-absorbing banding.
                            </p>
                        </div>
                        <div className="p-5 bg-white dark:bg-dark-secondary rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                            <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 rounded-lg flex items-center justify-center mb-4">
                                <FaShieldAlt className="size-6" />
                            </div>
                            <h4 className="font-semibold text-lg text-title dark:text-white mb-2">Seasoned Timber</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                Chemically treated and kiln-dried wood eliminating warping, termite vulnerability, and weather moisture expansion.
                            </p>
                        </div>
                        <div className="p-5 bg-white dark:bg-dark-secondary rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                            <div className="w-12 h-12 bg-blue-500/10 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                                <FaCheckCircle className="size-6" />
                            </div>
                            <h4 className="font-semibold text-lg text-title dark:text-white mb-2">Rigorous QC</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                100% pre-assembly testing at our Lahore workshop prior to protective bubble padding and boxed dispatch.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Tab 3: Customer Reviews */}
            {activeTab === 3 && (
                <div className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-6">
                        {customerReviews.map((rev, idx) => (
                            <div key={idx} className="p-6 bg-white dark:bg-dark-secondary rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col justify-between">
                                <div>
                                    <div className="flex gap-1 text-yellow-400 mb-3">
                                        {[...Array(rev.rating)].map((_, i) => (
                                            <GoStarFill key={i} className="size-4" />
                                        ))}
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed italic mb-4">
                                        "{rev.review}"
                                    </p>
                                </div>
                                <div className="border-t border-gray-100 dark:border-gray-800 pt-3">
                                    <h5 className="font-semibold text-sm text-title dark:text-white">{rev.name}</h5>
                                    <span className="text-xs text-primary font-medium">{rev.city}</span>
                                    <span className="text-[11px] text-gray-400 block mt-0.5">{rev.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Tab 4: Delivery & COD Policy */}
            {activeTab === 4 && (
                <div className="p-6 bg-snow dark:bg-dark-secondary rounded-xl border border-gray-200 dark:border-gray-800 space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-3 text-emerald-600 font-semibold text-base mb-2">
                        <FaTruck className="size-5" />
                        <span>Nationwide Doorstep Delivery with Cash on Delivery (COD)</span>
                    </div>
                    <p>
                        We deliver safely to all major cities across Punjab, Sindh, KPK, Balochistan, and Islamabad Capital Territory:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Lahore & Rawalpindi / Islamabad:</strong> Delivered within 3 – 5 business days.</li>
                        <li><strong>Karachi, Faisalabad, Multan, Sialkot, Peshawar:</strong> Delivered within 5 – 7 business days.</li>
                        <li><strong>Free Delivery:</strong> All orders totaling over <strong>Rs. 50,000</strong> qualify for free nationwide delivery.</li>
                        <li><strong>Open-Box Inspection:</strong> Customers are invited to verify furniture finishes before paying the delivery rider in cash.</li>
                    </ul>
                </div>
            )}
        </div>
    </div>
  )
}
