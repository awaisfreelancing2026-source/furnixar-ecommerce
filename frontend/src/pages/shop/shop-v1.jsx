import { useEffect, useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";

import NavbarOne from "../../components/navbar/navbar-one";
import LayoutOne from "../../components/product/layout-one";
import FooterOne from "../../components/footer/footer-one";
import ScrollToTop from "../../components/scroll-to-top";

import bg from '../../assets/img/shortcode/breadcumb.jpg'
import { productList, makkahCategories } from "../../data/data";

import Aos from "aos";
import { LuX, LuFilter } from "react-icons/lu";

export default function ShopV1() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [maxPrice, setMaxPrice] = useState(250000);
    const [sortBy, setSortBy] = useState("default");

    const categoryParam = searchParams.get("category") || "all";
    const subParam = searchParams.get("sub") || "all";
    const searchParam = searchParams.get("search") || "";

    useEffect(()=>{
        Aos.init();
        window.scrollTo(0, 0);
    }, [categoryParam, subParam, searchParam]);

    // Active Category Object
    const activeCategoryObj = useMemo(() => {
        if (categoryParam === "all") return null;
        return makkahCategories.find(c => c.slug.toLowerCase() === categoryParam.toLowerCase());
    }, [categoryParam]);

    const handleCategorySelect = (slug) => {
        if (slug === "all") {
            searchParams.delete("category");
            searchParams.delete("sub");
        } else {
            searchParams.set("category", slug);
            searchParams.delete("sub"); // reset subcategory on new category select
        }
        setSearchParams(searchParams);
    };

    const handleSubCategorySelect = (subName) => {
        if (subName === "all") {
            searchParams.delete("sub");
        } else {
            // Slugify subcategory
            const slug = subName.toLowerCase().replace(/[^a-z0-9]/g, '-');
            searchParams.set("sub", slug);
        }
        setSearchParams(searchParams);
    };

    const clearSearch = () => {
        searchParams.delete("search");
        setSearchParams(searchParams);
    };

    const clearAllFilters = () => {
        searchParams.delete("category");
        searchParams.delete("sub");
        searchParams.delete("search");
        setMaxPrice(250000);
        setSortBy("default");
        setSearchParams(searchParams);
    };

    // Filter and sort products
    const filteredProducts = useMemo(() => {
        return productList.filter((item) => {
            // 1. Text Search Filter
            if (searchParam.trim()) {
                const q = searchParam.toLowerCase();
                const matchName = (item.name || "").toLowerCase().includes(q);
                const matchCat = (item.category || "").toLowerCase().includes(q);
                const matchSub = (item.subCategory || "").toLowerCase().includes(q);
                if (!matchName && !matchCat && !matchSub) return false;
            }

            // 2. Category Match Check
            if (categoryParam !== "all") {
                const itemCat = (item.category || "").toLowerCase().replace(/[^a-z0-9]/g, '');
                const targetSlug = categoryParam.toLowerCase().replace(/[^a-z0-9]/g, '');
                const isMatch = itemCat.includes(targetSlug) || targetSlug.includes(itemCat);
                if (!isMatch) return false;
            }

            // 3. Subcategory Match Check
            if (subParam !== "all") {
                const itemSub = (item.subCategory || "").toLowerCase().replace(/[^a-z0-9]/g, '');
                const targetSub = subParam.toLowerCase().replace(/[^a-z0-9]/g, '');
                const isSubMatch = itemSub.includes(targetSub) || targetSub.includes(itemSub);
                if (!isSubMatch) return false;
            }

            // 4. Price Filter
            const numericPrice = item.numericPrice || parseInt(String(item.price).replace(/[^0-9]/g, '')) || 0;
            if (numericPrice > maxPrice) return false;

            return true;
        }).sort((a, b) => {
            const priceA = a.numericPrice || parseInt(String(a.price).replace(/[^0-9]/g, '')) || 0;
            const priceB = b.numericPrice || parseInt(String(b.price).replace(/[^0-9]/g, '')) || 0;
            if (sortBy === "price-low") return priceA - priceB;
            if (sortBy === "price-high") return priceB - priceA;
            return 0;
        });
    }, [categoryParam, subParam, searchParam, maxPrice, sortBy]);

  return (
    <>
        <NavbarOne/>   

        <div className="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
            <div className="text-center w-full">
                <h1 className="text-white text-3xl md:text-[40px] font-bold leading-none text-center">
                    Makkah Furniture Catalog
                </h1>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">Shop Collections</li>
                </ul>
            </div>
        </div>

        <div className="s-py-100">
            <div className="container-fluid">
                {/* Active Search Banner */}
                {searchParam && (
                    <div className="max-w-[1720px] mx-auto mb-6 p-4 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-between flex-wrap gap-3">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-title dark:text-white">Search Results for:</span>
                            <span className="text-sm font-bold text-primary italic">"{searchParam}"</span>
                        </div>
                        <button 
                            type="button" 
                            onClick={clearSearch}
                            className="flex items-center gap-1.5 text-xs bg-white dark:bg-dark-secondary text-title dark:text-white px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 hover:text-red-500 transition-colors"
                        >
                            <LuX className="size-3.5" /> Clear Search
                        </button>
                    </div>
                )}

                {/* Primary Category & Price Filter Bar */}
                <div className="flex items-start justify-between gap-8 max-w-[1720px] mx-auto flex-col lg:flex-row border-b border-bdr-clr dark:border-bdr-clr-drk pb-6 md:pb-[30px]" data-aos="fade-up" data-aos-delay="100">
                    <div>
                        <h4 className="font-semibold leading-none text-xl sm:text-2xl mb-4 text-title dark:text-white flex items-center gap-2">
                            <LuFilter className="text-primary size-5" /> Browse Main Categories
                        </h4>
                        <div className="flex flex-wrap gap-2 sm:gap-2.5">
                            <button
                                type="button"
                                onClick={() => handleCategorySelect("all")}
                                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                                    categoryParam === "all"
                                        ? "bg-primary text-white border-primary shadow-sm"
                                        : "bg-snow dark:bg-dark-secondary text-title dark:text-white border-gray-200 dark:border-gray-700 hover:border-primary"
                                }`}
                            >
                                All Collections
                            </button>

                            {makkahCategories.map((cat, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => handleCategorySelect(cat.slug)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                                        categoryParam === cat.slug
                                            ? "bg-primary text-white border-primary shadow-sm"
                                            : "bg-snow dark:bg-dark-secondary text-title dark:text-white border-gray-200 dark:border-gray-700 hover:border-primary"
                                    }`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="max-w-[562px] w-full grid sm:grid-cols-2 gap-6 items-end">
                        {/* PKR Max Price Filter */}
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="font-semibold text-sm sm:text-base text-title dark:text-white">
                                    Budget Limit (PKR)
                                </h4>
                                <span className="text-primary font-bold text-sm">
                                    Rs. {maxPrice.toLocaleString()}
                                </span>
                            </div>
                            <input 
                                type="range" 
                                min="10000" 
                                max="250000" 
                                step="5000"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(Number(e.target.value))}
                                className="w-full accent-primary cursor-pointer"
                            />
                        </div>

                        {/* Sort Filter */}
                        <div>
                            <h4 className="font-semibold text-sm sm:text-base text-title dark:text-white mb-2">
                                Sort By
                            </h4>
                            <select 
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full h-11 px-3 bg-snow dark:bg-dark-secondary border border-gray-200 dark:border-gray-700 rounded text-title dark:text-white text-sm outline-none focus:border-primary"
                            >
                                <option value="default">Featured / Recommended</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Secondary Subcategory Pill Bar (Interwood.pk Style) */}
                {activeCategoryObj && activeCategoryObj.subcategories && (
                    <div className="max-w-[1720px] mx-auto py-5 border-b border-bdr-clr dark:border-bdr-clr-drk">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs uppercase font-bold tracking-wider text-primary">
                                {activeCategoryObj.name} Subcategories:
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <button
                                type="button"
                                onClick={() => handleSubCategorySelect("all")}
                                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wide transition-all ${
                                    subParam === "all"
                                        ? "bg-title dark:bg-white text-white dark:text-title"
                                        : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200"
                                }`}
                            >
                                All {activeCategoryObj.name}
                            </button>

                            {activeCategoryObj.subcategories.map((sub, idx) => {
                                const subSlug = sub.toLowerCase().replace(/[^a-z0-9]/g, '-');
                                const isActive = subParam === subSlug;
                                return (
                                    <button
                                        key={idx}
                                        type="button"
                                        onClick={() => handleSubCategorySelect(sub)}
                                        className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wide transition-all ${
                                            isActive
                                                ? "bg-primary text-white shadow-sm"
                                                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200"
                                        }`}
                                    >
                                        {sub}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Showing Products Count & Clear Filters */}
                <div className="max-w-[1720px] mx-auto mt-6 flex justify-between items-center text-sm text-gray-500">
                    <span>
                        Showing <strong>{filteredProducts.length}</strong> items in{' '}
                        <strong className="capitalize text-primary">
                            {categoryParam === 'all' ? 'All Collections' : categoryParam.replace('-', ' ')}
                        </strong>
                        {subParam !== 'all' && (
                            <span className="ml-1 text-gray-700 dark:text-gray-300 font-medium">
                                › {subParam.replace(/-/g, ' ')}
                            </span>
                        )}
                    </span>
                    {(categoryParam !== 'all' || subParam !== 'all' || searchParam) && (
                        <button 
                            type="button" 
                            onClick={clearAllFilters} 
                            className="text-primary hover:underline text-xs font-medium"
                        >
                            Reset All Filters
                        </button>
                    )}
                </div>

                {/* Product Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="max-w-[1720px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-8 pt-6 md:pt-[24px]" data-aos="fade-up" data-aos-delay="200">
                        {filteredProducts.map((item, index)=>{
                            return(
                                <LayoutOne item={item} key={item.id || index}/>
                            )
                        })}
                    </div>
                ) : (
                    <div className="max-w-md mx-auto text-center py-20">
                        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                            🔍
                        </div>
                        <p className="text-xl font-semibold text-title dark:text-white mb-2">No furniture items matched your filter.</p>
                        <p className="text-sm text-gray-500 mb-6">Try broadening your price range or selecting another category.</p>
                        <button 
                            type="button" 
                            onClick={clearAllFilters} 
                            className="btn btn-theme-solid px-6 py-2.5"
                        >
                            <span>Reset All Filters</span>
                        </button>
                    </div>
                )}
            </div>
        </div>

        <FooterOne/>
        <ScrollToTop/>
    </>
  )
}
