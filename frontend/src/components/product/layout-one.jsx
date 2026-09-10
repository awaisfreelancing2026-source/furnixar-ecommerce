import { GoStarFill } from 'react-icons/go'
import { LuEye, LuHeart } from 'react-icons/lu'
import { FaHeart } from 'react-icons/fa'
import { RiShoppingBag2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useWishlist } from '../../context/WishlistContext'
import { useCart } from '../../context/CartContext'

export default function LayoutOne({ item }) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  const inWishlist = isInWishlist(item.id);

  return (
        <div className="group">
            <div className="relative overflow-hidden rounded-lg">
                <Link to={`/product-details/${item.id}`}>
                    <img className="w-full transform group-hover:scale-110 duration-300" src={item.image} alt={item.name || "shop"}/>
                </Link>
                {item.tag === 'Hot Sale' &&
                    <div className="absolute z-10 top-7 left-7 pt-[10px] pb-2 px-3 bg-[#1CB28E] rounded-[30px] font-primary text-[14px] text-white font-semibold leading-none">
                        Hot Sale
                    </div>
                }
                {item.tag === 'NEW' &&
                    <div className="absolute z-10 top-7 left-7 pt-[10px] pb-2 px-3 bg-[#9739E1] rounded-[30px] font-primary text-[14px] text-white font-semibold leading-none">
                        NEW
                    </div>
                }
                {item.tag === '10% OFF' &&
                    <div className="absolute z-10 top-7 left-7 pt-[10px] pb-2 px-3 bg-[#E13939] rounded-[30px] font-primary text-[14px] text-white font-semibold leading-none">
                        10% OFF
                    </div>
                }
                <div className="absolute z-10 top-[25%] right-3 opacity-0 duration-300 transition-all group-hover:opacity-100 flex flex-col items-end gap-3">
                    <button 
                        onClick={() => toggleWishlist(item)}
                        className={`bg-white dark:bg-title flex items-center justify-center gap-2 px-4 py-[10px] text-base leading-none rounded-[40px] h-14 overflow-hidden new-product-icon shadow-md hover:bg-primary hover:text-white transition-colors ${inWishlist ? 'text-red-500' : 'text-title dark:text-white'}`}
                        title={inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                    >
                        {inWishlist ? <FaHeart className="text-red-500 h-[20px] w-[20px]"/> : <LuHeart className="h-[22px] w-[20px]"/>}                                                                      
                        <span className="mt-1 text-xs font-medium">{inWishlist ? "Saved" : "Wishlist"}</span>
                    </button>
                    <button 
                        onClick={() => addToCart(item)}
                        className="bg-white dark:bg-title dark:text-white text-title flex items-center justify-center gap-2 px-4 py-[10px] text-base leading-none rounded-[40px] h-14 overflow-hidden new-product-icon shadow-md hover:bg-primary hover:text-white transition-colors"
                        title="Add to Cart"
                    >
                        <RiShoppingBag2Line className="h-[22px] w-[20px]"/>  
                        <span className="mt-1 text-xs font-medium">Add to Cart</span>
                    </button>
                </div>
            </div>
            <div className="md:px-2 lg:px-4 xl:px-6 lg:pt-6 pt-5 flex gap-4 md:gap-5 flex-col">
                <h4 className="font-medium leading-none dark:text-white text-lg">{item.price}</h4>
                <div>
                    <h5 className="font-normal dark:text-white text-xl leading-[1.5]">
                        <Link to={`/product-details/${item.id}`} className="text-underline">{item.name}</Link>
                    </h5>
                    <ul className="flex items-center gap-2 mt-1">
                        <li><GoStarFill className='text-yellow-500 size-4'/></li>
                        <li><GoStarFill className='text-yellow-500 size-4'/></li>
                        <li><GoStarFill className='text-yellow-500 size-4'/></li>
                        <li><GoStarFill className='text-yellow-500 size-4'/></li>
                        <li><GoStarFill className='text-slate-300 size-4'/></li>
                        <li className="dark:text-gray-100">( 1,230 )</li>
                    </ul>
                </div>
            </div>
        </div>
  )
}
