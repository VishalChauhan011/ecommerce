import React from 'react'
import CartItems from '../components/CartItems'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import empty1 from '../assets/empty1.jpg'
import empty2 from '../assets/empty2.avif'

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const subTotal = useMemo(() => {
    return cartItems.reduce(
        (total, val) => total + val.price, 0
    );
}, [cartItems]);

const handleContinueShopping = () => {
  window.location.href = '/';
};
    
  return (
     <div className='w-full flex-1 flex-col divide-y-2 divide-solid divide-black '>
       <div className=' flex flex-row px-[104px] py-6 items-center justify-between'>
        <p className='font-manrope text-[40px] font-[600] tracking-[.15rem]  '>
          <span className='block'>Review Items & </span>
          <span className='block'>Shipping</span>
        </p>
        
        <div className='flex flex-row w-[277px] h-[80px] rounded-[30px]
         border-b-8 border-l-2 border-t-2 border-r-2 border-solid
          border-black items-center justify-evenly bg-[#ffffff]'>
          <div className='flex flex-row items-center '>
            <p className='font-manrope text-[20px] font-[400] text-center '>
            <span className='block text-[20px] mt-2'>The total of cart is </span>
            <span className='block text-[36px]'> &#8377;{subTotal}</span>
            </p>
          </div>
        </div>
      </div>
      {cartItems.length > 0 && (
      <>
      <div className='px-[103px] py-8 flex flex-col '>
     {cartItems.map((item) => (
       <CartItems key={item.key} item={item} />
      ))}
      </div>

      <div className='flex justify-center'>
      <button className='bg-[#0E0E0E] text-[#ffffff] font-manrope
       font-bold text-[20px] px-[80px] py-[10px] rounded-[10px]'>Checkout</button>
      </div>
      </>
      )}
      {cartItems.length < 1 && (
          
           <div className="flex flex-col justify-center items-center tracking-[.10rem]">
            
              <img src={empty1} alt="empty-cart" border="0" width={300} height={300} className='mt-10' />
              
              <span className="text-xl font-bold font-manrope">
                            Your cart is empty
                        </span>
                        <span className="text-center mt-4 font-manrope ">
                            Looks like you have not added anything in your cart.
                            <br />
                            Go ahead and explore products.
                        </span>
                       <button className="py-4 px-8 rounded-full bg-black text-white text-lg
                        font-medium cursor-pointer transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8 font-manrope"
                        onClick={handleContinueShopping}
                        >
                            Continue Shopping 
                       </button>
           </div>
      )}

    
    </div>
  )
}

  


export default Cart
