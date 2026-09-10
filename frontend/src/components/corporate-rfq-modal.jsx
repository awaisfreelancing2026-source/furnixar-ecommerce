import { useState } from 'react';
import { LuX } from 'react-icons/lu';
import { FaBuilding, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';

export default function CorporateRfqModal({ isOpen, onClose, productName }) {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        phone: '',
        city: 'Lahore',
        quantity: '10+',
        notes: ''
    });

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleReset = () => {
        setSubmitted(false);
        onClose();
    };

    const whatsappRfqUrl = `https://wa.me/923311323017?text=${encodeURIComponent(
        `Hello Makkah Furniture Corporate Desk!\n\n*Bulk Quotation Request (RFQ)*\n- Company: ${formData.companyName || 'Not specified'}\n- Contact: ${formData.contactPerson || 'Buyer'}\n- Phone: ${formData.phone || '03...'}\n- City: ${formData.city}\n- Est. Quantity: ${formData.quantity}\n- Product: ${productName || 'Office / Commercial Furniture'}\n\nPlease share wholesale pricing and formal quotation.`
    )}`;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
            <div className="bg-white dark:bg-dark-secondary rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 relative border border-gray-200 dark:border-gray-800">
                <button 
                    onClick={handleReset} 
                    className="absolute top-5 right-5 text-gray-400 hover:text-title dark:hover:text-white transition-colors"
                    aria-label="Close"
                >
                    <LuX className="size-6" />
                </button>

                {submitted ? (
                    <div className="text-center py-6">
                        <FaCheckCircle className="text-5xl text-emerald-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-title dark:text-white mb-2">
                            Quotation Request Logged!
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Thank you, <strong>{formData.contactPerson || 'Sir/Madam'}</strong>. A commercial furniture specialist from Makkah Furniture will prepare your wholesale proposal and contact you shortly.
                        </p>
                        <div className="flex flex-col gap-3">
                            <a 
                                href={whatsappRfqUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors text-sm"
                            >
                                <FaWhatsapp className="size-5" />
                                <span>Forward Directly to WhatsApp (0331-1323017)</span>
                            </a>
                            <button 
                                onClick={handleReset}
                                className="btn btn-outline py-2.5 text-sm"
                            >
                                <span>Close</span>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-1">
                            <FaBuilding /> Corporate & Institutional Solutions
                        </div>
                        <h3 className="text-2xl font-bold text-title dark:text-white mb-2">
                            Request Bulk / Commercial Quote
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                            Ordering for an office, school, restaurant, or co-working space? Get tier-based wholesale pricing and customized specifications.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-title dark:text-white mb-1">Company / Organization Name *</label>
                                <input 
                                    type="text" 
                                    required 
                                    placeholder="e.g. Systems Ltd / ABC Restaurant"
                                    value={formData.companyName}
                                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                                    className="w-full h-11 px-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-snow dark:bg-title text-title dark:text-white text-sm outline-none focus:border-primary"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-title dark:text-white mb-1">Contact Person *</label>
                                    <input 
                                        type="text" 
                                        required 
                                        placeholder="Full Name"
                                        value={formData.contactPerson}
                                        onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                                        className="w-full h-11 px-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-snow dark:bg-title text-title dark:text-white text-sm outline-none focus:border-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-title dark:text-white mb-1">Phone / WhatsApp *</label>
                                    <input 
                                        type="text" 
                                        required 
                                        placeholder="03XXXXXXXXX"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                        className="w-full h-11 px-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-snow dark:bg-title text-title dark:text-white text-sm outline-none focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-title dark:text-white mb-1">Project City</label>
                                    <select 
                                        value={formData.city}
                                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                                        className="w-full h-11 px-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-snow dark:bg-title text-title dark:text-white text-sm outline-none focus:border-primary"
                                    >
                                        <option value="Lahore">Lahore</option>
                                        <option value="Karachi">Karachi</option>
                                        <option value="Islamabad">Islamabad</option>
                                        <option value="Rawalpindi">Rawalpindi</option>
                                        <option value="Faisalabad">Faisalabad</option>
                                        <option value="Multan">Multan</option>
                                        <option value="Peshawar">Peshawar</option>
                                        <option value="Other">Other City</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-title dark:text-white mb-1">Estimated Units</label>
                                    <select 
                                        value={formData.quantity}
                                        onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                                        className="w-full h-11 px-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-snow dark:bg-title text-title dark:text-white text-sm outline-none focus:border-primary"
                                    >
                                        <option value="5 - 10 Units">5 - 10 Units</option>
                                        <option value="11 - 25 Units">11 - 25 Units</option>
                                        <option value="26 - 50 Units">26 - 50 Units</option>
                                        <option value="50+ Complete Fitout">50+ Complete Fitout</option>
                                    </select>
                                </div>
                            </div>

                            <button 
                                type="submit"
                                className="w-full btn btn-theme-solid py-3 text-sm font-semibold tracking-wide mt-2"
                            >
                                <span>Submit Request for Quotation (RFQ)</span>
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}
